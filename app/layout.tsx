import "./globals.css";

export const metadata = {
  title: "MUUNGANO E-LEARNING PLATFORM",
  description: "National Union Learning Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}