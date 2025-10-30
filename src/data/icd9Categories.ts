export interface ICD9Code {
  code: string;
  title: string;
  description: string;
  symptoms?: string[];
  causes?: string[];
  category: string;
  rangeStart: string;
  rangeEnd: string;
}

export interface ICD9Category {
  range: string;
  title: string;
  description: string;
  rangeStart: string;
  rangeEnd: string;
}

export const icd9Categories: ICD9Category[] = [
  {
    range: "001-139",
    title: "Infectious & Parasitic Diseases",
    description: "Diseases caused by bacteria, viruses, parasites, and other infectious agents",
    rangeStart: "001",
    rangeEnd: "139"
  },
  {
    range: "140-239",
    title: "Neoplasms",
    description: "Abnormal tissue growths including benign and malignant tumors",
    rangeStart: "140",
    rangeEnd: "239"
  },
  {
    range: "240-279",
    title: "Endocrine, Nutritional, Metabolic",
    description: "Disorders of hormones, nutrition, and metabolism",
    rangeStart: "240",
    rangeEnd: "279"
  },
  {
    range: "280-289",
    title: "Blood & Blood-Forming Organs",
    description: "Disorders affecting blood cells and blood-forming tissues",
    rangeStart: "280",
    rangeEnd: "289"
  },
  {
    range: "290-319",
    title: "Mental, Behavioral & Neurodevelopmental Disorders",
    description: "Conditions affecting mental health, behavior, and brain development",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    range: "320-389",
    title: "Nervous System & Sense Organs",
    description: "Disorders of the brain, spinal cord, nerves, eyes, and ears",
    rangeStart: "320",
    rangeEnd: "389"
  },
  {
    range: "390-459",
    title: "Circulatory System",
    description: "Diseases of the heart, blood vessels, and circulation",
    rangeStart: "390",
    rangeEnd: "459"
  },
  {
    range: "460-519",
    title: "Respiratory System",
    description: "Disorders affecting breathing and the lungs",
    rangeStart: "460",
    rangeEnd: "519"
  },
  {
    range: "520-579",
    title: "Digestive System",
    description: "Conditions affecting digestion and the gastrointestinal tract",
    rangeStart: "520",
    rangeEnd: "579"
  },
  {
    range: "580-629",
    title: "Genitourinary System",
    description: "Disorders of the kidneys, urinary tract, and reproductive organs",
    rangeStart: "580",
    rangeEnd: "629"
  },
  {
    range: "630-679",
    title: "Pregnancy, Childbirth & Puerperium",
    description: "Complications related to pregnancy and childbirth",
    rangeStart: "630",
    rangeEnd: "679"
  },
  {
    range: "680-709",
    title: "Skin & Subcutaneous Tissue",
    description: "Disorders of the skin, hair, and nails",
    rangeStart: "680",
    rangeEnd: "709"
  },
  {
    range: "710-739",
    title: "Musculoskeletal & Connective Tissue",
    description: "Disorders of bones, joints, muscles, and connective tissues",
    rangeStart: "710",
    rangeEnd: "739"
  },
  {
    range: "740-759",
    title: "Congenital Anomalies",
    description: "Birth defects and conditions present from birth",
    rangeStart: "740",
    rangeEnd: "759"
  },
  {
    range: "760-779",
    title: "Perinatal Period Conditions",
    description: "Conditions originating in the period around birth",
    rangeStart: "760",
    rangeEnd: "779"
  },
  {
    range: "780-799",
    title: "Symptoms, Signs & Ill-Defined Conditions",
    description: "General symptoms and conditions without clear diagnosis",
    rangeStart: "780",
    rangeEnd: "799"
  },
  {
    range: "800-999",
    title: "Injury & Poisoning",
    description: "Physical injuries, toxic effects, and complications",
    rangeStart: "800",
    rangeEnd: "999"
  },
  {
    range: "E000-E999",
    title: "External Causes of Injury",
    description: "Classification of environmental events and circumstances causing injury",
    rangeStart: "E000",
    rangeEnd: "E999"
  },
  {
    range: "V01-V91",
    title: "Supplementary Classification Factors",
    description: "Factors influencing health status and contact with health services",
    rangeStart: "V01",
    rangeEnd: "V91"
  }
];

// Sample ICD-9 codes for mental health category (290-319)
export const sampleICD9Codes: ICD9Code[] = [
  {
    code: "290.0",
    title: "Senile dementia, uncomplicated",
    description: "Progressive deterioration of mental function due to aging without complications.",
    symptoms: ["Memory loss", "Confusion", "Difficulty with daily tasks", "Changes in personality"],
    causes: ["Aging", "Brain cell death", "Reduced brain activity"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "291.0",
    title: "Alcohol withdrawal delirium",
    description: "Acute confusion and disorientation occurring after stopping or reducing heavy alcohol use.",
    symptoms: ["Severe confusion", "Hallucinations", "Agitation", "Tremors", "Sweating"],
    causes: ["Sudden alcohol cessation", "Long-term heavy alcohol use", "Brain chemistry changes"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "295.3",
    title: "Paranoid schizophrenia",
    description: "A mental disorder characterized by delusions and auditory hallucinations.",
    symptoms: ["Delusions of persecution", "Hearing voices", "Paranoia", "Disorganized thinking"],
    causes: ["Genetic factors", "Brain chemistry imbalance", "Environmental stress"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "296.2",
    title: "Major depressive disorder, single episode",
    description: "A period of severe depression lasting at least two weeks, affecting daily life.",
    symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep changes", "Difficulty concentrating"],
    causes: ["Brain chemistry", "Genetics", "Stressful life events", "Trauma"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "296.4",
    title: "Bipolar disorder, manic",
    description: "A mental health condition causing extreme mood swings including manic episodes.",
    symptoms: ["Elevated mood", "Increased energy", "Racing thoughts", "Impulsive behavior", "Decreased sleep"],
    causes: ["Genetic factors", "Brain structure differences", "Neurotransmitter imbalances"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "300.0",
    title: "Anxiety state, unspecified",
    description: "Excessive worry and fear that interferes with daily activities.",
    symptoms: ["Excessive worry", "Restlessness", "Fatigue", "Difficulty concentrating", "Muscle tension"],
    causes: ["Stress", "Genetics", "Brain chemistry", "Traumatic experiences"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "300.4",
    title: "Dysthymic disorder",
    description: "Persistent mild to moderate depression lasting for at least two years.",
    symptoms: ["Low mood", "Low energy", "Low self-esteem", "Difficulty making decisions"],
    causes: ["Genetics", "Brain chemistry", "Life stressors", "Personality traits"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "307.1",
    title: "Anorexia nervosa",
    description: "An eating disorder characterized by extreme food restriction and fear of weight gain.",
    symptoms: ["Extreme weight loss", "Fear of gaining weight", "Distorted body image", "Restricted eating"],
    causes: ["Psychological factors", "Social pressure", "Genetics", "Control issues"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "309.0",
    title: "Adjustment disorder with depressed mood",
    description: "Emotional or behavioral symptoms in response to a stressful life event.",
    symptoms: ["Sadness", "Hopelessness", "Crying", "Withdrawal from others"],
    causes: ["Major life changes", "Loss", "Relationship problems", "Work stress"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "309.81",
    title: "Post-traumatic stress disorder",
    description: "A condition triggered by experiencing or witnessing a traumatic event.",
    symptoms: ["Flashbacks", "Nightmares", "Severe anxiety", "Avoidance of triggers", "Hypervigilance"],
    causes: ["Traumatic events", "Combat exposure", "Abuse", "Accidents", "Natural disasters"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "311",
    title: "Depressive disorder, not elsewhere classified",
    description: "Depression that doesn't fit other specific categories but significantly affects functioning.",
    symptoms: ["Persistent low mood", "Loss of pleasure", "Changes in appetite", "Sleep disturbances"],
    causes: ["Multiple factors", "Life circumstances", "Chemical imbalances", "Chronic stress"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "312.34",
    title: "Intermittent explosive disorder",
    description: "Recurrent episodes of impulsive, aggressive behavior out of proportion to the situation.",
    symptoms: ["Sudden rage", "Aggressive outbursts", "Physical violence", "Destroying property"],
    causes: ["Brain chemistry", "Childhood environment", "Genetics", "Past trauma"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "314.00",
    title: "Attention deficit disorder without hyperactivity",
    description: "Difficulty maintaining attention and focus without physical hyperactivity symptoms.",
    symptoms: ["Inattention", "Difficulty focusing", "Forgetfulness", "Easily distracted"],
    causes: ["Genetics", "Brain development", "Neurotransmitter differences", "Environmental factors"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  },
  {
    code: "314.01",
    title: "Attention deficit hyperactivity disorder",
    description: "A neurodevelopmental disorder with inattention, hyperactivity, and impulsivity.",
    symptoms: ["Inability to focus", "Hyperactivity", "Impulsiveness", "Restlessness", "Disorganization"],
    causes: ["Genetics", "Brain structure", "Neurotransmitter imbalances", "Prenatal exposures"],
    category: "Mental, Behavioral & Neurodevelopmental Disorders",
    rangeStart: "290",
    rangeEnd: "319"
  }
];
