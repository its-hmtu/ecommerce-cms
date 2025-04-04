import BreadcrumbCommon from "@/components/common/breadcrumb-common";
import { ILinks } from "@/types";
import React from "react";

const breadcrumbs: ILinks[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Products",
    href: "/dashboard/products",
  }
];

function Page() {
  return <BreadcrumbCommon content={breadcrumbs} />;
}

export default Page;
