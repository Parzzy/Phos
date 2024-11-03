import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "PhosTech",
  description: "Phos is a problem solving website for your smartphone problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased text-zinc-950 bg-zinc-200 pb-16 md:pb-0`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
