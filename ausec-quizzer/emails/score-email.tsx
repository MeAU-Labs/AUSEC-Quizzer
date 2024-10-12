// src/emails/score-email.tsx
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { FEEDBACK_EMAIL } from "~/utils/constants";

interface ScoreEmailProps {
  score: number;
  totalScore: number;
}

const ScoreEmail = ({ score, totalScore }: ScoreEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Quiz Score from AUSEC Quizzer</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Img
          src={"https://i.imgur.com/ffhxSEU.jpeg"}
          width="164"
          height="164"
          alt="AUSEC Quizzer Logo"
          style={{ display: "block", margin: "0 auto" }} // Center the logo
        />
        <Heading style={styles.subText}>
          Thank You for Participating in the AUSEC Quiz!
        </Heading>
        <Text style={styles.h1}>
          Your score: {score}/{totalScore}
        </Text>
        <Text style={styles.footerText}>
          Need help? Contact us at{" "}
          <Link href={`mailto:${FEEDBACK_EMAIL}`}>support@ausec.com</Link>.
        </Text>
        <Text style={styles.footerNote}>
          AUSEC Quizzer &mdash; Empowering minds with knowledge.
        </Text>
      </Container>
    </Body>
  </Html>
);

const styles = {
  main: {
    backgroundColor: "#f4f4f4",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  container: {
    padding: "40px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center" as const,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  h1: {
    color: "#333",
    fontSize: "28px",
    marginBottom: "20px",
    fontWeight: "700",
  },
  subText: {
    color: "#555",
    fontSize: "16px",
    marginBottom: "30px",
  },
  footerText: {
    color: "#999",
    fontSize: "14px",
    marginTop: "20px",
  },
  footerNote: {
    color: "#666",
    fontSize: "12px",
    marginTop: "30px",
    fontStyle: "italic" as const,
  },
};

ScoreEmail.PreviewProps = {
  score: 18,
  totalScore: 30,
} as ScoreEmailProps;

export default ScoreEmail;
