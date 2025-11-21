import React from "react";
import "./scss/style.scss";
import { Inter } from "next/font/google";
import Header from "@/app/ui/header";
import Cart from "@/app/ui/Cart";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <Cart />
        <main>{children}</main>
      </body>
    </html>
  );
}
