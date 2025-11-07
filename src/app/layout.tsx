import localFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

const montserrat = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});

const lora = localFont({
  src: "../../public/fonts/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phuclongwedding.com"),
  title: "Phúc Long Wedding",
  description:
    "Phúc Long Wedding cung cấp dịch vụ cưới trọn gói, trang trí tiệc cưới đẹp mắt và độc đáo, biến ngày trọng đại của bạn thành kỷ niệm đáng nhớ. Phúc Long Wedding, dịch vụ tổ chức đám cưới số một tại Hạ Long, Quảng Ninh",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://phuclongwedding.com",
  },
  keywords: [
    "wedding",
    "phúc long wedding",
    "dịch vụ cưới",
    "trang trí tiệc cưới",
    "tổ chức đám cưới",
    "hạ long",
    "quảng ninh",
    "đám cưới hạ long",
    "đám cưới quảng ninh",
  ],
  authors: [{ name: "Phúc Long Wedding" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Phúc Long Wedding - Dịch vụ cưới chuyên nghiệp",
    description:
      "Phúc Long Wedding biến ngày cưới của bạn trở thành kỷ niệm đáng nhớ với dịch vụ trang trí và tổ chức tiệc cưới trọn gói.",
    url: "https://phuclongwedding.com",
    siteName: "Phúc Long Wedding",
    images: [
      {
        url: "/images/home/about.png",
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
    images: ["/images/home/about.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} ${lora.variable}`}>
      <head>
        {/* ✅ Structured Data: LocalBusiness */}
        <Script
          id="ld-json-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Phúc Long Wedding",
            image: "https://phuclongwedding.com/images/home/about.png",
            "@id": "https://phuclongwedding.com",
            url: "https://phuclongwedding.com",
            telephone: "0383 44 22 66",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "SN 15-17 Ông Ích Kiêm , Phường Cao Xanh, thành phố Hạ Long, tỉnh Quảng Ninh",
              addressLocality: "Hạ Long",
              addressRegion: "Quảng Ninh",
              addressCountry: "VN",
            },
            sameAs: ["https://www.facebook.com/phuclongwedding?locale=vi_VN"],
          })}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
