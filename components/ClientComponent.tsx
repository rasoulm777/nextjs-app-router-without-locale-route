"use client";

import { useTranslation } from "@/i18n/client";

export default function ClientComponent() {
  const { t } = useTranslation("common");
  return (
    <div>
      <h1>{t("testInClientComponent")}</h1>
    </div>
  );
}
