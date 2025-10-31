// Real-world inspired case studies and clinical vignettes for DSM-5 disorders
// These are fictional educational examples created for learning purposes

export interface CaseStudy {
  id: string;
  disorderCategory: string;
  disorderName: string;
  patientProfile: {
    age: string;
    occupation?: string;
    presenting_complaint: string;
  };
  clinicalPresentation: string[];
  assessment: string;
  differentialDiagnosis: string[];
  treatment: {
    approaches: string[];
    outcomes: string;
  };
  culturalConsiderations?: string;
  learningPoints: string[];
}

export const dsm5CaseStudies: CaseStudy[] = [
  {
    id: "mdd-001",
    disorderCategory: "Depressive Disorders",
    disorderName: "Major Depressive Disorder",
    patientProfile: {
      age: "32-year-old",
      occupation: "Software Engineer",
      presenting_complaint: "Feeling empty and unable to enjoy anything for the past 3 months"
    },
    clinicalPresentation: [
      "Persistent depressed mood most of the day, nearly every day",
      "Loss of interest in previously enjoyed activities (coding, gaming, socializing)",
      "Significant weight loss (15 lbs in 2 months) and decreased appetite",
      "Insomnia nearly every night, difficulty falling asleep and early morning awakening",
      "Fatigue and loss of energy",
      "Feelings of worthlessness and inappropriate guilt",
      "Difficulty concentrating at work, leading to decreased productivity",
      "No suicidal ideation but reports thoughts that 'life feels meaningless'"
    ],
    assessment: "Met criteria for Major Depressive Disorder, moderate severity. No psychotic features. First episode. Patient demonstrates insight into condition.",
    differentialDiagnosis: [
      "Persistent Depressive Disorder (symptoms duration < 2 years)",
      "Adjustment Disorder (no clear stressor identified)",
      "Bipolar Disorder (no history of manic/hypomanic episodes)",
      "Substance-Induced Mood Disorder (denied substance use)"
    ],
    treatment: {
      approaches: [
        "Psychotherapy: Cognitive Behavioral Therapy (CBT) twice weekly",
        "Pharmacotherapy: SSRI (Sertraline 50mg, titrated to 100mg)",
        "Lifestyle interventions: Sleep hygiene, regular exercise, social engagement",
        "Psychoeducation for patient and supportive family members",
        "Regular monitoring for suicidal ideation"
      ],
      outcomes: "After 8 weeks of combined treatment, patient showed 60% improvement on PHQ-9 scores. Returned to work with accommodations. Continued maintenance therapy for 6 months."
    },
    learningPoints: [
      "MDD requires at least 5 symptoms present for 2+ weeks with functional impairment",
      "Always assess for suicidal ideation even when not spontaneously reported",
      "Combined psychotherapy and pharmacotherapy often most effective for moderate-severe depression",
      "Work-related stressors can trigger but don't exclude MDD diagnosis if criteria met"
    ]
  },
  {
    id: "gad-001",
    disorderCategory: "Anxiety Disorders",
    disorderName: "Generalized Anxiety Disorder",
    patientProfile: {
      age: "45-year-old",
      occupation: "High School Teacher",
      presenting_complaint: "Constant worrying that interferes with daily life for over a year"
    },
    clinicalPresentation: [
      "Excessive worry about multiple domains (family health, job performance, finances)",
      "Difficulty controlling the worry, occurring more days than not for 6+ months",
      "Restlessness and feeling keyed up or on edge",
      "Easily fatigued despite adequate sleep",
      "Difficulty concentrating, mind going blank during lessons",
      "Irritability, snapping at students and family",
      "Muscle tension, particularly in neck and shoulders",
      "Sleep disturbance, difficulty staying asleep"
    ],
    assessment: "Generalized Anxiety Disorder with moderate severity. Significant impairment in occupational and social functioning. No comorbid depression at this time.",
    differentialDiagnosis: [
      "Major Depressive Disorder (anxiety is primary, not secondary to depression)",
      "Panic Disorder (no panic attacks present)",
      "Social Anxiety Disorder (worry not limited to social situations)",
      "Adjustment Disorder (symptoms persisted beyond expected reaction period)"
    ],
    treatment: {
      approaches: [
        "Cognitive Behavioral Therapy focusing on worry management and cognitive restructuring",
        "Relaxation techniques: Progressive muscle relaxation, diaphragmatic breathing",
        "Pharmacotherapy: SNRI (Venlafaxine XR) for anxiety management",
        "Mindfulness-based stress reduction (MBSR)",
        "Time management and stress reduction strategies"
      ],
      outcomes: "After 12 weeks, GAD-7 scores decreased from 18 to 8. Patient reports better control over worries, improved sleep, and restored teaching effectiveness. Continues with monthly maintenance therapy."
    },
    culturalConsiderations: "Patient initially hesitant to seek treatment due to cultural stigma around mental health. Psychoeducation emphasized that anxiety is a medical condition, not personal weakness.",
    learningPoints: [
      "GAD involves excessive worry that is difficult to control and occurs more days than not for 6+ months",
      "Physical symptoms (restlessness, fatigue, muscle tension) are key diagnostic features",
      "GAD often co-occurs with depression; assess for both",
      "Cultural factors can delay treatment-seeking; normalize mental health care"
    ]
  },
  {
    id: "ptsd-001",
    disorderCategory: "Trauma and Stressor-Related Disorders",
    disorderName: "Post-Traumatic Stress Disorder",
    patientProfile: {
      age: "28-year-old",
      occupation: "Emergency Medical Technician",
      presenting_complaint: "Nightmares and flashbacks after responding to a fatal accident 4 months ago"
    },
    clinicalPresentation: [
      "Intrusive memories of the traumatic event, occurring several times per week",
      "Recurrent distressing dreams about the accident",
      "Flashback episodes where patient feels the event is recurring",
      "Intense psychological distress when exposed to trauma reminders (sirens, accident scenes)",
      "Persistent avoidance of thoughts, feelings, and conversations about the trauma",
      "Avoidance of activities and places that remind of the event (avoiding certain routes)",
      "Negative beliefs about self ('I should have done more')",
      "Persistent negative emotional state (fear, horror, guilt)",
      "Markedly diminished interest in work and social activities",
      "Hypervigilance and exaggerated startle response",
      "Sleep disturbance and difficulty concentrating"
    ],
    assessment: "Post-Traumatic Stress Disorder. Symptoms present for 4 months following direct exposure to traumatic event. Significant occupational impairment; patient on medical leave from EMT duties.",
    differentialDiagnosis: [
      "Acute Stress Disorder (symptoms > 1 month, excludes ASD)",
      "Adjustment Disorder (symptoms meet full PTSD criteria)",
      "Major Depressive Disorder (trauma-related, but PTSD symptoms predominate)",
      "Generalized Anxiety Disorder (anxiety is trauma-specific)"
    ],
    treatment: {
      approaches: [
        "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
        "Eye Movement Desensitization and Reprocessing (EMDR)",
        "Prolonged Exposure Therapy to reduce avoidance",
        "Pharmacotherapy: SSRI (Sertraline) for symptom management",
        "Sleep hygiene and nightmare management techniques",
        "Gradual return-to-work plan with occupational therapy support",
        "Peer support group for first responders"
      ],
      outcomes: "After 16 weeks of EMDR and medication, PCL-5 scores decreased from 62 to 28. Patient successfully returned to work with reduced hours initially. Continues to use coping strategies and attends peer support monthly."
    },
    learningPoints: [
      "PTSD requires exposure to actual or threatened death, serious injury, or sexual violence",
      "Symptoms must persist for >1 month and cause significant distress/impairment",
      "First responders are at high risk for occupational trauma exposure",
      "Evidence-based treatments (EMDR, PE, TF-CBT) are highly effective",
      "Peer support important for occupational trauma recovery"
    ]
  },
  {
    id: "adhd-001",
    disorderCategory: "Neurodevelopmental Disorders",
    disorderName: "Attention-Deficit/Hyperactivity Disorder (Adult)",
    patientProfile: {
      age: "26-year-old",
      occupation: "Graphic Designer",
      presenting_complaint: "Lifelong difficulty staying focused and completing projects, affecting work performance"
    },
    clinicalPresentation: [
      "Difficulty sustaining attention in tasks (starts multiple design projects but struggles to complete)",
      "Frequent careless mistakes in work due to lack of attention to detail",
      "Often doesn't follow through on instructions, fails to meet deadlines",
      "Difficulty organizing tasks and activities, messy workspace",
      "Avoids tasks requiring sustained mental effort",
      "Frequently loses important items (phone, keys, design files)",
      "Easily distracted by extraneous stimuli during meetings",
      "Forgetful in daily activities (missing appointments, forgetting to pay bills)",
      "Fidgeting with hands, difficulty remaining seated during long meetings",
      "Reports these symptoms were present since childhood but worsened with increased work demands"
    ],
    assessment: "Attention-Deficit/Hyperactivity Disorder, Combined Presentation, in adulthood. Several inattentive and hyperactive-impulsive symptoms present since childhood. Moderate severity with occupational impairment.",
    differentialDiagnosis: [
      "Anxiety Disorder (primary symptoms are attentional, not anxious)",
      "Depressive Disorder (no mood symptoms; attention difficulties are primary)",
      "Learning Disorder (no specific learning deficits identified)",
      "Adult-onset attention difficulties due to substance use (denied substance use)"
    ],
    treatment: {
      approaches: [
        "Psychoeducation about ADHD in adults and executive function deficits",
        "Cognitive Behavioral Therapy focused on organization and time management",
        "Pharmacotherapy: Stimulant medication (Methylphenidate XR) with careful monitoring",
        "Environmental accommodations: Use of timers, reminders, task management apps",
        "Coaching for workplace strategies and deadline management",
        "Regular sleep schedule and exercise to support attention regulation"
      ],
      outcomes: "With medication and CBT strategies, patient showed significant improvement in task completion and work quality. Implemented organizational systems that reduced missed deadlines by 80%. Continues medication with quarterly follow-ups."
    },
    culturalConsiderations: "Patient initially skeptical about ADHD diagnosis, believing it was 'just laziness.' Education about neurobiological basis helped acceptance and treatment adherence.",
    learningPoints: [
      "ADHD can persist into adulthood and may become more impairing with increased demands",
      "Symptoms must have been present before age 12, even if diagnosis is made later",
      "Adult ADHD often presents with more inattentive than hyperactive symptoms",
      "Environmental strategies and medication together are most effective",
      "Addressing self-stigma important for treatment engagement"
    ]
  },
  {
    id: "ocd-001",
    disorderCategory: "Obsessive-Compulsive and Related Disorders",
    disorderName: "Obsessive-Compulsive Disorder",
    patientProfile: {
      age: "35-year-old",
      occupation: "Accountant",
      presenting_complaint: "Intrusive thoughts about contamination and excessive hand-washing for 2 years"
    },
    clinicalPresentation: [
      "Recurrent, persistent thoughts about germs and contamination (obsessions)",
      "Recognition that thoughts are products of own mind but feels unable to control them",
      "Significant distress caused by intrusive thoughts",
      "Repetitive hand-washing (30-40 times per day) to neutralize contamination fears (compulsions)",
      "Avoidance of public places, doorknobs, and shaking hands",
      "Checking behaviors (repeatedly checking if door is locked, items are clean)",
      "Rituals must be performed in specific order or must restart",
      "Hand-washing causes skin damage (raw, cracked hands)",
      "Behaviors consume 3-4 hours daily, causing significant work and social impairment",
      "Insight: Patient recognizes behaviors are excessive but feels compelled to perform them"
    ],
    assessment: "Obsessive-Compulsive Disorder with good insight. Contamination obsessions and washing/checking compulsions. Moderate to severe intensity with marked functional impairment.",
    differentialDiagnosis: [
      "Generalized Anxiety Disorder (anxiety is focused on contamination, not generalized)",
      "Illness Anxiety Disorder (focused on contamination, not illness fears)",
      "Body Dysmorphic Disorder (no preoccupation with appearance)",
      "Specific Phobia (involves obsessions and compulsions, not simple phobia)"
    ],
    treatment: {
      approaches: [
        "Exposure and Response Prevention (ERP) - gold standard for OCD",
        "Gradual exposure hierarchy starting with low-anxiety triggers",
        "Response prevention: delaying and eventually eliminating rituals",
        "Cognitive therapy to address contamination beliefs",
        "Pharmacotherapy: SSRI at higher dose (Fluoxetine 60mg)",
        "Skin care for hand damage from excessive washing",
        "Family psychoeducation to reduce accommodation of rituals"
      ],
      outcomes: "After 20 weeks of intensive ERP and medication, Y-BOCS scores decreased from 32 to 14. Hand-washing reduced to 5-8 times daily (appropriate level). Patient returned to social activities and work productivity normalized. Continues monthly ERP booster sessions."
    },
    learningPoints: [
      "OCD involves both obsessions (intrusive thoughts) and compulsions (ritualistic behaviors)",
      "Compulsions are performed to reduce anxiety from obsessions",
      "ERP is the most effective psychological treatment for OCD",
      "SSRIs typically require higher doses for OCD than for depression",
      "Family accommodation of rituals can maintain the disorder",
      "Good insight predicts better treatment response"
    ]
  },
  {
    id: "bipolar-001",
    disorderCategory: "Bipolar and Related Disorders",
    disorderName: "Bipolar I Disorder",
    patientProfile: {
      age: "29-year-old",
      occupation: "Marketing Manager",
      presenting_complaint: "Brought to ER by family after 5 days without sleep, excessive spending, and erratic behavior"
    },
    clinicalPresentation: [
      "Elevated, expansive mood - describes feeling 'on top of the world'",
      "Decreased need for sleep (2 hours per night for past week, feels energized)",
      "More talkative than usual, pressured speech, difficult to interrupt",
      "Racing thoughts - 'my mind is going a million miles per hour'",
      "Distractibility - unable to focus in conversation",
      "Increase in goal-directed activity - started three new business ventures simultaneously",
      "Excessive involvement in risky activities - spent $15,000 on spontaneous purchases",
      "Inflated self-esteem, grandiose beliefs about becoming 'the next marketing genius'",
      "Impaired judgment - quit job without backup plan to pursue new ventures",
      "Symptoms lasted 8 days, causing severe occupational and financial impairment",
      "History of two prior depressive episodes treated with antidepressants"
    ],
    assessment: "Bipolar I Disorder, current episode manic, severe. First manic episode. Previous antidepressant use may have triggered episode. Requires immediate stabilization.",
    differentialDiagnosis: [
      "Substance-Induced Bipolar Disorder (toxicology negative)",
      "Bipolar II Disorder (meets criteria for full manic episode, not hypomania)",
      "Major Depressive Disorder (manic episode present)",
      "Attention-Deficit/Hyperactivity Disorder (episodic, not chronic pattern)",
      "Borderline Personality Disorder (discrete mood episodes, not emotional dysregulation)"
    ],
    treatment: {
      approaches: [
        "Immediate: Hospitalization for safety and stabilization",
        "Discontinue antidepressant (potential trigger)",
        "Mood stabilizer initiation (Lithium with therapeutic level monitoring)",
        "Short-term antipsychotic for acute mania (Olanzapine)",
        "Sleep restoration protocol",
        "Psychoeducation for patient and family about bipolar disorder",
        "After stabilization: Individual therapy (Interpersonal and Social Rhythm Therapy)",
        "Regular mood monitoring and early warning sign identification",
        "Financial counseling to address consequences of manic spending"
      ],
      outcomes: "Manic symptoms resolved after 10 days of hospitalization. Transitioned to outpatient care with mood stabilizer maintenance. After 6 months, patient remains euthymic on Lithium monotherapy. Developed relapse prevention plan and attends monthly psychiatry appointments and psychotherapy."
    },
    culturalConsiderations: "Family initially attributed behavior to 'stress' and delayed seeking treatment. Education about bipolar disorder as biological condition helped family support treatment adherence.",
    learningPoints: [
      "Manic episode requires ≥1 week of elevated/irritable mood with ≥3 additional symptoms (4 if mood is only irritable)",
      "Previous depressive episodes + one manic episode = Bipolar I diagnosis",
      "Antidepressants can trigger manic episodes in vulnerable individuals",
      "Acute mania often requires hospitalization for safety",
      "Lithium remains gold standard for bipolar I disorder maintenance",
      "Psychoeducation and relapse prevention critical for long-term management",
      "Sleep disruption often precedes and exacerbates mood episodes"
    ]
  }
];

export const treatmentApproaches = {
  psychotherapy: [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description: "Focuses on identifying and changing negative thought patterns and behaviors",
      effective_for: ["Depression", "Anxiety Disorders", "PTSD", "OCD", "Eating Disorders"]
    },
    {
      name: "Dialectical Behavior Therapy (DBT)",
      description: "Combines CBT with mindfulness, teaching distress tolerance and emotional regulation",
      effective_for: ["Borderline Personality Disorder", "Self-harm behaviors", "Suicidal ideation"]
    },
    {
      name: "Exposure and Response Prevention (ERP)",
      description: "Gradual exposure to feared situations while preventing compulsive responses",
      effective_for: ["OCD", "Specific Phobias", "PTSD", "Social Anxiety Disorder"]
    },
    {
      name: "Eye Movement Desensitization and Reprocessing (EMDR)",
      description: "Uses bilateral stimulation to process traumatic memories",
      effective_for: ["PTSD", "Complex Trauma", "Panic Disorder"]
    },
    {
      name: "Interpersonal and Social Rhythm Therapy (IPSRT)",
      description: "Focuses on stabilizing daily rhythms and improving interpersonal relationships",
      effective_for: ["Bipolar Disorder", "Depression"]
    },
    {
      name: "Acceptance and Commitment Therapy (ACT)",
      description: "Teaches psychological flexibility and values-based living",
      effective_for: ["Chronic Pain", "Anxiety", "Depression", "Substance Use"]
    }
  ],
  pharmacotherapy: [
    {
      class: "Selective Serotonin Reuptake Inhibitors (SSRIs)",
      examples: ["Fluoxetine", "Sertraline", "Escitalopram"],
      indications: ["Depression", "Anxiety Disorders", "OCD", "PTSD"],
      mechanism: "Increase serotonin availability in synaptic cleft"
    },
    {
      class: "Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs)",
      examples: ["Venlafaxine", "Duloxetine"],
      indications: ["Depression", "Generalized Anxiety Disorder", "Chronic Pain"],
      mechanism: "Increase both serotonin and norepinephrine"
    },
    {
      class: "Mood Stabilizers",
      examples: ["Lithium", "Valproic Acid", "Lamotrigine"],
      indications: ["Bipolar Disorder", "Mood instability"],
      mechanism: "Various mechanisms to stabilize neuronal activity"
    },
    {
      class: "Antipsychotics",
      examples: ["Olanzapine", "Quetiapine", "Aripiprazole"],
      indications: ["Schizophrenia", "Bipolar Disorder", "Treatment-resistant Depression"],
      mechanism: "Dopamine receptor antagonism, among other effects"
    },
    {
      class: "Stimulants",
      examples: ["Methylphenidate", "Amphetamine salts"],
      indications: ["ADHD", "Narcolepsy"],
      mechanism: "Increase dopamine and norepinephrine in prefrontal cortex"
    }
  ]
};
