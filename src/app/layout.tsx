import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../components/providers/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "نظام إدارة متجر العطور - Perfume Store ERP",
  description: "نظام إدارة شامل لمتاجر العطور يعتمد على الذكاء الاصطناعي لتحسين الأداء والمبيعات",
  keywords: ["ERP", "perfume", "عطور", "نظام إدارة", "ذكاء اصطناعي", "متجر إلكتروني"],
  authors: [{ name: "متجر العطور" }],
  openGraph: {
    title: "نظام إدارة متجر العطور",
    description: "نظام إدارة شامل لمتاجر العطور يعتمد على الذكاء الاصطناعي",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
