'use client'
import React, { ReactNode } from "react";

interface ProductWrapperProps {
  children: ReactNode;
}

export default function ProductWrapper({ children }: ProductWrapperProps) {
  return <div className="grid grid-cols-[48%_48%] gap-10">{children} </div>;
}
