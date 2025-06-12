
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Book, FileText, Image, Video, Download, Star } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

interface ResourceItem {
  type: 'book' | 'article' | 'image' | 'video' | 'research';
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  author?: string;
  rating?: number;
  year?: string;
  source?: string;
  tags?: string[];
}

interface RichContentLibraryProps {
  topic: string;
  category: 'brain' | 'mental-health' | 'neuroscience' | 'therapy' | 'wellness';
}

const resourceData: Record<string, ResourceItem[]> = {
  brain: [
    {
      type: 'book',
      title: 'The Brain That Changes Itself',
      description: 'Revolutionary discoveries about neuroplasticity and the brain\'s ability to heal itself.',
      url: 'https://www.amazon.com/Brain-Changes-Itself-Stories-Frontiers/dp/0143113100',
      imageUrl: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=400&fit=crop',
      author: 'Norman Doidge',
      rating: 4.8,
      year: '2007',
      tags: ['neuroplasticity', 'healing', 'science']
    },
    {
      type: 'article',
      title: 'How Meditation Changes the Brain',
      description: 'Scientific research on meditation\'s impact on brain structure and function.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6312586/',
      author: 'Harvard Medical School',
      year: '2023',
      source: 'PubMed',
      tags: ['meditation', 'mindfulness', 'research']
    },
    {
      type: 'image',
      title: 'Brain Anatomy Visualization',
      description: 'Detailed anatomical diagram of the human brain regions and functions.',
      url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      tags: ['anatomy', 'visualization', 'education']
    },
    {
      type: 'video',
      title: 'Understanding Neuroplasticity',
      description: 'TED Talk explaining how our brains adapt and change throughout life.',
      url: 'https://www.ted.com/talks/neuroplasticity',
      imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=300&h=200&fit=crop',
      author: 'Dr. Lara Boyd',
      year: '2015',
      tags: ['neuroplasticity', 'learning', 'adaptation']
    }
  ],
  'mental-health': [
    {
      type: 'book',
      title: 'The Body Keeps the Score',
      description: 'Groundbreaking work on trauma, PTSD, and the body\'s response to psychological wounds.',
      url: 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      author: 'Bessel van der Kolk',
      rating: 4.9,
      year: '2014',
      tags: ['trauma', 'PTSD', 'healing']
    },
    {
      type: 'research',
      title: 'Mental Health Statistics 2024',
      description: 'Latest research on global mental health trends and treatment effectiveness.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders',
      author: 'World Health Organization',
      year: '2024',
      source: 'WHO',
      tags: ['statistics', 'global health', 'trends']
    }
  ]
};

export default function RichContentLibrary({ topic, category }: RichContentLibraryProps) {
  const [selectedType, setSelectedType] = useState<string>('all');
  
  const resources = resourceData[category] || [];
  const filteredResources = selectedType === 'all' 
    ? resources 
    : resources.filter(r => r.type === selectedType);

  const handleResourceClick = (url: string) => {
    hapticFeedback.onNavigation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book': return <Book className="h-4 w-4" />;
      case 'article': return <FileText className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      case 'research': return <Download className="h-4 w-4" />;
      default: return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'book': return 'bg-purple-100 text-purple-700';
      case 'article': return 'bg-blue-100 text-blue-700';
      case 'image': return 'bg-green-100 text-green-700';
      case 'video': return 'bg-red-100 text-red-700';
      case 'research': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-lg border-slate-200/20 shadow-xl rounded-2xl mb-16">
      <CardHeader>
        <CardTitle className="text-3xl text-slate-100">
          📚 Rich Content Library: {topic}
        </CardTitle>
        <p className="text-slate-300">
          Curated books, articles, images, and videos from trusted sources worldwide
        </p>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {['all', 'book', 'article', 'image', 'video', 'research'].map((type) => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedType(type);
                hapticFeedback.onClick();
              }}
              className="capitalize"
            >
              {getTypeIcon(type)}
              <span className="ml-2">{type}</span>
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <Card
              key={index}
              className="cursor-pointer bg-slate-800/50 border-slate-600 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleResourceClick(resource.url)}
            >
              {resource.imageUrl && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className={`absolute top-2 left-2 ${getTypeColor(resource.type)}`}>
                    {getTypeIcon(resource.type)}
                    <span className="ml-1 capitalize">{resource.type}</span>
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-slate-100 font-medium text-sm mb-2 line-clamp-2">
                      {resource.title}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-3">
                      {resource.description}
                    </p>
                  </div>
                  
                  {resource.author && (
                    <p className="text-slate-500 text-xs">
                      by {resource.author} {resource.year && `(${resource.year})`}
                    </p>
                  )}
                  
                  {resource.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-slate-400 text-xs">{resource.rating}</span>
                    </div>
                  )}
                  
                  {resource.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-600">
                    <span className="text-xs text-slate-500">{resource.source || 'External'}</span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm mb-4">
            More resources available. Updated regularly with latest content.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="border-green-300 text-green-300 hover:bg-green-100/10"
            onClick={() => hapticFeedback.onClick()}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Explore More Resources
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
