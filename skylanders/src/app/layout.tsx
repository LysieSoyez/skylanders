import React from "react";
import { Providers } from "./providers";

export const metadata = {
  title: "Skylanders",
  description: "List of all the skylanders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
