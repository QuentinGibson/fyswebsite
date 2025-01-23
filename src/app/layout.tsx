import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./layout.css";
import "./theme.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body>
        <div className="grid h-full grid-rows-[auto_1fr_auto] text-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
