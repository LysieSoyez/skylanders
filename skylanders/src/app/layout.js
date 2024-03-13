import "./style/Index.css";

export const metadata = {
  title: "Skylanders",
  description: "List of all the skylanders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style type="text/css"></style>
      </head>
      <body>{children}</body>
    </html>
  );
}
