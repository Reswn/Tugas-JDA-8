"use client";

import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import React from "react";

function SideNav() {
  const { data: session } = useSession();
  const path = usePathname();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 border shadow-sm flex flex-col justify-between">
      <div>
        <Image src={"/logo.svg"} alt="logo" width={160} height={100} />

        <div className="mt-5">
          {menuList.map((menu) => (
            <Link href={menu.path} key={menu.id}>
              <h2
                className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
                  path === menu.path && "text-primary bg-blue-100"
                }`}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      {/* User info & logout */}
      {session?.user && (
        <div className="flex items-center gap-3 p-5 border-t">
          <Image
            src={session.user.image || "/default-avatar.png"}
            alt="User Avatar"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">{session.user.name}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-xs text-red-500 hover:underline"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
