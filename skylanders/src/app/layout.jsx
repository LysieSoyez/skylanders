export const metadata = {
  title: "Skylanders",
  description: "List of all the skylanders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
