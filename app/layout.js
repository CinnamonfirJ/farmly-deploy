import { Rokkitt } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

const rokkitt = Rokkitt({
  subsets: ["latin"],
  variable: "--rokkitt",
});

export const metadata = {
  title: "Farmly",
  description: "AI powered farm monitor",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <meta property='og:image' content='/assets/thumbnail.png' />
      </Head>
      <body className={twMerge(rokkitt.variable, " antialiased")}>
        {children}
      </body>
    </html>
  );
}
