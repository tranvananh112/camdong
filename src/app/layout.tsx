import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thôn Cẩm Đồng - Vẻ đẹp mộc mạc của miền quê Quảng Nam",
  description:
    "Khám phá vẻ đẹp mộc mạc của thôn Cẩm Đồng, xã Điện Phong (Quảng Nam) với cảnh quan đồng quê, sông nước và những chiếc cầu tre độc đáo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://app.tempolabs.ai/icons/file-extension-items/seti-ui/image.svg" />
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
