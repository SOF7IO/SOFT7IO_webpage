import { LogoLink } from "@/app/components/common/LogoLink";
import { DesktopNav } from "@/app/components/navigation/DesktopNav";
import { MobileMenuToggle } from "@/app/components/navigation/MobileMenuToggle";
import { MobileNav } from "@/app/components/navigation/MobileNav";
import { NAV_LINKS } from "@/app/data/navigation";
import { useMobileMenu } from "@/app/hooks/useMobileMenu";

export function Navigation() {
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <LogoLink />
          <DesktopNav links={NAV_LINKS} />
          <MobileMenuToggle isOpen={isOpen} onToggle={toggle} />
        </div>
      </div>
      {isOpen && <MobileNav links={NAV_LINKS} onLinkClick={close} />}
    </nav>
  );
}
