import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

/** Language picker used both on the login card and in the navbar. */
export function LanguageSelector({ value, onChange, compact }: Props) {
  const { i18n } = useTranslation();

  // Use passed value or fallback to active i18n language
  const currentLang = value || i18n.language || "en";

  const handleValueChange = (newLangCode: string) => {
    // 1. Update i18next global state
    i18n.changeLanguage(newLangCode);

    // 2. Call parent callback if provided
    if (onChange) {
      onChange(newLangCode);
    }
  };

  return (
    <Select value={currentLang} onValueChange={handleValueChange}>
      <SelectTrigger
        className={compact ? "h-9 w-[140px] rounded-full border-border/70" : "h-12 rounded-xl"}
        aria-label="Preferred language"
      >
        <Globe className="size-4 shrink-0 text-muted-foreground" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {LANGUAGES.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}