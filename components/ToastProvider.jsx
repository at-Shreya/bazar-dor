"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3500,
        style: {
          background: "var(--color-base-100)",
          color: "var(--color-base-content)",
          border: "1px solid var(--color-base-300)",
          borderRadius: "0.75rem",
          fontFamily: "inherit",
        },
        success: {
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-base-100)",
          },
        },
        error: {
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-base-100)",
          },
        },
      }}
    />
  );
}