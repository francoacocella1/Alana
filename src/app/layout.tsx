import type { Metadata } from "next";
import "./globals.css";

import { abrilFatface, montserrat, playfairDisplay } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Confirmación — reunión de diagnóstico",
  description:
    "Pasos para confirmar tu reunión de diagnóstico: video y checklist final.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${playfairDisplay.variable} ${abrilFatface.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
