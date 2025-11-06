import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Fuat Oğur - Web & Yazılım Geliştirici",
  description: "Web ve yazılım geliştirme alanında çalışan bir yazılımcının kişisel web sitesi. Projeler ve iletişim bilgileri.",
  keywords: ["web geliştirme", "yazılım geliştirme", "Next.js", "React", "portfolio"],
  authors: [{ name: "Fuat Oğur" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
