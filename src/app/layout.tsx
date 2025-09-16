import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

const lora = localFont({
  src: "../../public/fonts/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Phúc Long Wedding",
  description:
    "Phúc Long Wedding cung cấp dịch vụ cưới trọn gói, trang trí tiệc cưới đẹp mắt và độc đáo, biến ngày trọng đại của bạn thành kỷ niệm đáng nhớ.",
  keywords: [
    "wedding",
    "phúc long wedding",
    "dịch vụ cưới",
    "trang trí tiệc cưới",
    "tổ chức đám cưới",
  ],
  authors: [{ name: "Phúc Long Wedding" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#f9c0c0", // màu chủ đạo trang web
  openGraph: {
    title: "Phúc Long Wedding - Dịch vụ cưới chuyên nghiệp",
    description:
      "Phúc Long Wedding biến ngày cưới của bạn trở thành kỷ niệm đáng nhớ với dịch vụ trang trí và tổ chức tiệc cưới trọn gói.",
    url: "https://phuclongwedding.com",
    siteName: "Phúc Long Wedding",
    images: [
      {
        url: "https://phuclongwedding.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Phúc Long Wedding",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phúc Long Wedding - Dịch vụ cưới chuyên nghiệp",
    description:
      "Phúc Long Wedding biến ngày cưới của bạn trở thành kỷ niệm đáng nhớ với dịch vụ trang trí và tổ chức tiệc cưới trọn gói.",
    images: ["https://phuclongwedding.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${lora.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
