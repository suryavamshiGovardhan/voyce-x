
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages } from "@/lib/i18n/languages";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('selectLanguage')} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
