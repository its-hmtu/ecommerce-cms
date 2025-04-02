import { IBreadCrumbs, ILinks } from "@/types";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

const BreadcrumbCommon: React.FC<IBreadCrumbs> = ({ content }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {content.map((item: ILinks, index: number) =>
          index + 1 !== content.length ? (
            <BreadcrumbItem key={index}>
              <Link href={item?.href}>{item?.label}</Link>
              <BreadcrumbSeparator />
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem key={index}>
              <BreadcrumbPage>
                {item?.label}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbCommon;
