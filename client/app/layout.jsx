import "../styles/globals.css";

export const metadata = {
  title: "cura",
  description: "Personalized Health Dashboard",
  icons: {
    icon: ["assets/images/logo.png"],
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
