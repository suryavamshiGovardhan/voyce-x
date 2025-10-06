import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnhancedMusicPlayer from "@/components/music/EnhancedMusicPlayer";
import { hapticFeedback } from "@/utils/hapticFeedback";
import { Heart, Upload, Send, FileText, MessageSquare } from "lucide-react";

export default function WorkbookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    hapticFeedback.onSuccess();
    if (import.meta.env.DEV) {
      console.log("Story submitted:", formData);
    }
    alert("Thank you for sharing your VOYCE story! We'll be in touch soon.");
  };

  const handleInputChange = (field: string, value: string) => {
    hapticFeedback.onHover();
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    hapticFeedback.onClick();
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-800">
      <Navbar />
      <EnhancedMusicPlayer />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-slate-100 mb-6">
            VOYCE <span className="text-green-400">Workshop</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your guided journey through mental clarity and emotional freedom. 
            Explore, reflect, and share your unique VOYCE story.
          </p>
        </div>

        {/* Tabbed Interface */}
        <Tabs defaultValue="workbook" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/10 backdrop-blur-lg">
            <TabsTrigger value="workbook" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Workshop Workbook</span>
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>VOYCE Form</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workbook">
            {/* Embedded Google Doc */}
            <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-100 text-center">Workshop Workbook</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://docs.google.com/document/d/1BQt0KYI80v0zOzGQrDgVwA9Dqqxz98v8iKCb7eB4Tj0/edit?usp=sharing"
                    width="100%"
                    height="100%"
                    className="border-0 rounded-xl"
                    title="VOYCE Workshop Workbook"
                    allow="fullscreen"
                  />
                </div>
                <p className="text-center text-slate-400 text-sm mt-4">
                  Click and scroll within the document to explore the full workbook experience
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form">
            {/* Embedded Google Form */}
            <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-slate-100 text-center flex items-center justify-center space-x-3">
                  <MessageSquare className="h-8 w-8 text-green-400" />
                  <span>VOYCE Community Form</span>
                </CardTitle>
                <p className="text-slate-300 text-center mt-4">
                  Connect with the VOYCE community and share your journey
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfRfrRKJsrX9P8E3kzV4rpsjaWa3nDTiaZbR5XZgJbN6qoamg/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    className="border-0 rounded-xl"
                    title="VOYCE Community Form"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                  >
                    Loading…
                  </iframe>
                </div>
                <p className="text-center text-slate-400 text-sm mt-4">
                  Your responses help us build a stronger VOYCE community
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Story Submission Form */}
        <Card className="bg-white/10 backdrop-blur-lg border-green-200/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-slate-100 text-center flex items-center justify-center space-x-3">
              <Heart className="h-8 w-8 text-red-400" />
              <span>Share Your VOYCE Story</span>
            </CardTitle>
            <p className="text-slate-300 text-center mt-4">
              Your story matters. Share your journey, insights, or transformation with the VOYCE community.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-200">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-green-200/30 text-slate-100 placeholder-slate-400"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-200">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-green-200/30 text-slate-100 placeholder-slate-400"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="story" className="text-slate-200">Your VOYCE Story</Label>
                <Textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => handleInputChange('story', e.target.value)}
                  className="bg-white/10 border-green-200/30 text-slate-100 placeholder-slate-400 min-h-32"
                  placeholder="Share your journey, insights, transformation, or how VOYCE has impacted your life..."
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="file" className="text-slate-200">Optional: Upload Audio or Document</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="bg-white/10 border-green-200/30 text-slate-100 file:bg-green-500 file:text-white file:border-0 file:rounded-lg file:px-4 file:py-2"
                    accept="audio/*,.pdf,.doc,.docx,.txt"
                  />
                  <Upload className="h-5 w-5 text-green-400" />
                </div>
                <p className="text-xs text-slate-400">
                  Accepted formats: Audio files, PDF, Word documents, or text files
                </p>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl text-lg font-medium"
              >
                <Send className="h-5 w-5 mr-2" />
                Share My VOYCE Story
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
