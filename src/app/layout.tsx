import { montserrat, anton } from "@/utils/fonts";
import "./globals.css";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartTrigger from "@/components/Cart/CartTrigger";
import LoginModalTrigger from "@/components/LoginModal/LoginModalTrigger";
import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${anton.variable}`}>
      <body className="antialiased font-body font-normal bg-background text-foreground">
        <ShoppingCartProvider>
          <AuthProvider>
            {/* Header */}
            <Header />

            {/* Componentes globales */}
            <CartTrigger />
            <LoginModalTrigger />

            {children}
            <Footer />
          </AuthProvider>
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
