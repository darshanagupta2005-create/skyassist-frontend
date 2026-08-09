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

export function LanguageSelector({ value, onChange, compact }: Props) {
  const { i18n } = useTranslation();

  // Safely map complex locale codes (e.g., 'en-US') to primary codes ('en')
  const rawLang = value || i18n.language || "en";
  const matchedLang = LANGUAGES.find((l) => rawLang.startsWith(l.code))?.code || "en";

  const handleValueChange = (newLangCode: string) => {
    i18n.changeLanguage(newLangCode);
    if (onChange) {
      onChange(newLangCode);
    }
  };

  return (
    <Select value={matchedLang} onValueChange={handleValueChange}>
      <SelectTrigger
        className={compact ? "h-9 w-[140px] rounded-full border-border/70" : "h-12 rounded-xl"}
        aria-label="Preferred language"
      >
        <Globe className="size-4 shrink-0 text-muted-foreground" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent className="z-50 min-w-[160px]">
        {LANGUAGES.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}