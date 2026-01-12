import { Play, BookOpen, Headphones, Activity, Compass, Users, Brain, Heart, Eye } from "lucide-react";

export interface ImmersionToolData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  sessions: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBorder: string;
  japaneseIcon: string;
  features: string[];
  intensity: string;
  // Rich content sections
  content: {
    overview: string;
    scienceBehind: string;
    historicalContext: string;
    instructions: {
      step: number;
      title: string;
      description: string;
    }[];
    whatToExpect: string;
    testimonials: { name: string; experience: string }[];
    safetyGuidelines: string[];
    integrationGuide: string;
    progression: {
      level: string;
      description: string;
    }[];
    faq: { question: string; answer: string }[];
    relatedTools: string[];
  };
}

export const immersionToolsData: ImmersionToolData[] = [
  {
    id: "ego-death-meditations",
    title: "Ego Death Meditations",
    description: "Guided journeys into the dissolution of the false self. Experience the space between thoughts.",
    fullDescription: "These aren't your typical mindfulness meditations. We're going to the places your mind doesn't want to go—the void, the space where 'you' dissolve and only awareness remains. Each session is designed to systematically deconstruct the ego's grip on identity.",
    sessions: "12 Progressive Sessions",
    icon: Play,
    color: "text-sky-400",
    bgColor: "bg-sky-600",
    borderColor: "border-sky-300/30",
    hoverBorder: "hover:border-sky-300/60",
    japaneseIcon: "zen",
    features: ["Ego Dissolution", "Witness Training", "Non-Dual Awareness", "Death Practice"],
    intensity: "Advanced",
    content: {
      overview: `The Ego Death Meditations are a 12-session progressive program designed to safely guide you toward the experience of ego dissolution—the temporary transcendence of your ordinary sense of self.

This is not about destroying the ego but about recognizing its constructed nature. When you can see the ego as a process rather than identifying with it as "you," profound freedom becomes available.

Each session builds on the previous one, gradually developing your capacity to rest in awareness itself, beyond the narratives and identifications that normally define your experience.`,

      scienceBehind: `Neuroscience research has identified specific brain networks associated with the sense of self. The Default Mode Network (DMN)—including the medial prefrontal cortex and posterior cingulate cortex—becomes active when we're thinking about ourselves, remembering our past, or planning our future.

Studies using psychedelics and advanced meditation have shown that ego dissolution corresponds to decreased activity and connectivity in the DMN. When these "selfing" networks quiet down, subjects report experiences of boundarylessness, unity, and transcendence.

Our meditations use techniques shown to reduce DMN activity: focused attention, open monitoring, and non-dual awareness practices. While the effects are more gradual than psychedelics, they're more sustainable and integrable.

Research by Judson Brewer at Yale has shown that experienced meditators can voluntarily reduce DMN activity—demonstrating that this is a learnable skill, not just a state that happens to you.`,

      historicalContext: `Every contemplative tradition has developed practices aimed at transcending the ordinary sense of self:

**Buddhist jhana practice**: Systematic development of concentration states leading to cessation of perception
**Hindu yoga nidra**: "Yogic sleep" practices that dissolve the sense of being a separate observer
**Christian apophatic prayer**: The "cloud of unknowing" that transcends all concepts including self
**Sufi fana**: Annihilation of the nafs (ego-self) in union with the divine

Our program draws from these traditions while incorporating modern understanding of how the brain constructs and can deconstruct the sense of self.`,

      instructions: [
        {
          step: 1,
          title: "Find Your Space",
          description: "Choose a quiet, comfortable place where you won't be disturbed. Sit in a position that is alert yet relaxed—spine straight but not rigid. You can use a cushion, chair, or lie down if that works better for you."
        },
        {
          step: 2,
          title: "Ground Yourself",
          description: "Before exploring dissolution, we establish grounding. Feel your body on the chair or cushion. Notice the sensations of contact. This grounding becomes your anchor—something you can return to if the experience becomes too intense."
        },
        {
          step: 3,
          title: "Begin with Breath",
          description: "Follow your breath without controlling it. Simply notice breathing happening. This develops the witness capacity—the ability to observe experience without being completely merged with it."
        },
        {
          step: 4,
          title: "Notice the Noticer",
          description: "As you watch the breath, ask: Who is watching? Don't look for an answer—rest in the looking itself. This simple inquiry begins to loosen identification with the watching self."
        },
        {
          step: 5,
          title: "Release into Space",
          description: "As the sessions progress, you'll be guided to release attention from any particular object and rest as the space in which all experience appears. Thoughts, sensations, sounds—all arise in this space that you are."
        },
        {
          step: 6,
          title: "Integration",
          description: "Each session ends with gentle reorientation to body and environment. Take time to journal insights before returning to activity. Integration is as important as the practice itself."
        }
      ],

      whatToExpect: `**Early Sessions (1-4)**: Development of concentration and witness capacity. You may notice more space between thoughts. Common experiences include relaxation, occasional boredom, and glimpses of peace.

**Middle Sessions (5-8)**: Deeper states become accessible. You may experience unusual sensations—floating, expansion, loss of body boundaries. Some practitioners report fear or resistance at this stage. This is normal—the ego protects itself.

**Advanced Sessions (9-12)**: Potential experiences of ego dissolution—moments where the sense of being a separate observer temporarily drops away. These can range from subtle to profound. Some describe it as "coming home."

**Common experiences during dissolution**:
- Sense of boundarylessness or merging with surroundings
- Profound peace beyond normal relaxation
- Feeling of vastness or being spacious awareness
- Loss of sense of time
- Absence of the usual "observer" or "me"

**What this is NOT**:
- This is not dissociation or depersonalization (those involve distress; ego dissolution is typically peaceful)
- This is not about losing your personality or becoming non-functional
- This is not a one-time event but a capacity that develops over time`,

      testimonials: [
        {
          name: "Meera, 42",
          experience: "I've meditated for years, but these sessions took me somewhere new. In session 8, the 'I' that was watching just... wasn't there. But awareness remained. It was the most peaceful experience of my life. I'm not afraid of death anymore."
        },
        {
          name: "Arun, 35",
          experience: "The middle sessions were hard. I kept hitting this fear barrier—like my mind was screaming 'don't go there!' With patience and the safety guidelines, I finally moved through it. What I found on the other side was... me. The real me, beyond all my stories."
        },
        {
          name: "Dr. Priya, 56",
          experience: "As a psychiatrist, I was skeptical. But the experiences these meditations facilitated were real—and transformative. I now recommend this program to patients who are ready for deeper work."
        }
      ],

      safetyGuidelines: [
        "Do not practice while driving or operating machinery",
        "If you have a history of psychosis, severe dissociation, or trauma, consult a mental health professional before beginning",
        "Start with the foundation sessions even if you're an experienced meditator",
        "If you experience persistent distress after a session, reach out for support",
        "Avoid combining with substances that alter consciousness",
        "Practice in a safe, comfortable environment where you won't be disturbed",
        "Don't force the experience—ego dissolution happens naturally when conditions are right",
        "Use grounding techniques (feeling your body, naming objects in the room) if you feel destabilized",
        "Integration is essential—journal after each session and give yourself time before returning to demanding activities"
      ],

      integrationGuide: `Ego dissolution experiences can be profound, but their value lies in integration—how they change your daily life.

**Immediately after practice**:
- Sit quietly for at least 5 minutes before getting up
- Journal any insights, experiences, or questions
- Drink water and eat something grounding if needed

**Days following practice**:
- Notice how your sense of self feels in daily activities
- Pay attention to moments of reactivity—you may find more space to choose responses
- Practice the "who is experiencing this?" inquiry during ordinary moments

**Long-term integration**:
- Regular practice is more important than intensity
- Share experiences with a qualified teacher or community
- Let insights inform your life rather than becoming spiritual concepts
- Remember: ego dissolution is not the goal—living wisely and compassionately is`,

      progression: [
        {
          level: "Foundation (Sessions 1-3)",
          description: "Building concentration, developing witness capacity, learning to ground. Essential preparation for deeper work."
        },
        {
          level: "Development (Sessions 4-6)",
          description: "Deepening concentration, exploring the nature of the observer, beginning to loosen identification."
        },
        {
          level: "Exploration (Sessions 7-9)",
          description: "Moving toward the edge of ego dissolution, working with fear and resistance, touching deeper states."
        },
        {
          level: "Integration (Sessions 10-12)",
          description: "Stabilizing access to non-dual awareness, integrating insights, learning to move fluidly between states."
        }
      ],

      faq: [
        {
          question: "Is ego death dangerous?",
          answer: "When approached gradually with proper preparation, ego dissolution is generally safe and profoundly healing. The danger comes from forcing it, having inadequate preparation, or lacking integration. Our program is designed for safety."
        },
        {
          question: "Will I lose my personality?",
          answer: "No. Ego dissolution is temporary, and your personality, memories, and functioning remain intact. What changes is your relationship to them—you hold them more lightly."
        },
        {
          question: "How is this different from dissociation?",
          answer: "Dissociation involves distress and disconnection. Ego dissolution involves peace and connection—often a sense of connecting to everything. They feel very different."
        },
        {
          question: "Can anyone achieve this?",
          answer: "With consistent practice, most people can develop some capacity for ego dissolution. However, the intensity varies, and it's not something to force."
        },
        {
          question: "How often should I practice?",
          answer: "We recommend 3-5 sessions per week, giving yourself rest days for integration. Quality is more important than quantity."
        }
      ],

      relatedTools: ["witness-training", "shadow-work-journal", "somatic-healing-library"]
    }
  },
  {
    id: "shadow-work-journal",
    title: "Shadow Work Journal",
    description: "AI-guided prompts to meet the parts of yourself you've been running from your entire life.",
    fullDescription: "Your shadow contains everything you've rejected about yourself—and everything you need to become whole. Our AI companion asks the questions you're afraid to ask yourself, guiding you through the darkness with compassion and precision.",
    sessions: "∞ Daily Prompts",
    icon: BookOpen,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "bamboo",
    features: ["Shadow Integration", "Projection Work", "Dream Analysis", "Trigger Mapping"],
    intensity: "Intermediate",
    content: {
      overview: `The Shadow Work Journal is a dynamic, AI-assisted exploration of the parts of yourself you've hidden, rejected, or never knew existed. Based on Carl Jung's concept of the shadow, this tool helps you integrate unconscious material for greater wholeness, energy, and authentic self-expression.

Your shadow is everything you've pushed out of awareness—anger, sexuality, creativity, power, vulnerability, aggression, tenderness. These rejected parts don't disappear; they operate from the unconscious, sabotaging relationships, draining energy, and creating patterns you can't seem to break.

Shadow work doesn't make the shadow go away. It brings it into relationship, transforming unconscious patterns into conscious choice.`,

      scienceBehind: `Jung observed that what we reject about ourselves doesn't disappear—it becomes unconscious and operates autonomously. Modern psychology confirms this through concepts like:

**Projection**: We see in others what we can't see in ourselves. Research shows that people most strongly dislike in others traits they possess but have disowned.

**Repression**: Suppressed emotions and impulses require energy to keep down, depleting us and often emerging as anxiety, depression, or psychosomatic symptoms.

**Implicit memory**: Traumatic or emotionally charged experiences get stored in implicit memory, influencing behavior without conscious awareness.

**The neuroscience of integration**: When we bring unconscious material into awareness—naming it, feeling it, accepting it—activity shifts from the amygdala (emotion) to the prefrontal cortex (integration). This is literally what "making the unconscious conscious" looks like in the brain.

Our AI-guided prompts are designed to surface shadow material safely and facilitate its integration.`,

      historicalContext: `Carl Jung introduced the concept of the shadow in the early 20th century, building on Freud's ideas about the unconscious. Jung observed that the shadow contains not only what we consider "bad" but also our undeveloped potential—gold in the shadow.

Indigenous traditions worldwide have recognized the importance of integrating all parts of the self. Shamanic practices often involve facing and integrating what has been rejected.

Many spiritual traditions describe the spiritual path as one of making the unconscious conscious. In alchemy (which Jung studied extensively), the "nigredo" or blackening phase—facing one's shadow—was considered essential to transformation.

Contemporary psychology continues to validate shadow work. Acceptance and Commitment Therapy (ACT), Internal Family Systems (IFS), and somatic therapies all incorporate elements of bringing awareness to rejected parts of self.`,

      instructions: [
        {
          step: 1,
          title: "Create a Safe Container",
          description: "Find a private, comfortable space for journaling. Ensure you won't be interrupted. Have grounding resources available—a cup of tea, a blanket, access to nature or a trusted friend if needed."
        },
        {
          step: 2,
          title: "Begin with the Prompt",
          description: "Each day, you'll receive a prompt designed to surface shadow material. Read it slowly. Notice any immediate reactions—resistance, discomfort, interest. These reactions are data."
        },
        {
          step: 3,
          title: "Free Write",
          description: "Write without censoring or editing. Let whatever wants to come out come out. Don't judge, analyze, or try to make it coherent. This is raw material from the unconscious."
        },
        {
          step: 4,
          title: "Notice the Body",
          description: "Periodically, pause and notice your body. Where do you feel tension? Heat? Contraction? The body stores shadow material. Sensation is information."
        },
        {
          step: 5,
          title: "Dialogue with the Shadow",
          description: "If you encounter a distinct part or figure, try dialoguing with it. What does it want? What does it fear? What has it been protecting? This builds relationship rather than opposition."
        },
        {
          step: 6,
          title: "Close with Integration",
          description: "End each session by acknowledging what emerged. Express gratitude to the shadow for revealing itself. Commit to honoring what you've learned in your daily life."
        }
      ],

      whatToExpect: `**Common experiences during shadow work**:
- Strong emotions: anger, grief, shame, fear, sometimes joy
- Physical sensations: tension, heat, trembling, release
- Insights and connections: seeing patterns you never noticed
- Dreams: shadow work often activates the dream life
- Resistance: the ego protects its self-image

**Challenging but normal**:
- Feeling worse before feeling better
- Old memories surfacing
- Relationship tensions as you change
- Confusion about identity

**Signs of integration**:
- More energy and vitality
- Less reactivity to triggers
- Greater compassion for yourself and others
- Access to creativity, power, or emotions that were blocked
- Feeling more "whole" and less fragmented`,

      testimonials: [
        {
          name: "Kavitha, 38",
          experience: "I discovered a rage I didn't know I had—decades of anger at my mother that I had turned into chronic anxiety. When I finally let myself feel it, the anxiety I'd struggled with for years began to lift. The shadow work didn't fix everything, but it showed me what I had been carrying."
        },
        {
          name: "Vikram, 45",
          experience: "The prompts led me to my disowned ambition. I had been playing small my whole life, judging successful people as 'greedy.' When I reclaimed my own desire for achievement, my career transformed."
        },
        {
          name: "Ananya, 29",
          experience: "Shadow work helped me see that my 'niceness' was a mask. Underneath was fear of rejection. Once I could admit I sometimes felt competitive, jealous, and angry, I could actually be kind—instead of just performing kindness."
        }
      ],

      safetyGuidelines: [
        "Go slowly—shadow work is not a race",
        "If you have unprocessed trauma, work with a therapist alongside this tool",
        "Use grounding techniques if you feel overwhelmed",
        "Don't force—if a prompt feels too intense, skip it and return later",
        "Maintain your daily life—shadow work is for integration, not destabilization",
        "Don't do shadow work late at night if it disrupts your sleep",
        "Share with trusted others when appropriate—shame thrives in secrecy",
        "Remember: the shadow is part of you, not an enemy to defeat"
      ],

      integrationGuide: `Shadow work is an ongoing practice, not a one-time fix. Integration happens through:

**Daily awareness**: Notice when shadow material is operating—reactivity, projection, avoidance. This is data.

**Behavioral change**: Let insights inform action. If you discovered suppressed anger, practice healthy expression. If you found hidden vulnerability, practice letting others in.

**Relationship work**: The shadow often shows up most clearly in relationships. Use conflicts and attractions as mirrors.

**Creative expression**: Art, writing, movement—give the shadow constructive outlets.

**Ritual**: Create small rituals to honor shadow work. Some people journal before sleep. Others use art or movement.

**Patience**: Integration takes time. Be gentle with yourself as old patterns shift.`,

      progression: [
        {
          level: "Beginning",
          description: "Learning to notice shadow material, building tolerance for discomfort, understanding projection."
        },
        {
          level: "Developing",
          description: "Engaging with specific shadow parts, processing stuck emotions, reclaiming disowned qualities."
        },
        {
          level: "Deepening",
          description: "Working with complex patterns, integrating trauma material (with support), shadow work in relationships."
        },
        {
          level: "Ongoing",
          description: "Shadow work becomes a way of life—continuous discovery, integration, and growth."
        }
      ],

      faq: [
        {
          question: "What if I find something terrible in my shadow?",
          answer: "The shadow contains impulses and emotions, not actions. Finding anger doesn't make you violent; finding desire doesn't make you immoral. Awareness of shadow material gives you choice that unconsciousness doesn't."
        },
        {
          question: "How long does shadow work take?",
          answer: "Shadow work is lifelong. Major integrations can happen in weeks or months, but new material continues to emerge as we grow. Think of it as ongoing self-discovery."
        },
        {
          question: "Can shadow work make things worse?",
          answer: "Temporarily, yes. Bringing unconscious material to awareness can be destabilizing before it's integrating. Go slowly, use support, and trust the process."
        },
        {
          question: "Is this just navel-gazing?",
          answer: "Shadow work isn't about self-absorption—it's about becoming more available to life and others. Unexamined shadow material actually makes us more self-centered, not less."
        },
        {
          question: "Do I need a therapist for this?",
          answer: "For mild to moderate shadow work, self-guided practice can be powerful. For trauma, severe symptoms, or if you feel stuck, professional support is recommended."
        }
      ],

      relatedTools: ["inner-child-rescue", "trauma-simulators", "ego-death-meditations"]
    }
  },
  {
    id: "somatic-healing-library",
    title: "Somatic Healing Library",
    description: "Your body keeps the score. These practices help you rewrite the story written in your flesh.",
    fullDescription: "Trauma lives in the body, not just the mind. Through breathwork, movement, and somatic practices, we help your nervous system remember safety. Each practice is designed to complete incomplete stress cycles and restore natural regulation.",
    sessions: "40+ Practices",
    icon: Headphones,
    color: "text-orange-400",
    bgColor: "bg-orange-600",
    borderColor: "border-orange-300/30",
    hoverBorder: "hover:border-orange-300/60",
    japaneseIcon: "crane",
    features: ["Breathwork", "Body Scanning", "Tension Release", "Energy Work"],
    intensity: "All Levels",
    content: {
      overview: `The Somatic Healing Library is a collection of 40+ body-based practices for healing trauma, regulating the nervous system, and restoring your natural capacity for aliveness and connection.

"Soma" means body. Somatic healing recognizes that the body is not just a vehicle for the mind but a source of wisdom and healing in its own right. Trauma, stress, and emotional pain get stored in the body—in muscle tension, breathing patterns, posture, and nervous system states. Talking about these experiences isn't enough; we have to work with the body directly.

These practices draw from diverse traditions—yoga, martial arts, dance, trauma therapy, breathwork—all unified by the principle that the body can heal what the mind cannot.`,

      scienceBehind: `Modern trauma research, particularly the work of Dr. Peter Levine and Dr. Bessel van der Kolk, has revolutionized our understanding of how trauma lives in the body:

**The polyvagal theory** (Stephen Porges): Our autonomic nervous system has three states—ventral vagal (social engagement, safety), sympathetic (fight-or-flight), and dorsal vagal (freeze, shutdown). Trauma can leave us stuck in protective states.

**Incomplete stress responses**: In nature, animals discharge stress after a threat (shaking, trembling, running). Humans often suppress these natural responses, leaving stress trapped in the body.

**Interoception**: The ability to sense internal body states (heartbeat, breath, muscle tension) is linked to emotional regulation. Trauma can impair interoception. Somatic practices restore it.

**Neuroplasticity**: The nervous system can change. Through repeated experiences of safety and regulation, we can literally rewire traumatic patterns.

Our practices are designed to: (1) build interoceptive awareness, (2) discharge trapped stress, (3) restore ventral vagal tone (the capacity for social engagement and safety), and (4) complete incomplete defensive responses.`,

      historicalContext: `Body-based healing is as old as humanity:

**Yoga**: 5,000+ years of practices for harmonizing body, breath, and mind
**Qigong and Tai Chi**: Chinese practices for cultivating and moving life energy
**Indigenous healing**: Dance, movement, and breathwork in healing ceremonies worldwide
**Wilhelm Reich**: 20th-century psychiatrist who recognized "character armor"—chronic muscle tension as defense against emotion
**Somatic psychology**: Integrating body awareness into psychotherapy

Contemporary somatic therapies include Somatic Experiencing (Peter Levine), Sensorimotor Psychotherapy, EMDR, and various body-oriented trauma therapies.`,

      instructions: [
        {
          step: 1,
          title: "Choose Your Practice",
          description: "Browse the library by intention (calming, energizing, releasing), by body area, or by time available. Start with practices that feel manageable—you can always deepen later."
        },
        {
          step: 2,
          title: "Prepare Your Space",
          description: "Find a private, comfortable space. Wear loose clothing. Have water available. Ensure you have time to complete the practice without rushing."
        },
        {
          step: 3,
          title: "Tune In",
          description: "Before beginning, take a moment to sense your body as it is right now. Notice areas of tension, numbness, or aliveness. This creates a baseline for noticing change."
        },
        {
          step: 4,
          title: "Follow the Guidance",
          description: "Each practice has audio or video guidance. Follow at your own pace. Modify as needed—these practices should never cause pain or force."
        },
        {
          step: 5,
          title: "Stay Within Your Window",
          description: "If you feel overwhelmed, stop and ground. Use the grounding practices to return to safety. Healing happens at the edge of your window of tolerance, not beyond it."
        },
        {
          step: 6,
          title: "Rest and Integrate",
          description: "After practice, rest for at least 5 minutes. Let your system integrate. Notice any changes in sensation, emotion, or energy. Journal if helpful."
        }
      ],

      whatToExpect: `**Common experiences during somatic practice**:
- Trembling, shaking, or involuntary movements (discharge of stored stress)
- Emotional release: tears, laughter, anger, grief
- Yawning, sighing (nervous system regulation)
- Heat, tingling, or energy movement
- Memories or images surfacing
- Profound relaxation

**What these mean**:
- Shaking/trembling: Healthy! This is your body completing stress responses
- Emotions: Let them move through without forcing or suppressing
- Sensation changes: Your body is coming alive
- Memories: The body stores experience; as it releases, memories may surface

**When to pause**:
- Overwhelming fear or panic
- Feeling disconnected from your body (dissociation)
- Significant physical pain
- Feeling worse rather than better after multiple sessions

In these cases, slow down and consider working with a somatic therapist.`,

      testimonials: [
        {
          name: "Arjun, 34, combat veteran",
          experience: "Traditional therapy helped me understand my PTSD, but my body was still at war. The shaking and discharge practices finally let my body complete what it couldn't complete on the battlefield. For the first time in years, I can relax."
        },
        {
          name: "Priya, 28, childhood trauma survivor",
          experience: "I didn't have words for what happened to me as a child. But my body remembered. Through somatic work, I accessed and released pain I couldn't have talked about. The practices gave my body a way to speak and heal."
        },
        {
          name: "Suresh, 52, chronic pain",
          experience: "My back pain had no medical explanation. Through body scanning and tension release, I discovered layers of unexpressed grief. As I let myself feel it, the physical pain that had plagued me for years diminished."
        }
      ],

      safetyGuidelines: [
        "These practices complement but don't replace professional trauma therapy",
        "Start with gentler practices and progress gradually",
        "If you have severe trauma, work with a somatic therapist before deep work",
        "Physical release (shaking, trembling) is healthy—don't suppress it",
        "If you dissociate (feel disconnected, floaty, numb), use grounding practices",
        "Never force the body—work with it, not against it",
        "Drink water before and after practice",
        "Be gentle with yourself—healing takes time"
      ],

      integrationGuide: `Somatic healing is cumulative—regular practice creates lasting change.

**Daily practice suggestions**:
- Morning: Body scan to start the day attuned
- During stress: Grounding breath practices
- Evening: Tension release before sleep

**Weekly practice**:
- 2-3 deeper sessions from the library
- At least one practice that activates (energizing) and one that calms

**Long-term approach**:
- Notice how your body responds to stress over time
- Track your "window of tolerance"—the range of activation you can handle
- Celebrate progress: reduced reactivity, better sleep, more aliveness

**Integrating with daily life**:
- Use brief practices during the day (bathroom breaks, before meetings)
- Notice and honor your body's signals
- Movement: walk, dance, shake—keep the body moving
- Touch: massage, self-massage, hugs—nurture through contact`,

      progression: [
        {
          level: "Foundation",
          description: "Basic body scanning, grounding practices, gentle breath regulation. Building safety and interoceptive awareness."
        },
        {
          level: "Development",
          description: "Tension release practices, moderate breathwork, beginning to work with activation and discharge."
        },
        {
          level: "Deepening",
          description: "Advanced breathwork, deep release practices, working with trauma-stored energy (ideally with professional support)."
        },
        {
          level: "Integration",
          description: "Practices become part of daily life. Body wisdom is trusted. Regulation happens naturally."
        }
      ],

      faq: [
        {
          question: "What if I can't feel my body?",
          answer: "Numbness or disconnection is common after trauma—it's a protective mechanism. Start with external sensation (water on skin, feet on ground) and gradually work inward. Be patient."
        },
        {
          question: "Is shaking/trembling normal?",
          answer: "Yes! Trembling is the body's natural way of discharging stress. Animals do it instinctively after threat. Humans often suppress it. Letting it happen is healing."
        },
        {
          question: "Can this replace therapy?",
          answer: "For some issues, self-practice is sufficient. For significant trauma, somatic practice works best alongside professional support. They complement each other."
        },
        {
          question: "How long until I feel better?",
          answer: "Some relief can come quickly; deep healing takes time. Most people notice significant change within 2-3 months of consistent practice."
        },
        {
          question: "What if emotions come up?",
          answer: "Let them. Emotions stored in the body need to be felt to be released. You don't have to understand them—just let them move through."
        }
      ],

      relatedTools: ["trauma-simulators", "inner-child-rescue", "love-without-ego"]
    }
  }
];
