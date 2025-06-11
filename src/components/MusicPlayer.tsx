
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Play, Pause, SkipForward, SkipBack, Volume2, VolumeX } from 'lucide-react';
import { hapticFeedback } from '@/utils/hapticFeedback';

const musicTracks = [
  {
    title: "Interstellar Main Theme",
    artist: "Hans Zimmer",
    url: "https://www.soundjay.com/misc/sounds-1015.mp3",
    type: "cinematic",
    mood: "epic"
  },
  {
    title: "Art of Life",
    artist: "X Japan",
    url: "https://www.soundjay.com/misc/sounds-1016.mp3",
    type: "emotional",
    mood: "deep"
  },
  {
    title: "Tibetan Healing Chants",
    artist: "Monks of Tibet",
    url: "https://www.soundjay.com/misc/sounds-1017.mp3",
    type: "chant",
    mood: "healing"
  },
  {
    title: "Forest Whispers",
    artist: "Nature Collective",
    url: "https://www.soundjay.com/misc/sounds-1018.mp3",
    type: "ambient",
    mood: "calm"
  },
  {
    title: "Rain Meditation",
    artist: "Peaceful Mind",
    url: "https://www.soundjay.com/misc/sounds-1019.mp3",
    type: "ambient",
    mood: "meditative"
  },
  {
    title: "Cornfield Chase",
    artist: "Hans Zimmer",
    url: "https://www.soundjay.com/misc/sounds-1020.mp3",
    type: "cinematic",
    mood: "nostalgic"
  },
  {
    title: "Om Mani Padme Hum",
    artist: "Sacred Chants",
    url: "https://www.soundjay.com/misc/sounds-1021.mp3",
    type: "chant",
    mood: "spiritual"
  },
  {
    title: "Traumatic Memory Processing",
    artist: "EMDR Sounds",
    url: "https://www.soundjay.com/misc/sounds-1022.mp3",
    type: "therapeutic",
    mood: "healing"
  }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      hapticFeedback.onClick();
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % musicTracks.length);
    hapticFeedback.onClick();
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + musicTracks.length) % musicTracks.length);
    hapticFeedback.onClick();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    hapticFeedback.onClick();
  };

  const selectTrack = (index: number) => {
    setCurrentTrack(index);
    hapticFeedback.onClick();
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'epic': return 'text-purple-600';
      case 'deep': return 'text-red-600';
      case 'healing': return 'text-green-600';
      case 'calm': return 'text-blue-600';
      case 'meditative': return 'text-indigo-600';
      case 'nostalgic': return 'text-orange-600';
      case 'spiritual': return 'text-yellow-600';
      default: return 'text-slate-600';
    }
  };

  return (
    <>
      {/* Floating Music Player */}
      <div className="fixed bottom-6 left-6 z-50">
        <Card className="bg-white/90 backdrop-blur-md border-green-200 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            {!isExpanded ? (
              // Compact Player
              <div className="flex items-center space-x-3">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={togglePlay}
                  className="rounded-full hover:bg-green-100"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5 text-green-600" />
                  ) : (
                    <Play className="h-5 w-5 text-green-600" />
                  )}
                </Button>
                
                <div className="flex flex-col min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">
                    {musicTracks[currentTrack].title}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {musicTracks[currentTrack].artist}
                  </p>
                </div>
                
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setIsExpanded(true)}
                  className="rounded-full hover:bg-green-100"
                >
                  <Music className="h-4 w-4 text-green-600" />
                </Button>
              </div>
            ) : (
              // Expanded Player
              <div className="w-80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-slate-800">VOYCE Soundscape</h3>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsExpanded(false)}
                    className="rounded-full hover:bg-green-100"
                  >
                    <Music className="h-4 w-4 text-green-600" />
                  </Button>
                </div>
                
                {/* Current Track Info */}
                <div className="mb-4 p-3 bg-green-50 rounded-xl">
                  <h4 className="font-medium text-slate-700">{musicTracks[currentTrack].title}</h4>
                  <p className="text-sm text-slate-500">{musicTracks[currentTrack].artist}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className={`text-xs px-2 py-1 rounded-full bg-white ${getMoodColor(musicTracks[currentTrack].mood)}`}>
                      {musicTracks[currentTrack].mood}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white text-slate-600">
                      {musicTracks[currentTrack].type}
                    </span>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Button size="icon" variant="ghost" onClick={prevTrack} className="rounded-full">
                    <SkipBack className="h-4 w-4 text-slate-600" />
                  </Button>
                  
                  <Button
                    size="lg"
                    onClick={togglePlay}
                    className="rounded-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  
                  <Button size="icon" variant="ghost" onClick={nextTrack} className="rounded-full">
                    <SkipForward className="h-4 w-4 text-slate-600" />
                  </Button>
                </div>
                
                {/* Volume Control */}
                <div className="flex items-center space-x-2 mb-4">
                  <Button size="icon" variant="ghost" onClick={toggleMute} className="rounded-full">
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-slate-600" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-slate-600" />
                    )}
                  </Button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                {/* Track List */}
                <div className="max-h-40 overflow-y-auto space-y-1">
                  {musicTracks.map((track, index) => (
                    <div
                      key={index}
                      onClick={() => selectTrack(index)}
                      className={`p-2 rounded-lg cursor-pointer transition-colors ${
                        index === currentTrack 
                          ? 'bg-green-100 border border-green-200' 
                          : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-slate-700 truncate">{track.title}</p>
                          <p className="text-xs text-slate-500 truncate">{track.artist}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${getMoodColor(track.mood)} bg-white/80`}>
                          {track.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={musicTracks[currentTrack].url}
        onEnded={nextTrack}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        loop={false}
      />
    </>
  );
}
