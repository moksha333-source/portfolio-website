import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./styles.css";

export const metadata: Metadata = {
  title: "Komarapuri Moksha Vardhan - Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts and other head tags */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        {children}

        {/* Load your script.js from public/ */}
        <Script src="/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
