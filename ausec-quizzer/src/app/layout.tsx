import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { ThemeProvider } from "~/components/theme-provider";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "AUSEC Quizzer",
  description: "Next-generation quiz application from AUSEC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body className="flex h-screen min-h-screen flex-col bg-hero-jigsaw">
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="mx-auto w-full max-w-4xl flex-grow py-6">
              {children}
            </div>
            {/* Sticky footer */}
            <footer className="w-full bg-secondary py-2 text-center text-white">
              <div className="mx-auto max-w-4xl">
                <p>&copy; 2024 AUSEC. All rights reserved.</p>
              </div>
            </footer>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
