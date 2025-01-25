import "./globals.css";
import { Inter } from "next/font/google";
import { AppSidebar } from "./_components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management App",
  description: "An enterprise-friendly project management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey-950`}>
        <SidebarProvider>
          <div className="flex h-screen bg-grey-100 w-full">
            <AppSidebar />
            <main className="flex-1 overflow-y-auto bg-grey-50">
              <div className="p-4">
                <SidebarTrigger />
              </div>
              <div className="p-8">{children}</div>
            </main>
          </div>
        </SidebarProvider>  
      </body>
    </html>
  );
}
