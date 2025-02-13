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
    <footer className="bg-background ">
      <div>
        <div className="grid md:flex gap-20 justify-around mx-20">
          <div className="space-y-4">
            <p className="text-lg text-center">Follow us!</p>
            <div className="flex justify-center gap-2">
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Facebook className="h-5 w-5 hover:rotate-12" />
                </Link>
              </Button>
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Instagram className="h-5 w-5 hover:rotate-12" />
                </Link>
              </Button>
              <Button variant="link" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="h-5 w-5 hover:rotate-12" />
                </Link>
              </Button>
            </div>
            <h2 className="text-2xl font-bold tracking-tighter text-center">
              THREE MANGOS
            </h2>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-center md:text-left">
              LINKS
            </h3>
            <ul className="justify-start text-muted-foreground text-lg space-y-2">
              <li className="flex items-center">
                <Link href="#">HOME</Link>
              </li>
              <li className="flex items-center">
                <Link href="#">ABOUT</Link>
              </li>
              <li className="flex items-center">
                <Link href="#">SERVICES</Link>
              </li>
              <li className="flex items-center">
                <Link href="#">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-center md:text-left">
              CONTACT US
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  contacto@3mangos.site
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  +54 (011) 6046-3521
                </span>
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
            Design and developed with love by 🥭🥭🥭 <br /> &copy;{" "}
            {new Date().getFullYear()} - Three Mangos S.A
          </p>
        </div>
      </div>
    </footer>
  );
}
