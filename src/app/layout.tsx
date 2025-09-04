import "./globals.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
