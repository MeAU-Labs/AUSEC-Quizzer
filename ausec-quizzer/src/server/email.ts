import { Resend } from "resend";
import { env } from "~/env";

export const resendClient = new Resend(env.EMAIL_SERVER_PASSWORD);
