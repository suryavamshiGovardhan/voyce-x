import SiteHeader from "@/components/site/SiteHeader";

/**
 * Legacy navigation entry point. Kept so existing pages keep working,
 * but it now renders the single unified VOYCE header. Every destination
 * that used to live here (ICD-9, ACEs, DSM-5, tools, path, etc.) is
 * preserved inside SiteHeader's "Learn" and "Resources" menus.
 */
export default function DesktopNavigation() {
  return <SiteHeader />;
}
