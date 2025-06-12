
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Book, Globe, FileText, Microscope } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

interface KnowledgeResource {
  type: 'wikipedia' | 'article' | 'book' | 'external';
  title: string;
  summary: string;
  link: string;
  author?: string;
  date?: string;
  source?: string;
  image?: string;
}

interface InfiniteKnowledgeProps {
  topic: string;
  searchTerms: string[];
}

export default function InfiniteKnowledge({ topic, searchTerms }: InfiniteKnowledgeProps) {
  const [resources, setResources] = useState<KnowledgeResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated knowledge resources (in real implementation, this would fetch from APIs)
  useEffect(() => {
    const simulatedResources: KnowledgeResource[] = [
      {
        type: 'wikipedia',
        title: `${topic} - Wikipedia`,
        summary: `Comprehensive overview of ${topic} including definitions, symptoms, treatments, and current research.`,
        link: `https://en.wikipedia.org/wiki/${topic.replace(/\s+/g, '_')}`,
        source: 'Wikipedia'
      },
      {
        type: 'article',
        title: `Recent Advances in ${topic} Research`,
        summary: `Latest peer-reviewed research on ${topic} from leading neuroscience journals.`,
        link: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(topic)}`,
        author: 'Multiple Authors',
        date: '2024',
        source: 'PubMed'
      },
      {
        type: 'book',
        title: `Understanding ${topic}: A Complete Guide`,
        summary: `Comprehensive guide covering all aspects of ${topic} for both professionals and individuals.`,
        link: `https://amazon.com/s?k=${encodeURIComponent(topic + ' book')}`,
        author: 'Leading Experts',
        source: 'Amazon',
        image: '/placeholder.svg'
      },
      {
        type: 'external',
        title: `WHO Guidelines on ${topic}`,
        summary: `Official World Health Organization recommendations and guidelines.`,
        link: `https://www.who.int/health-topics/${topic.toLowerCase().replace(/\s+/g, '-')}`,
        source: 'World Health Organization'
      },
      {
        type: 'article',
        title: `${topic} and Brain Function`,
        summary: `Neuroscience research exploring the relationship between ${topic} and brain function.`,
        link: `https://scholar.google.com/scholar?q=${encodeURIComponent(topic + ' neuroscience')}`,
        author: 'Neuroscience Research',
        date: '2024',
        source: 'Google Scholar'
      },
      {
        type: 'external',
        title: `NIMH Resources on ${topic}`,
        summary: `National Institute of Mental Health official resources and treatment information.`,
        link: `https://www.nimh.nih.gov/health/topics/${topic.toLowerCase().replace(/\s+/g, '-')}`,
        source: 'NIMH'
      }
    ];

    setTimeout(() => {
      setResources(simulatedResources);
      setIsLoading(false);
    }, 1000);
  }, [topic, searchTerms]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'wikipedia': return <Globe className="h-5 w-5" />;
      case 'article': return <FileText className="h-5 w-5" />;
      case 'book': return <Book className="h-5 w-5" />;
      case 'external': return <Microscope className="h-5 w-5" />;
      default: return <ExternalLink className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'wikipedia': return 'text-blue-300 bg-blue-100/10';
      case 'article': return 'text-green-300 bg-green-100/10';
      case 'book': return 'text-purple-300 bg-purple-100/10';
      case 'external': return 'text-orange-300 bg-orange-100/10';
      default: return 'text-slate-300 bg-slate-100/10';
    }
  };

  const handleResourceClick = (link: string) => {
    hapticFeedback.onNavigation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return (
      <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-slate-100">🌐 Infinite Knowledge</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-700/50 h-20 rounded-lg"></div>
            ))}
          </div>
          <p className="text-slate-400 text-center mt-4">Loading latest resources...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
      <CardHeader>
        <CardTitle className="text-3xl text-slate-100">🌐 Infinite Knowledge: {topic}</CardTitle>
        <p className="text-slate-300">
          Continuously updated resources from trusted sources worldwide
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {resources.map((resource, index) => (
            <div
              key={index}
              onClick={() => handleResourceClick(resource.link)}
              className="min-w-80 bg-slate-800/50 rounded-xl p-4 cursor-pointer hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getTypeColor(resource.type)}`}>
                  {getIcon(resource.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-slate-100 font-medium text-sm mb-2 line-clamp-2">
                    {resource.title}
                  </h4>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-3">
                    {resource.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{resource.source}</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </div>
                  {resource.date && (
                    <p className="text-xs text-slate-500 mt-1">{resource.date}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm mb-4">
            More resources available. Knowledge updates automatically.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-green-300 text-green-300 hover:bg-green-100/10"
            onClick={() => hapticFeedback.onClick()}
          >
            <Globe className="h-4 w-4 mr-2" />
            Explore More Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
