import { useGamification } from '@/hooks/useGamification';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Flame, Star, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function GamificationWidget() {
  const { gamificationData, badges, loading } = useGamification();

  if (loading) {
    return (
      <Card className="p-6">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-12 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
      </Card>
    );
  }

  if (!gamificationData) return null;

  const earnedBadges = badges.filter(b => b.earned_at);
  const nextLevel = gamificationData.current_level + 1;
  const pointsForNextLevel = nextLevel * 100;
  const pointsInCurrentLevel = gamificationData.total_points % 100;
  const progressToNextLevel = (pointsInCurrentLevel / 100) * 100;

  return (
    <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
      <div className="space-y-4">
        {/* Level and Points */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Level {gamificationData.current_level}
            </h3>
            <p className="text-sm text-muted-foreground">
              {gamificationData.total_points} total points
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-orange-500 font-bold">
              <Flame className="h-5 w-5" />
              <span className="text-2xl">{gamificationData.current_streak}</span>
            </div>
            <p className="text-xs text-muted-foreground">day streak</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress to Level {nextLevel}</span>
            <span className="font-medium">{pointsInCurrentLevel}/100 pts</span>
          </div>
          <Progress value={progressToNextLevel} className="h-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-background/50 rounded-lg p-3 text-center">
            <div className="flex justify-center mb-1">
              <Star className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-lg font-bold">{earnedBadges.length}</p>
            <p className="text-xs text-muted-foreground">Badges</p>
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-center">
            <div className="flex justify-center mb-1">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-lg font-bold">{gamificationData.longest_streak}</p>
            <p className="text-xs text-muted-foreground">Best Streak</p>
          </div>
          <div className="bg-background/50 rounded-lg p-3 text-center">
            <div className="flex justify-center mb-1">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <p className="text-lg font-bold">{gamificationData.current_level}</p>
            <p className="text-xs text-muted-foreground">Level</p>
          </div>
        </div>

        {/* Recent Badges */}
        {earnedBadges.length > 0 && (
          <div className="pt-2">
            <p className="text-sm font-medium mb-2">Recent Badges</p>
            <div className="flex flex-wrap gap-2">
              {earnedBadges.slice(0, 5).map((badge) => (
                <Badge
                  key={badge.id}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  <span>{badge.icon}</span>
                  <span className="text-xs">{badge.name}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
