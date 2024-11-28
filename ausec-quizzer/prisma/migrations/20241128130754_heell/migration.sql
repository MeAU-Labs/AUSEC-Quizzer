-- Session Count Increment
CREATE FUNCTION increment_session_count() RETURNS TRIGGER AS $$
BEGIN
    UPDATE "UserSessionCount"
    SET sessionCount = sessionCount + 1
    WHERE userId = NEW.userId;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_session_insert
AFTER INSERT ON "Session"
FOR EACH ROW
EXECUTE FUNCTION increment_session_count();

-- High Score Update
CREATE FUNCTION update_high_score() RETURNS TRIGGER AS $$
BEGIN
    IF NEW.score > COALESCE((SELECT score FROM "HighScore" WHERE userId = NEW.userId), 0) THEN
        INSERT INTO "HighScore" (userId, score, achievedAt)
        VALUES (NEW.userId, NEW.score, CURRENT_TIMESTAMP)
        ON CONFLICT (userId) DO UPDATE
        SET score = EXCLUDED.score, achievedAt = EXCLUDED.achievedAt;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_user_score_update
AFTER UPDATE ON "User"
FOR EACH ROW
WHEN (OLD.score IS DISTINCT FROM NEW.score)
EXECUTE FUNCTION update_high_score();

-- Suspicious Activity Flagging
CREATE FUNCTION flag_suspicious_activity() RETURNS TRIGGER AS $$
BEGIN
    IF (SELECT sessionCount FROM "UserSessionCount" WHERE userId = NEW.userId) > 5 THEN
        INSERT INTO "SuspiciousActivity" (userId, flaggedAt, flaggedByAdmin)
        VALUES (NEW.userId, CURRENT_TIMESTAMP, TRUE);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_session_count_update
AFTER UPDATE ON "UserSessionCount"
FOR EACH ROW
EXECUTE FUNCTION flag_suspicious_activity();


-- Email Link Sent Logging
CREATE FUNCTION log_email_link_sent() RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO "EmailLink" (userId, emailSentAt) 
    VALUES (NEW.userId, CURRENT_TIMESTAMP);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_email_link_send
AFTER INSERT ON "Session"
FOR EACH ROW
EXECUTE FUNCTION log_email_link_sent();

