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

interface MagicLinkEmailProps {
  verificationUrl: string;
}

export const MagicLinkEmail = ({ verificationUrl }: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Login to AUSEC Quizzer with this magic link</Preview>
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Img
          src={"https://i.imgur.com/ffhxSEU.jpeg"}
          width="164"
          height="164"
          alt="AUSEC Quizzer Logo"
          style={{ display: "block", margin: "0 auto" }} // Center the logo
        />

        <Heading style={styles.h1}>Start Your AUSEC Quiz</Heading>

        <Text style={styles.subText}>
          Click the button below to sign in and start your quiz.
        </Text>

        <Link href={verificationUrl} target="_blank" style={styles.button}>
          Start my AUSEC Quiz
        </Link>

        <Text style={styles.footerText}>
          If you didn&apos;t request this email, you can safely ignore it.
        </Text>

        <Text style={styles.footerText}>
          Need help? Contact us at{" "}
          <Link href="mailto:support@ausec.com">support@ausec.com</Link>.
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
  logo: {
    marginBottom: "20px",
    display: "block",
    margin: "0 auto", // Center the logo
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
  button: {
    backgroundColor: "#1D4ED8",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
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

MagicLinkEmail.PreviewProps = {
  verificationUrl: "http://localhost:3000/auth/signin?token=123",
} as MagicLinkEmailProps;

export default MagicLinkEmail;
