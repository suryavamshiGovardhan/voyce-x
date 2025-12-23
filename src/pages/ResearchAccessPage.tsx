import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { BookOpen, GraduationCap, Users, AlertTriangle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export default function ResearchAccessPage() {
  const [role, setRole] = useState("");
  const [agreements, setAgreements] = useState({ nonDiagnostic: false, ethical: false });
  const navigate = useNavigate();

  const canSubmit = role && agreements.nonDiagnostic && agreements.ethical;

  return (
    <>
      <SEOHead
        title="Academic / Research Access | VOYCE-X"
        description="Request access to DSM-5, ICD classification, and psychology research materials. For academic reference only."
        keywords="DSM-5, ICD, psychology research, academic resources, mental health research"
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          {/* Header */}
          <section className="safe-space breathing-space border-b border-border">
            <div className="text-center max-w-2xl mx-auto">
              <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-6" />
              <h1 className="text-3xl font-semibold text-foreground mb-4">
                Academic / Research Access
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access to diagnostic reference materials is restricted to 
                verified students, researchers, and educators.
              </p>
            </div>
          </section>
          
          {/* Warning Banner */}
          <section className="safe-space py-8">
            <div className="max-w-xl mx-auto">
              <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground mb-1">
                    FOR ACADEMIC REFERENCE ONLY
                  </p>
                  <p className="text-muted-foreground">
                    Materials in this section are NOT for self-diagnosis or clinical use. 
                    They are academic references for educational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Application Form */}
          <section className="safe-space py-8">
            <div className="max-w-xl mx-auto">
              <div className="voyce-card p-6">
                <h2 className="text-lg font-medium text-foreground mb-6">
                  Request Access
                </h2>
                
                {/* Role Selection */}
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">
                    I am a:
                  </Label>
                  <RadioGroup value={role} onValueChange={setRole} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="flex items-center gap-2 cursor-pointer">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        Student (Psychology, Medicine, Social Work)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="researcher" id="researcher" />
                      <Label htmlFor="researcher" className="flex items-center gap-2 cursor-pointer">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        Researcher
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="educator" id="educator" />
                      <Label htmlFor="educator" className="flex items-center gap-2 cursor-pointer">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        Educator
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                {/* Agreements */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="nonDiagnostic"
                      checked={agreements.nonDiagnostic}
                      onCheckedChange={(checked) => 
                        setAgreements(prev => ({ ...prev, nonDiagnostic: !!checked }))
                      }
                    />
                    <Label htmlFor="nonDiagnostic" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                      I understand this material is for <strong className="text-foreground">academic reference only</strong> and 
                      will not use it for self-diagnosis or clinical decision-making.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="ethical"
                      checked={agreements.ethical}
                      onCheckedChange={(checked) => 
                        setAgreements(prev => ({ ...prev, ethical: !!checked }))
                      }
                    />
                    <Label htmlFor="ethical" className="text-sm text-muted-foreground cursor-pointer leading-relaxed">
                      I agree to use these materials ethically and in accordance with 
                      professional standards.
                    </Label>
                  </div>
                </div>
                
                {/* Submit */}
                <Button 
                  className="w-full" 
                  disabled={!canSubmit}
                  onClick={() => {
                    // In production, this would submit to approval queue
                    alert("Access request submitted. You will receive an email once approved.");
                    navigate("/");
                  }}
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Submit Access Request
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Requests are reviewed within 24-48 hours
                </p>
              </div>
            </div>
          </section>
          
          {/* What's Included */}
          <section className="safe-space py-12">
            <div className="max-w-xl mx-auto">
              <h2 className="text-lg font-medium text-foreground mb-4 text-center">
                What's Included (Read-Only)
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">• DSM-5 Diagnostic Reference</li>
                <li className="flex items-center gap-2">• ICD Classification Index</li>
                <li className="flex items-center gap-2">• Psychology Theory Summaries</li>
                <li className="flex items-center gap-2">• Curated Research Summaries</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4 italic">
                No quizzes. No self-tests. No symptom checkers. No personalization.
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
