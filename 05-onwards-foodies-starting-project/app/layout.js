import "./globals.css";
import MainHeader from "@/components/main-header";
import MainHeaderBackground from "@/components/mean-header-background";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        <MainHeaderBackground />
        {children}
      </body>
    </html>
  );
}
