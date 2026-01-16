import type { Metadata } from "next";
import { Inter, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const allura = Allura({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura"
});

// --- UPDATED METADATA SECTION ---
export const metadata: Metadata = {
  title: "Elixi Fit-Out",
  description: "Best-in-class office interior and commercial space designing",
  icons: {
    // Pointing specifically to your jpeg file
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    // Apple devices prefer PNG, but we can link the JPEG as a fallback
    apple: "/favicon.jpeg", 
  },
};
// --------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${allura.variable}`}>{children}</body>
    </html >
  );
}