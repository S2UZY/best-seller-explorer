import type { Metadata } from "next";
import "../styles/global.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "The New York Times",
  description: "The New York Times Best Seller Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
