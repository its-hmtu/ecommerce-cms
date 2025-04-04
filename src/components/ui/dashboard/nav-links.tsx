"use client";
import { ILinks } from "@/types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links: ILinks[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Products",
    href: "/dashboard/products",
  },
];

function NavLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`p-2 text-gray-800 font-medium rounded ${
            isActive(link.href) ? "bg-gray-300" : "hover:bg-gray-200"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
