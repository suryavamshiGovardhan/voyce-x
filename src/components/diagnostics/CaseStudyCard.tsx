import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { User, Stethoscope, Lightbulb, TrendingUp, Users } from "lucide-react";
import { CaseStudy } from "@/data/dsm5CaseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden border-l-4 border-l-primary">
      <CardHeader className="bg-muted/30">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl mb-2">{caseStudy.disorderName}</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Badge variant="outline">{caseStudy.disorderCategory}</Badge>
            </CardDescription>
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            <User className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-4">
        {/* Patient Profile */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Patient Profile
          </h4>
          <div className="pl-6 space-y-1 text-sm">
            <p><span className="font-medium">Age:</span> {caseStudy.patientProfile.age}</p>
            {caseStudy.patientProfile.occupation && (
              <p><span className="font-medium">Occupation:</span> {caseStudy.patientProfile.occupation}</p>
            )}
            <p><span className="font-medium">Presenting Complaint:</span> {caseStudy.patientProfile.presenting_complaint}</p>
          </div>
        </div>

        {/* Detailed Accordion Sections */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="presentation">
            <AccordionTrigger className="text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-primary" />
                Clinical Presentation
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm">
                {caseStudy.clinicalPresentation.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="assessment">
            <AccordionTrigger className="text-sm font-semibold">
              Assessment & Diagnosis
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Clinical Assessment:</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.assessment}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Differential Diagnosis:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {caseStudy.differentialDiagnosis.map((diagnosis, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary">→</span>
                        <span>{diagnosis}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="treatment">
            <AccordionTrigger className="text-sm font-semibold">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Treatment & Outcomes
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-2">Treatment Approaches:</p>
                  <ul className="space-y-2 text-sm">
                    {caseStudy.treatment.approaches.map((approach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{approach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-muted/50 p-3 rounded-md">
                  <p className="text-sm font-medium mb-1">Treatment Outcome:</p>
                  <p className="text-sm text-muted-foreground">{caseStudy.treatment.outcomes}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {caseStudy.culturalConsiderations && (
            <AccordionItem value="cultural">
              <AccordionTrigger className="text-sm font-semibold">
                Cultural Considerations
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground">{caseStudy.culturalConsiderations}</p>
              </AccordionContent>
            </AccordionItem>
          )}

          <AccordionItem value="learning">
            <AccordionTrigger className="text-sm font-semibold">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Key Learning Points
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2 text-sm">
                {caseStudy.learningPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-primary/5 p-2 rounded">
                    <span className="text-primary font-bold mt-0.5">{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
