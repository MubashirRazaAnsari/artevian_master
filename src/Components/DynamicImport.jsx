"use client";
import React, { Suspense } from "react";

const DynamicImport = ({
  importFn,
  fallback = (
    <div className="w-full h-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  ),
}) => {
  const Component = React.lazy(importFn);

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default DynamicImport;
