import { useState } from "react";
import type { Theme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  IconSettings,
  IconPalette,
  IconLanguage,
  IconRefresh,
  IconInfoCircle,
  IconDeviceDesktop,
  IconSun,
  IconMoon,
  IconBrandGithub,
} from "@tabler/icons-react";
import { t, setLanguage } from "@/i18n/translations";
import { LANGUAGE_LABELS } from "@/i18n/languages";
import { useLanguage } from "@/hooks/useLanguage";

interface SettingsFabProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onReset: () => void;
}

export default function SettingsFab({
  theme,
  onThemeChange,
  onReset,
}: SettingsFabProps) {
  const currentLang = useLanguage();
  const [resetOpen, setResetOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-8 left-4 z-30 rounded-full bg-background shadow-md"
              aria-label={t().settings}
            />
          }
        >
          <IconSettings className="size-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" sideOffset={8} className="min-w-fit">
          {/* Theme submenu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconPalette className="size-4" />
              {t().theme}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={theme}
                onValueChange={(v) => onThemeChange(v as Theme)}
              >
                <DropdownMenuRadioItem value="system">
                  <IconDeviceDesktop />
                  {t().system}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="light">
                  <IconSun />
                  {t().light}
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  <IconMoon />
                  {t().dark}
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          {/* Language submenu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <IconLanguage className="size-4" />
              {t().language}
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={currentLang}
                onValueChange={(v) => setLanguage(v)}
              >
                {Object.entries(LANGUAGE_LABELS).map(([code, label]) => (
                  <DropdownMenuRadioItem key={code} value={code}>
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuSeparator />

          {/* Reset currencies with confirmation dialog */}
          <DropdownMenuItem
            variant="destructive"
            onClick={() => setResetOpen(true)}
          >
            <IconRefresh className="size-4" />
            {t().resetCurrencies}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => setAboutOpen(true)}>
            <IconInfoCircle className="size-4" />
            {t().about}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Reset confirmation dialog (controlled — lives outside the menu) */}
      <AlertDialog open={resetOpen} onOpenChange={setResetOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t().resetConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {t().resetConfirmBody}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t().cancel}</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                onReset();
                setResetOpen(false);
              }}
            >
              {t().resetCurrencies}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* About dialog */}
      <AlertDialog open={aboutOpen} onOpenChange={setAboutOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              curr<strong className="text-primary">ex</strong>
            </AlertDialogTitle>
            <AlertDialogDescription>{t().aboutTagline}</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="px-1 pb-2 text-sm text-muted-foreground">
            {t().aboutBody}
          </div>
          <a
            href="https://github.com/NemeZZiZZ/currex"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 mb-2 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <IconBrandGithub size={16} />
            {t().sourceCode}
          </a>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setAboutOpen(false)}>
              {t().close}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
