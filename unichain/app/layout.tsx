import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { ClientSidebar } from "@/components/client-wrappers/sidebar-wrapper";
import { ClientTopNav } from "@/components/client-wrappers/topnav-wrapper";
import { RouteTemplate } from "@/components/route-template";
import { preloadComponents } from "./preload";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Preload critical components
if (typeof window !== 'undefined') {
  preloadComponents();
}

export const metadata = {
  title: "UniChain - A Holistic Campus Ecosystem",
  description: "Decentralized platform for university students",
};

// Enable dynamic rendering for better performance
export const dynamic = 'force-dynamic';

// Disable automatic revalidation for better performance
export const revalidate = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={false}>
            <div className="flex min-h-screen w-full flex-col md:flex-row bg-background">
              <Suspense fallback={<Loading />}>
                <ClientSidebar />
              </Suspense>
              <div className="flex-1 flex flex-col min-w-0 relative">
                <div className="sticky top-0 z-50 w-full">
                  <Suspense fallback={<Loading />}>
                    <ClientTopNav />
                  </Suspense>
                </div>
                <main className="flex-1 overflow-y-auto">
                  <div className="h-full w-full">
                    <RouteTemplate>
                      {children}
                    </RouteTemplate>
                  </div>
                </main>
              </div>
            </div>
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
