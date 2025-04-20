// app/blog/layout.tsx
import { ReactNode } from "react";
import WeatherBackground from "@/components/Background/WeatherBackground";
import Sidebar from "@/components/Sidebar/Sidebar";
import ClientProvider from "@/components/Provider/ClientProvider";
import { PageTransitionProvider } from "@/components/Provider/PageTransitionProvider";

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ClientProvider>
      <WeatherBackground>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4">
            <PageTransitionProvider variant="slide">
              {children}
            </PageTransitionProvider>
          </main>
        </div>
      </WeatherBackground>
    </ClientProvider>
  );
}
