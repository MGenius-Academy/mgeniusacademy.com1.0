import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <Container className="flex h-18 items-center justify-between gap-4 py-2">
        <SiteLogo />

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {mainNav.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-64 gap-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink
                            render={<Link href={child.href} />}
                          >
                            <div className="flex flex-col">
                              <span className="font-medium">{child.label}</span>
                              {child.description ? (
                                <span className="text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              ) : null}
                            </div>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    render={<Link href={item.href!} />}
                    className={cn(navigationMenuTriggerStyle(), "font-medium")}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            render={
              <a href={siteConfig.trialFormUrl} target="_blank" rel="noopener noreferrer" />
            }
          >
            Book a Free Trial
          </Button>
          <Button
            variant="outline"
            render={<a href={siteConfig.enrollUrl} target="_blank" rel="noopener noreferrer" />}
          >
            Enroll Now
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu" />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>
                <SiteLogo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 overflow-y-auto px-4 pb-6">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-border py-2">
                  {item.href ? (
                    <Link href={item.href} className="block py-1.5 font-semibold">
                      {item.label}
                    </Link>
                  ) : (
                    <p className="py-1.5 font-semibold">{item.label}</p>
                  )}
                  {item.children ? (
                    <ul className="flex flex-col gap-1 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-1 text-sm text-muted-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <Button
                className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
                render={
                  <a href={siteConfig.trialFormUrl} target="_blank" rel="noopener noreferrer" />
                }
              >
                Book a Free Trial
              </Button>
              <Button
                variant="outline"
                className="mt-2"
                render={
                  <a href={siteConfig.enrollUrl} target="_blank" rel="noopener noreferrer" />
                }
              >
                Enroll Now
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
