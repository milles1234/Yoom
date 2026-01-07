import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  SignUp
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zoom Clone",
  description: "zoom call",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
     appearance={{
      variables:{
        colorText: '#fff',
        colorPrimary:'#0E78F9',
        colorBackground:'#1c1f2e',
        colorInputBackground:'#252a41',
        colorInputText:'#fff'
      }
     }}>
    <html lang="en">
      
        <body
        className={`${geistSans.variable} ${geistMono.variable} bg-dark-2 antialiased`}
        >
        {children}
      </body>
     
      
    </html>
    </ClerkProvider>
  );
}
