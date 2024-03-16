import ClientComponent from "@/components/ClientComponent";
import { createTranslation } from "../i18n/server";

export default async function IndexPage() {
  const { t } = await createTranslation("common");

  return (
    <div>
      <h1>{t("testInServerComponent")}</h1>
      <ClientComponent />
    </div>
  );
}
