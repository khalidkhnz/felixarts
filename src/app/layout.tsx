import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import { AuthProvider } from "@/providers/AuthProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const fontSans = localFont({
  src: "../../public/fonts/futura3.woff2",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://felixarts.com"),
  keywords: ["FelixArts", "felix arts", "felixart", "felix store"],
  title: {
    default: "FelixArts",
    template: `%s - FelixArts`,
  },
  description: "Flex with Felix - your favorite store",
  openGraph: {
    description: "Flex with Felix - your favorite store",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans m-0 p-0 antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
