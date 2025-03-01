"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { getDictionary } from "@/app/i18n/dictionaries";

export default function Footer() {
  const { locale } = useLanguage();
  const dictionary = getDictionary(locale);

  return (
    <footer className="bg-background ">
      <div>
        <div className="grid md:flex gap-20 justify-around mx-20">
          <div className="space-y-4">
            <p className="text-lg text-center italic">
              {dictionary.footer.follow}
            </p>
            <div className="flex justify-center gap-2">
              <Button
                variant="transparent"
                size="sm"
                asChild
                className="hover:scale-125 transition-all duration-300"
              >
                <Link href="https://www.facebook.com/profile.php?id=61572837291325">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="transparent"
                size="sm"
                asChild
                className="hover:scale-125 transition-all duration-300"
              >
                <Link href="https://www.instagram.com/3mangos.agency/">
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <h2 className="text-2xl font-bold tracking-tighter text-center">
              {dictionary.footer.title}
            </h2>
            <p className="flex justify-center text-muted-foreground mx-auto -translate-y-5">
              {dictionary.footer.description}
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-center md:text-left">
              {dictionary.footer.getInTouch}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Link href="mailto:contacto@3mangos.site">
                  <span className="text-muted-foreground">
                    contacto@3mangos.site
                  </span>
                </Link>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <Link href="https://wa.me/5491160463521" target="_blank">
                  <span className="text-muted-foreground">
                    +54 (011) 6046-3521 (WhatsApp)
                  </span>
                </Link>
              </li>
              <li className="flex items-center space-x-4">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-20 mb-5 bg-secondary-foreground" />
        <div className="flex justify-center mb-5 w-full h-full items-center text-center">
          <p className="text-sm text-muted-foreground">
            {dictionary.footer.msg} <br /> &copy; {new Date().getFullYear()} -{" "}
            {dictionary.footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
