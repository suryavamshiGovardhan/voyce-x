import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useGamification } from '@/hooks/useGamification';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Brain, Heart, Target, Sparkles } from 'lucide-react';

const INTERESTS = [
  { id: 'mental-health', label: 'Mental Health', icon: '🧠' },
  { id: 'stress-management', label: 'Stress Management', icon: '😌' },
  { id: 'mindfulness', label: 'Mindfulness', icon: '🧘' },
  { id: 'emotional-wellness', label: 'Emotional Wellness', icon: '💚' },
  { id: 'relationships', label: 'Relationships', icon: '🤝' },
  { id: 'self-awareness', label: 'Self-Awareness', icon: '🔍' },
  { id: 'psychology', label: 'Psychology', icon: '📚' },
  { id: 'trauma-healing', label: 'Trauma & Healing', icon: '🌱' },
];

const GOALS = [
  { id: 'reduce-stress', label: 'Reduce stress and anxiety', icon: '😮‍💨' },
  { id: 'better-relationships', label: 'Improve relationships', icon: '❤️' },
  { id: 'self-understanding', label: 'Understand myself better', icon: '🔮' },
  { id: 'cope-trauma', label: 'Cope with past trauma', icon: '🌈' },
  { id: 'daily-mindfulness', label: 'Practice daily mindfulness', icon: '🧘‍♀️' },
  { id: 'learn-psychology', label: 'Learn psychology basics', icon: '🎓' },
];

const EXPERIENCE_LEVELS = [
  { id: 'beginner', label: 'Just Starting', description: 'New to mental health topics' },
  { id: 'intermediate', label: 'Some Knowledge', description: 'Familiar with basic concepts' },
  { id: 'advanced', label: 'Well-Informed', description: 'Deep understanding of topics' },
];

export default function OnboardingFlow() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { awardPoints, trackEvent } = useGamification();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
    );
  };

  const canProceed = () => {
    if (currentStep === 1) return selectedInterests.length >= 2;
    if (currentStep === 2) return selectedGoals.length >= 1;
    if (currentStep === 3) return experienceLevel !== '';
    return false;
  };

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      await trackEvent('onboarding_step_completed', { step: currentStep });
    } else {
      await completeOnboarding();
    }
  };

  const completeOnboarding = async () => {
    if (!user) return;
    
    setIsSubmitting(true);
    try {
      // Save onboarding data
      const { error } = await supabase
        .from('user_onboarding')
        .insert({
          user_id: user.id,
          interests: selectedInterests,
          learning_goals: selectedGoals,
          experience_level: experienceLevel,
          completed_at: new Date().toISOString(),
          current_step: totalSteps
        });

      if (error) throw error;

      // Award welcome points
      await awardPoints(50, 'onboarding_completed');
      
      await trackEvent('onboarding_completed', {
        interests: selectedInterests,
        goals: selectedGoals,
        experience_level: experienceLevel
      });

      toast.success('Welcome to VOYCE! 🎉', {
        description: 'You earned 50 points for completing onboarding!',
      });

      navigate('/dashboard');
    } catch (error) {
      console.error('Error completing onboarding:', error);
      toast.error('Failed to complete onboarding');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/5 p-4">
      <Card className="w-full max-w-2xl p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              Welcome to VOYCE
            </h1>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step 1: Interests */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <Brain className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h2 className="text-2xl font-bold mb-2">What interests you?</h2>
              <p className="text-muted-foreground">
                Select at least 2 topics you'd like to explore
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {INTERESTS.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => toggleInterest(interest.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedInterests.includes(interest.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="text-3xl mb-2">{interest.icon}</div>
                  <div className="text-sm font-medium">{interest.label}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Goals */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <Target className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h2 className="text-2xl font-bold mb-2">What are your goals?</h2>
              <p className="text-muted-foreground">
                Choose what you'd like to achieve with VOYCE
              </p>
            </div>
            <div className="space-y-3">
              {GOALS.map((goal) => (
                <div
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all flex items-center gap-3 ${
                    selectedGoals.includes(goal.id)
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Checkbox
                    checked={selectedGoals.includes(goal.id)}
                    onCheckedChange={() => toggleGoal(goal.id)}
                  />
                  <span className="text-2xl">{goal.icon}</span>
                  <span className="font-medium">{goal.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Experience Level */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="h-12 w-12 mx-auto mb-3 text-primary" />
              <h2 className="text-2xl font-bold mb-2">Your experience level?</h2>
              <p className="text-muted-foreground">
                This helps us personalize your learning journey
              </p>
            </div>
            <div className="space-y-3">
              {EXPERIENCE_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setExperienceLevel(level.id)}
                  className={`w-full p-5 rounded-lg border-2 transition-all text-left ${
                    experienceLevel === level.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="font-bold text-lg mb-1">{level.label}</div>
                  <div className="text-sm text-muted-foreground">{level.description}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-8">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={isSubmitting}
              className="flex-1"
            >
              Back
            </Button>
          )}
          <Button
            onClick={handleNext}
            disabled={!canProceed() || isSubmitting}
            className="flex-1"
          >
            {currentStep === totalSteps ? 'Complete' : 'Next'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
