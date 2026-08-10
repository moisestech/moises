export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "ui-sans-serif, system-ui, sans-serif", background: "#fafaf9", color: "#1c1917" }}>
        {children}
      </body>
    </html>
  );
}
