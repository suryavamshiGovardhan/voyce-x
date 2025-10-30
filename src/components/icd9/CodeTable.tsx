import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import NarrationButton from "./NarrationButton";
import { ICD9Code } from "@/data/icd9Categories";

interface CodeTableProps {
  codes: ICD9Code[];
  language?: string;
}

export default function CodeTable({ codes, language = "en-US" }: CodeTableProps) {
  if (codes.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-muted-foreground">No codes found matching your search.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Code</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {codes.map((code) => (
                <TableRow key={code.code} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-bold text-primary">
                    {code.code}
                  </TableCell>
                  <TableCell className="font-semibold">{code.title}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <p className="text-sm">{code.description}</p>
                      {code.symptoms && code.symptoms.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-muted-foreground">Symptoms:</p>
                          <div className="flex flex-wrap gap-1">
                            {code.symptoms.map((symptom, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {symptom}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      {code.causes && code.causes.length > 0 && (
                        <div className="space-y-1">
                          <p className="text-xs font-semibold text-muted-foreground">Causes:</p>
                          <div className="flex flex-wrap gap-1">
                            {code.causes.map((cause, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {cause}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <NarrationButton 
                      text={`${code.code}. ${code.title}. ${code.description}`}
                      language={language}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
