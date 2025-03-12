
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <div className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            {t('welcomeMessage')}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('description')}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="animate-pulse-gentle">
              <Link to="/newsletters">
                {t('newsletters')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/thoughts">{t('thoughts')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
