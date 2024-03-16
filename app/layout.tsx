import React from "react";
import ChangeLocale from "../components/ChangeLocale";
import { getLocale } from "../i18n/server";
import { LocaleProvider } from "@/providers/LocaleProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = getLocale();
  return (
    <html lang={locale}>
      <body
        style={{
          width: "100%",
          height: "100dvh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <LocaleProvider value={locale}>
          <ChangeLocale />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
