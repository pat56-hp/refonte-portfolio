import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function ProjectSekeleton() {
  return (
    <div className="flex flex-col md:flex-row md:gap-11 gap-5 hover:cursor-progress">
      <div className="group lg:w-95 h-55 w-full rounded-md overflow-hidden relative mx-auto md:mx-0">
        <Skeleton className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="flex-1 flex flex-col gap-y-5">
        <div className="flex flex-col md:flex-row md:items-center gap-5 justify-between">
          <div className="grid gap-3">
            <Skeleton className="h-4 w-30" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}
