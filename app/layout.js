import { Rokkitt } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

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
      <body className={twMerge(rokkitt.variable, " antialiased")}>
        {children}
      </body>
    </html>
  );
}
