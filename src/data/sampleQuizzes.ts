// Sample quizzes to seed the database

export const sampleQuizzes = [
  {
    title: 'Mental Health Basics',
    description: 'Test your understanding of fundamental mental health concepts',
    category: 'Mental Health',
    difficulty: 'beginner',
    points_reward: 15,
    time_limit_seconds: 300,
    questions: [
      {
        question: 'What is mental health?',
        options: [
          'Only the absence of mental illness',
          'A state of well-being where individuals realize their potential',
          'Something only doctors need to worry about',
          'A luxury for privileged people'
        ],
        correct_answer: 1,
        explanation: 'Mental health is a state of well-being in which individuals realize their potential, cope with life stresses, work productively, and contribute to their community.'
      },
      {
        question: 'Which of these is a healthy coping mechanism?',
        options: [
          'Avoiding all stressful situations',
          'Practicing mindfulness meditation',
          'Suppressing all emotions',
          'Isolating yourself from others'
        ],
        correct_answer: 1
      },
      {
        question: 'How often should you check in with your mental health?',
        options: [
          'Only when you feel bad',
          'Never, it\'s not important',
          'Regularly, just like physical health',
          'Only once a year'
        ],
        correct_answer: 2
      },
      {
        question: 'What is self-care?',
        options: [
          'Being selfish',
          'Activities that help maintain well-being',
          'Only spa treatments',
          'A waste of time'
        ],
        correct_answer: 1
      },
      {
        question: 'Can mental health conditions be treated?',
        options: [
          'No, they are permanent',
          'Yes, with proper support and treatment',
          'Only in young people',
          'Only with medication'
        ],
        correct_answer: 1
      }
    ],
    is_active: true
  },
  {
    title: 'Understanding Stress',
    description: 'Learn about stress, its effects, and management techniques',
    category: 'Stress Management',
    difficulty: 'beginner',
    points_reward: 15,
    time_limit_seconds: 300,
    questions: [
      {
        question: 'What is stress?',
        options: [
          'Always harmful to health',
          'The body\'s response to challenges or demands',
          'Only caused by work',
          'A sign of weakness'
        ],
        correct_answer: 1
      },
      {
        question: 'Which hormone is primarily released during stress?',
        options: [
          'Insulin',
          'Cortisol',
          'Melatonin',
          'Dopamine'
        ],
        correct_answer: 1
      },
      {
        question: 'What is a healthy way to manage stress?',
        options: [
          'Ignoring it',
          'Regular exercise',
          'Working longer hours',
          'Avoiding all responsibilities'
        ],
        correct_answer: 1
      },
      {
        question: 'Can some stress be beneficial?',
        options: [
          'No, all stress is bad',
          'Yes, eustress can motivate and improve performance',
          'Only for athletes',
          'Stress is never beneficial'
        ],
        correct_answer: 1
      },
      {
        question: 'What is chronic stress?',
        options: [
          'Stress that lasts a few minutes',
          'Long-term, ongoing stress',
          'Stress from exercise',
          'A type of disease'
        ],
        correct_answer: 1
      }
    ],
    is_active: true
  },
  {
    title: 'Emotional Intelligence',
    description: 'Explore the concept of emotional intelligence and self-awareness',
    category: 'Psychology',
    difficulty: 'intermediate',
    points_reward: 20,
    time_limit_seconds: 420,
    questions: [
      {
        question: 'What is emotional intelligence (EI)?',
        options: [
          'IQ score',
          'The ability to understand and manage emotions',
          'Being overly emotional',
          'Academic knowledge'
        ],
        correct_answer: 1
      },
      {
        question: 'Which is NOT a component of emotional intelligence?',
        options: [
          'Self-awareness',
          'Empathy',
          'Physical strength',
          'Social skills'
        ],
        correct_answer: 2
      },
      {
        question: 'What is self-regulation in EI?',
        options: [
          'Suppressing all emotions',
          'Managing and controlling emotional responses',
          'Never showing emotions',
          'Being emotionally distant'
        ],
        correct_answer: 1
      },
      {
        question: 'Why is empathy important?',
        options: [
          'It\'s not important',
          'It helps understand and connect with others',
          'It makes you weak',
          'It\'s only for therapists'
        ],
        correct_answer: 1
      },
      {
        question: 'Can emotional intelligence be developed?',
        options: [
          'No, you\'re born with it',
          'Yes, through practice and learning',
          'Only in childhood',
          'It\'s fixed after age 25'
        ],
        correct_answer: 1
      },
      {
        question: 'What is social awareness in EI?',
        options: [
          'Being popular',
          'Understanding social media',
          'Recognizing emotions in others',
          'Following social norms'
        ],
        correct_answer: 2
      }
    ],
    is_active: true
  },
  {
    title: 'Mindfulness Fundamentals',
    description: 'Understanding mindfulness practice and its benefits',
    category: 'Mindfulness',
    difficulty: 'beginner',
    points_reward: 15,
    time_limit_seconds: 300,
    questions: [
      {
        question: 'What is mindfulness?',
        options: [
          'Thinking about the future',
          'Paying attention to the present moment',
          'Remembering the past',
          'Making plans'
        ],
        correct_answer: 1
      },
      {
        question: 'What is a benefit of mindfulness practice?',
        options: [
          'Eliminates all stress',
          'Reduces anxiety and improves focus',
          'Makes you perfect',
          'Solves all problems'
        ],
        correct_answer: 1
      },
      {
        question: 'How long should you practice mindfulness?',
        options: [
          'Only 1 hour per day',
          'Any amount, even 5 minutes helps',
          'Must be 30 minutes minimum',
          'It doesn\'t matter'
        ],
        correct_answer: 1
      },
      {
        question: 'What is mindful breathing?',
        options: [
          'Holding your breath',
          'Focusing attention on your breath',
          'Breathing as fast as possible',
          'Only breathing through your mouth'
        ],
        correct_answer: 1
      },
      {
        question: 'Can mindfulness help with anxiety?',
        options: [
          'No, it makes anxiety worse',
          'Yes, it can reduce anxiety symptoms',
          'Only for mild anxiety',
          'Anxiety cannot be helped'
        ],
        correct_answer: 1
      }
    ],
    is_active: true
  },
  {
    title: 'Understanding Depression',
    description: 'Learn about depression symptoms, causes, and support',
    category: 'Mental Health',
    difficulty: 'intermediate',
    points_reward: 20,
    time_limit_seconds: 420,
    questions: [
      {
        question: 'What is clinical depression?',
        options: [
          'Just feeling sad sometimes',
          'A serious medical condition affecting mood and functioning',
          'A choice people make',
          'Normal sadness'
        ],
        correct_answer: 1
      },
      {
        question: 'Which is a common symptom of depression?',
        options: [
          'Increased energy',
          'Persistent sadness or emptiness',
          'Improved concentration',
          'Better sleep quality'
        ],
        correct_answer: 1
      },
      {
        question: 'Can depression be treated?',
        options: [
          'No, it\'s untreatable',
          'Yes, with therapy and/or medication',
          'Only with medication',
          'Just think positive'
        ],
        correct_answer: 1
      },
      {
        question: 'What should you do if you think you have depression?',
        options: [
          'Ignore it',
          'Seek professional help',
          'Just exercise more',
          'Wait for it to pass'
        ],
        correct_answer: 1
      },
      {
        question: 'Is depression a sign of weakness?',
        options: [
          'Yes, people should be stronger',
          'No, it\'s a medical condition',
          'Only in some cases',
          'Yes, but it\'s their fault'
        ],
        correct_answer: 1
      },
      {
        question: 'Can lifestyle changes help manage depression?',
        options: [
          'No, only medication works',
          'Yes, combined with professional treatment',
          'Lifestyle doesn\'t matter',
          'Only diet matters'
        ],
        correct_answer: 1
      }
    ],
    is_active: true
  }
];
