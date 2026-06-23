import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { RetroCursor } from "@/components/retro-cursor";
import { profile } from "@/lib/site-data";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Clinical Data Science Portfolio`,
    template: `%s | ${profile.name}`
  },
  description:
    "Portfolio for a University of Toronto quantitative biology student focused on clinical data science, biostatistics, clinical trials, survival analysis, oncology, and real-world data.",
  keywords: [
    "Clinical Data Science",
    "Biostatistics",
    "Clinical Trials",
    "Survival Analysis",
    "Oncology",
    "Real-World Data",
    "University of Toronto",
    "Quantitative Biology"
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Clinical Data Science Portfolio`,
    description:
      "Clinical data science portfolio focused on biostatistics, clinical trials, survival analysis, oncology, and data-driven drug development.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <main>{children}</main>
        <RetroCursor />
      </body>
    </html>
  );
}
