import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="dark:bg-[#333333]">
      <div className="py-5 md:py-1">
        <div className="grid md:flex gap-20 justify-around mx-20">
          <div className="space-y-4">
            <p className="text-sm text-center">Follow us!</p>
            <div className="flex justify-center">
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <h2 className="text-2xl font-bold tracking-tighter text-center">
              Three Mangos
            </h2>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  contacto@3mangos.site
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  +54 (011) 6046-3521
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-20 mb-5 bg-[#333333] dark:bg-white/80" />
        <div className="flex justify-center items-center md:mb-5">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Three Mangos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
