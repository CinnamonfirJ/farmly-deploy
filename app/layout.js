import { Rokkitt } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

// const inter = Inter({ subsets: ["latin"] });

const rokkitt = Rokkitt({
  subsets: ["latin"],
  variable: "--font-rokkitt",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Farmly",
  description: "AI powered farm monitor",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Farmly</title>
        <meta name='description' content='AI powered farm monitor' />

        <meta property='og:url' content='https://farmly-deploy.vercel.app/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Farmly' />
        <meta property='og:description' content='AI powered farm monitor' />
        <meta property='og:image' content='./opengraph-image.png' />
        <meta property='og:image:alt' content='Farmly' />
        {/* https://opengraph.b-cdn.net/production/images/779effd3-be15-4561-afbf-1cce5a26fa26.png?token=tjaYAIBKihQ00axIpCgxM39Vg96zeIDzHrmWiRELypA&height=1200&width=1200&expires=33259007520 */}

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='farmly-deploy.vercel.app' />
        <meta
          property='twitter:url'
          content='https://farmly-deploy.vercel.app/'
        />
        <meta name='twitter:title' content='Farmly' />
        <meta name='twitter:description' content='AI powered farm monitor' />
        <meta name='twitter:image' content='./opengraph-image.png' />
        <meta property='twitter:image:alt' content='Farmly' />
      </head>
      <body className={twMerge(rokkitt.variable, " antialiased")}>
        {children}
      </body>
    </html>
  );
}
