import React from "react";

export default function loading() {
  return (
    <div className="h-screen flex justify-center items-center animate-puls rounded-lg skeleton bg-gray-50 w-full">
      <span className="loading  loading-ring loading-lg"></span>
    </div>
  );
}
