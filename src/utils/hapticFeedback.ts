
// Healing sound frequencies for different actions
const healingSounds = {
  click: 528, // Love frequency
  hover: 396, // Liberating frequency
  success: 741, // Awakening frequency
  navigation: 639 // Connection frequency
};

class HapticFeedback {
  private audioContext: AudioContext | null = null;
  private isEnabled = true;

  constructor() {
    // Initialize audio context on user interaction
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.initAudioContext();
    }
  }

  private initAudioContext() {
    try {
      this.audioContext = new AudioContext();
    } catch (e) {
      console.log('Web Audio API not supported');
    }
  }

  playHealingTone(frequency: number, duration: number = 150) {
    if (!this.audioContext || !this.isEnabled) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    oscillator.type = 'sine';

    // Gentle envelope for healing effect
    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration / 1000);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration / 1000);
  }

  vibrate(pattern: number | number[] = 50) {
    if ('vibrate' in navigator && this.isEnabled) {
      navigator.vibrate(pattern);
    }
  }

  onClick() {
    this.playHealingTone(healingSounds.click);
    this.vibrate([30, 10, 20]);
  }

  onHover() {
    this.playHealingTone(healingSounds.hover, 100);
    this.vibrate(10);
  }

  onSuccess() {
    this.playHealingTone(healingSounds.success, 200);
    this.vibrate([50, 30, 50]);
  }

  onNavigation() {
    this.playHealingTone(healingSounds.navigation);
    this.vibrate([40, 20, 40]);
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    return this.isEnabled;
  }
}

export const hapticFeedback = new HapticFeedback();

// Enhanced click handler with visual feedback
export const addHapticToElement = (element: HTMLElement, type: 'click' | 'hover' | 'success' | 'navigation' = 'click') => {
  const handleInteraction = (e: Event) => {
    switch (type) {
      case 'click':
        hapticFeedback.onClick();
        break;
      case 'hover':
        hapticFeedback.onHover();
        break;
      case 'success':
        hapticFeedback.onSuccess();
        break;
      case 'navigation':
        hapticFeedback.onNavigation();
        break;
    }

    // Add visual ripple effect
    element.classList.add('sound-ripple');
    setTimeout(() => {
      element.classList.remove('sound-ripple');
    }, 1500);
  };

  if (type === 'hover') {
    element.addEventListener('mouseenter', handleInteraction);
  } else {
    element.addEventListener('click', handleInteraction);
  }
};
