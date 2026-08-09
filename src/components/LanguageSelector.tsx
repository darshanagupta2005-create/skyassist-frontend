import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
  { code: "zh", label: "中文" },
];

interface Props {
  value?: string;
  onChange?: (value: string) => void;
  compact?: boolean;
}

export function LanguageSelector({ value, onChange, compact }: Props) {
  const { i18n } = useTranslation();

  const currentLang = LANGUAGES.find(
    (l) => (value || i18n.language || "en").startsWith(l.code)
  )?.code || "en";

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLangCode = e.target.value;
    i18n.changeLanguage(newLangCode);
    if (onChange) {
      onChange(newLangCode);
    }
  };

  return (
    <div className="relative flex items-center w-full">
      <Globe className="absolute left-3 size-4 text-muted-foreground pointer-events-none z-10" />
      <select
        value={currentLang}
        onChange={handleSelectChange}
        className={
          compact
            ? "h-9 w-[140px] pl-9 pr-3 rounded-full border border-border/70 bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer appearance-none"
            : "h-12 w-full pl-9 pr-8 rounded-xl border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer appearance-none"
        }
        aria-label="Preferred language"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-background text-foreground py-1">
            {lang.label}
          </option>
        ))}
      </select>
      {/* Native dropdown arrow indicator */}
      <span className="absolute right-3 pointer-events-none text-xs text-muted-foreground">▼</span>
    </div>
  );
}