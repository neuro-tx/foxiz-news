import type { Metadata } from "next";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsProvider";

export const metadata: Metadata = {
  title: "Nova News | Breaking News, Headlines & Top Stories from Around the World",
  description: "Stay updated with Nova News — your trusted source for the latest breaking news, trending headlines, and in-depth stories from politics, technology, entertainment, sports, and more. Real-time reporting, every day."
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
      <body>
        <SettingsProvider>{children}</SettingsProvider>
      </body>
    </html>
  );
}
