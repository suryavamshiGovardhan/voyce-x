
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LoginPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight">
              {t('login')}
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">{t('email')}</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="password">{t('password')}</Label>
                <Input id="password" type="password" required />
              </div>
            </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full">
                {t('login')}
              </Button>
              <Button variant="outline" type="button" className="w-full flex items-center justify-center gap-2">
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Sign in with Google
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
