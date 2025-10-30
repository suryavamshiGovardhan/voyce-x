import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { ICD9Category } from "@/data/icd9Categories";

interface CategoryCardProps {
  category: ICD9Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50"
      onClick={() => navigate(`/icd9/${category.range}`)}
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="text-primary font-bold">{category.range}</span>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        <CardDescription className="font-semibold text-base text-foreground">
          {category.title}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </CardContent>
    </Card>
  );
}
