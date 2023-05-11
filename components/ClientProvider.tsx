"use client";
import { Toaster } from "react-hot-toast";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#000",
            color: "#fff",
          },
        }}
      />
      {children}
    </>
  );
}
