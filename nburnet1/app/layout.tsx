import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

import Resume from "../public/resume.json"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import  DownloadIcon from "@mui/icons-material/Download";
import { GithubIcon } from "@/components/icons";
import LaunchIcon from '@mui/icons-material/Launch';
import MailIcon from '@mui/icons-material/Mail';

export const metadata: Metadata = {
  title: {
    default: Resume.basics.name,
    template: `%s - ${Resume.basics.name}`,
  },
  description: Resume.basics.label,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Portfolio", 
    "Software Engineering", 
    "Programming",  
    "UNCA", 
    "Software Development", 
    "Sierra Nevada", 
    "Microtech Knives",
    "Intellic Integration",
    "MES",
    "Software Engineering",
    "GoMES",
    "North Carolina", 
    "Noah Burnette",
    "Manufacturing"
  ]
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased bg-gradient-to-tl to-background-600 light:to-background-700 from-background from-85% ",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative bg-transparent flex flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex-row justify-center flex mt-4 py-4 gap-4 bg-background-800" >
              <div className="flex flex-col p-4 gap-4">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current item-center"
                  href="/Noah_Burnette_Resume.pdf"
                  title="Resume"
                >

                  <p className="text-default-500">Resume</p>
                  <DownloadIcon fontSize="small" className="text-default-500" />
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://nextjs.org/"
                  title="Next.js"
                >
                  <p className="text-default-500">Next.js</p>
                  <LaunchIcon fontSize="small" className="text-default-500" />
                </Link>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://jsonresume.org/"
                  title="jsonresume.org"
                >
                  <p className="text-default-500">JSON Resume</p>
                  <LaunchIcon fontSize="small" className="text-default-500" />
                </Link>

              </div>
                <div className="flex flex-col p-4 gap-4">
                  <Link className="gap-2 flex items-center" isExternal aria-label={Resume.basics.profiles[1].network} href={Resume.basics.profiles[1].url}>
                    <LinkedInIcon className="text-default-500" />
                  <p className="text-default-500">LinkedIn</p>
                  </Link>
                <Link className="gap-2 flex items-center" isExternal aria-label="Github" href={Resume.basics.profiles[0].url}>
                    <GithubIcon className="text-default-500" />
                  <p className="text-default-500">Github</p>
                  </Link>
                <Link className="gap-2 flex items-center" isExternal aria-label="Github" href={`mailto:${Resume.basics.email}`}>
                  <MailIcon className="text-default-500" />
                  <p className="text-default-500">Email</p>
                </Link>
                

                </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
