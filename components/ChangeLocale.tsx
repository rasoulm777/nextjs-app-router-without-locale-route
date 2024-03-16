"use client";
import React from "react";
import { switchLocaleAction } from "../actions/switch-locale";
import { useTranslation } from "../i18n/client";

export default function ChangeLocale() {
  const { i18n, t } = useTranslation("common");

  return (
    <div>
      <select
        onChange={(e) => switchLocaleAction(e.target.value)}
        value={i18n.resolvedLanguage}
        style={{ fontSize: "30px" }}
      >
        <option value="en">🇺🇸 {t("english")}</option>
        <option value="fa">🇨🇳 {t("فارسی")}</option>
      </select>
    </div>
  );
}
