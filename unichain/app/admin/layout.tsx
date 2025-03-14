import type React from "react";
import { AdminSidebar } from "@/components/admin-components/admin-sidebar";
import { AdminTopNav } from "@/components/admin-components/admin-top-nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </main>
  );
}
