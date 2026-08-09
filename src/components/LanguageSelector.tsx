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

  const currentLang = LANGUAGES.find(
    (l) => (value || i18n.language || "en").startsWith(l.code)
  )?.code || "en";

  const handleValueChange = (newLangCode: string) => {
    i18n.changeLanguage(newLangCode);
    if (onChange) {
      onChange(newLangCode);
    }
  };

  return (
    <div className="relative z-50">
      <Select value={currentLang} onValueChange={handleValueChange}>
        <SelectTrigger
          className={
            compact
              ? "h-9 w-[140px] rounded-full border-border/70 bg-background/80 backdrop-blur-md cursor-pointer"
              : "h-12 w-full rounded-xl bg-background/80 backdrop-blur-md cursor-pointer"
          }
          aria-label="Preferred language"
        >
          <Globe className="size-4 shrink-0 text-muted-foreground" />
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent className="z-[9999] bg-background border border-border shadow-xl">
          {LANGUAGES.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}