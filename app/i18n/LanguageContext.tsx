"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type LanguageContextType = {
  locale: "en" | "es";
  setLocale: (locale: "en" | "es") => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as "en" | "es";
  const [locale, setLocaleState] = useState<"en" | "es">(currentLocale);

  const setLocale = (newLocale: "en" | "es") => {
    setLocaleState(newLocale);
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname, { shallow: true });
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
