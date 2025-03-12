
import React from "react";
import { Instagram, Mail, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 border-t bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © {currentYear} VOYCE Mental Health Services. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a 
                href="https://instagram.com/edgegrit" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a 
                href="mailto:resqhield@gmail.com" 
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            
            <Button asChild variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <a 
                href="https://m.dailyhunt.in/mhmindia" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Dailyhunt"
              >
                <Book className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm">
            <a 
              href="https://mental-health-management-mhm.b12sites.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Visit our main website
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
