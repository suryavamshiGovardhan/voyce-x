
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Newsletters from "@/components/Newsletters";
import ClearThoughts from "@/components/ClearThoughts";
import Footer from "@/components/Footer";
import WelcomeSection from "@/components/WelcomeSection";
import ImportantContacts from "@/components/ImportantContacts";
import GovernmentSchemes from "@/components/GovernmentSchemes";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 via-blue-50 to-orange-50 japanese-pattern">
      <Navbar />
      <main className="flex-grow">
        <WelcomeSection />
        
        {/* Important Contacts & Government Schemes */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-3d">
              <ImportantContacts />
            </div>
            <div className="card-3d">
              <GovernmentSchemes />
            </div>
          </div>
        </section>
        
        <Hero />
        
        {/* Services section with Japanese aesthetic */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 via-blue-100 to-orange-50 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-light text-slate-800 text-center mb-12 tracking-wide float-3d">{t('ourServices')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg zen-transition border-sky-200 hover:border-orange-300 card-3d haptic-btn">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-sky-700" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">{t('mentalHealthSupport')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('description')}</p>
                    <Button asChild variant="outline" className="mt-4 border-sky-300 hover:bg-sky-50 haptic-btn">
                      <a href="https://mental-health-management-mhm.b12sites.com/" target="_blank" rel="noopener noreferrer">
                        {t('learnMore')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg zen-transition border-sky-200 hover:border-orange-300 card-3d haptic-btn">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-orange-700" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">{t('communityResources')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('description')}</p>
                    <Button asChild className="mt-4 bg-orange-500 hover:bg-orange-600 haptic-btn">
                      <a href="/newsletters">
                        {t('newsletters')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg zen-transition border-sky-200 hover:border-orange-300 card-3d haptic-btn">
                <CardContent className="pt-8 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-sky-100 to-orange-200 flex items-center justify-center">
                      <MessageSquare className="h-8 w-8 text-sky-700" />
                    </div>
                    <h3 className="text-xl font-medium text-slate-800">{t('expressYourself')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('description')}</p>
                    <Button asChild variant="outline" className="mt-4 border-orange-300 hover:bg-orange-50 haptic-btn">
                      <a href="/thoughts">
                        {t('thoughts')}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Featured newsletters preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light text-slate-800 tracking-wide float-3d">{t('featuredResources')}</h2>
              <Button asChild variant="outline" className="border-sky-300 hover:bg-sky-50 haptic-btn">
                <a href="/newsletters">{t('viewAll')}</a>
              </Button>
            </div>
            <div className="card-3d">
              <Newsletters />
            </div>
          </div>
        </section>
        
        {/* Clear thoughts preview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 via-blue-100 to-orange-50 slide-3d-enter">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-light text-slate-800 tracking-wide float-3d">{t('communityThoughts')}</h2>
              <Button asChild variant="outline" className="border-sky-300 hover:bg-sky-50 haptic-btn">
                <a href="/thoughts">{t('viewAll')}</a>
              </Button>
            </div>
            <div className="card-3d">
              <ClearThoughts />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
