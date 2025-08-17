import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Plant Shop",
  description: "A variety of plants for your home - by Elsa Chimba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
