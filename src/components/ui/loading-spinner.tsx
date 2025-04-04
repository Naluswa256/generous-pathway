
import React from "react";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-charity-blue border-r-transparent border-b-4 border-l-transparent"></div>
    </div>
  );
}
