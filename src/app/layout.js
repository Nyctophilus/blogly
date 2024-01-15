import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import InfScoller from "@/components/infScoller/infScoller";

export const metadata = {
  title: {
    default: "Blogly",
    template: "%s  | Blogly",
  },
  description: "Nextjs app developed by muhammed yousry fayad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        <InfScoller />

        <Footer />
      </body>
    </html>
  );
}
