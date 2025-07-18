import type { Metadata } from "next";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsProvider";
import Navbar from "@/components/Navbar";
import SettingsLayout from "@/components/Settings";
import CaregoriesNav from "@/components/CaregoriesNav";

export const metadata: Metadata = {
  title:
    "Nova News | Breaking News, Headlines & Top Stories from Around the World",
  description:
    "Stay updated with Nova News — your trusted source for the latest breaking news, trending headlines, and in-depth stories from politics, technology, entertainment, sports, and more. Real-time reporting, every day.",
  icons: {
    icon: [
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  if (theme === "dark") {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-dvh w-full overflow-x-hidden bg-white-50 font-inter dark:bg-dark transition-1 text-dark-200 dark:text-white">
        <SettingsProvider>
          <Navbar />
          <CaregoriesNav />
          <SettingsLayout>{children}</SettingsLayout>
        </SettingsProvider>
      </body>
    </html>
  );
}
