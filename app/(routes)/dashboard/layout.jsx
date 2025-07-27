// app/dashboard/layout.jsx
import React from "react";
import dynamic from "next/dynamic";

const DashboardHead = dynamic(() => import("./_components/DashboardHead"), {
  ssr: false,
});
const SideNav = dynamic(() => import("./_components/SideNav"), { ssr: false });

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar hanya dirender di client */}
      <aside className="w-64 hidden md:block fixed">
        <SideNav />
      </aside>

      {/* Konten utama */}
      <div className="flex-1 md:ml-64">
        <DashboardHead />
        {children}
      </div>
    </div>
  );
}
