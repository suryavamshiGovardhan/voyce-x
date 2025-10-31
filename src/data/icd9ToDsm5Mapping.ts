// Cross-reference mapping between ICD-9-CM codes and DSM-5 disorders
// This helps clinicians understand the relationship between billing codes (ICD-9) and diagnostic criteria (DSM-5)

export interface ICD9ToDSM5CrossReference {
  icd9Code: string;
  icd9Title: string;
  dsm5Disorder: string;
  dsm5Category: string;
  relationship: "exact" | "approximate" | "broader" | "narrower";
  notes?: string;
}

export const icd9ToDsm5Mapping: ICD9ToDSM5CrossReference[] = [
  // Depressive Disorders
  {
    icd9Code: "296.2",
    icd9Title: "Major depressive disorder, single episode",
    dsm5Disorder: "Major Depressive Disorder, Single Episode",
    dsm5Category: "Depressive Disorders",
    relationship: "exact",
    notes: "Direct correspondence between ICD-9 and DSM-5 criteria"
  },
  {
    icd9Code: "296.3",
    icd9Title: "Major depressive disorder, recurrent",
    dsm5Disorder: "Major Depressive Disorder, Recurrent Episode",
    dsm5Category: "Depressive Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.4",
    icd9Title: "Dysthymic disorder",
    dsm5Disorder: "Persistent Depressive Disorder (Dysthymia)",
    dsm5Category: "Depressive Disorders",
    relationship: "exact",
    notes: "DSM-5 renamed dysthymia to Persistent Depressive Disorder"
  },
  {
    icd9Code: "311",
    icd9Title: "Depressive disorder, not elsewhere classified",
    dsm5Disorder: "Other Specified Depressive Disorder / Unspecified Depressive Disorder",
    dsm5Category: "Depressive Disorders",
    relationship: "broader",
    notes: "ICD-9 code is less specific than DSM-5 categories"
  },
  
  // Anxiety Disorders
  {
    icd9Code: "300.00",
    icd9Title: "Anxiety state, unspecified",
    dsm5Disorder: "Unspecified Anxiety Disorder",
    dsm5Category: "Anxiety Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.02",
    icd9Title: "Generalized anxiety disorder",
    dsm5Disorder: "Generalized Anxiety Disorder",
    dsm5Category: "Anxiety Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.01",
    icd9Title: "Panic disorder without agoraphobia",
    dsm5Disorder: "Panic Disorder",
    dsm5Category: "Anxiety Disorders",
    relationship: "approximate",
    notes: "DSM-5 specifies agoraphobia as separate disorder; ICD-9 combines them"
  },
  {
    icd9Code: "300.21",
    icd9Title: "Panic disorder with agoraphobia",
    dsm5Disorder: "Panic Disorder + Agoraphobia (separate diagnoses)",
    dsm5Category: "Anxiety Disorders",
    relationship: "approximate",
    notes: "DSM-5 codes these as two separate diagnoses"
  },
  {
    icd9Code: "300.22",
    icd9Title: "Agoraphobia without panic disorder",
    dsm5Disorder: "Agoraphobia",
    dsm5Category: "Anxiety Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.23",
    icd9Title: "Social phobia",
    dsm5Disorder: "Social Anxiety Disorder (Social Phobia)",
    dsm5Category: "Anxiety Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.29",
    icd9Title: "Specific phobia",
    dsm5Disorder: "Specific Phobia",
    dsm5Category: "Anxiety Disorders",
    relationship: "exact",
    notes: "DSM-5 has specific subtypes (animal, natural environment, situational, blood-injection-injury, other)"
  },

  // Obsessive-Compulsive and Related Disorders
  {
    icd9Code: "300.3",
    icd9Title: "Obsessive-compulsive disorder",
    dsm5Disorder: "Obsessive-Compulsive Disorder",
    dsm5Category: "Obsessive-Compulsive and Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "300.7",
    icd9Title: "Body dysmorphic disorder",
    dsm5Disorder: "Body Dysmorphic Disorder",
    dsm5Category: "Obsessive-Compulsive and Related Disorders",
    relationship: "exact",
    notes: "Moved to OCD chapter in DSM-5 from Somatoform Disorders"
  },
  {
    icd9Code: "312.39",
    icd9Title: "Trichotillomania",
    dsm5Disorder: "Trichotillomania (Hair-Pulling Disorder)",
    dsm5Category: "Obsessive-Compulsive and Related Disorders",
    relationship: "exact",
    notes: "Moved to OCD chapter in DSM-5 from Impulse Control Disorders"
  },

  // Trauma and Stressor-Related Disorders
  {
    icd9Code: "309.81",
    icd9Title: "Post-traumatic stress disorder",
    dsm5Disorder: "Post-Traumatic Stress Disorder",
    dsm5Category: "Trauma- and Stressor-Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "308.3",
    icd9Title: "Acute stress disorder",
    dsm5Disorder: "Acute Stress Disorder",
    dsm5Category: "Trauma- and Stressor-Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "309.0",
    icd9Title: "Adjustment disorder with depressed mood",
    dsm5Disorder: "Adjustment Disorder with Depressed Mood",
    dsm5Category: "Trauma- and Stressor-Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "309.24",
    icd9Title: "Adjustment disorder with anxiety",
    dsm5Disorder: "Adjustment Disorder with Anxiety",
    dsm5Category: "Trauma- and Stressor-Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "309.28",
    icd9Title: "Adjustment disorder with mixed anxiety and depressed mood",
    dsm5Disorder: "Adjustment Disorder with Mixed Anxiety and Depressed Mood",
    dsm5Category: "Trauma- and Stressor-Related Disorders",
    relationship: "exact"
  },

  // Bipolar and Related Disorders
  {
    icd9Code: "296.0",
    icd9Title: "Bipolar I disorder, single manic episode",
    dsm5Disorder: "Bipolar I Disorder, current or most recent episode manic",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "296.4",
    icd9Title: "Bipolar I disorder, most recent episode manic",
    dsm5Disorder: "Bipolar I Disorder, current episode manic",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "296.5",
    icd9Title: "Bipolar I disorder, most recent episode depressed",
    dsm5Disorder: "Bipolar I Disorder, current episode depressed",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "296.6",
    icd9Title: "Bipolar I disorder, most recent episode mixed",
    dsm5Disorder: "Bipolar I Disorder with mixed features",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "approximate",
    notes: "DSM-5 removed 'mixed episode' as separate type, uses 'with mixed features' specifier"
  },
  {
    icd9Code: "296.89",
    icd9Title: "Bipolar II disorder",
    dsm5Disorder: "Bipolar II Disorder",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.13",
    icd9Title: "Cyclothymic disorder",
    dsm5Disorder: "Cyclothymic Disorder",
    dsm5Category: "Bipolar and Related Disorders",
    relationship: "exact"
  },

  // Schizophrenia Spectrum and Psychotic Disorders
  {
    icd9Code: "295.1",
    icd9Title: "Disorganized schizophrenia",
    dsm5Disorder: "Schizophrenia",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "broader",
    notes: "DSM-5 removed subtypes (disorganized, paranoid, etc.); all are now just 'Schizophrenia'"
  },
  {
    icd9Code: "295.3",
    icd9Title: "Paranoid schizophrenia",
    dsm5Disorder: "Schizophrenia",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "broader",
    notes: "DSM-5 removed subtypes"
  },
  {
    icd9Code: "295.9",
    icd9Title: "Schizophrenia, unspecified",
    dsm5Disorder: "Schizophrenia",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "295.40",
    icd9Title: "Schizophreniform disorder",
    dsm5Disorder: "Schizophreniform Disorder",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "295.70",
    icd9Title: "Schizoaffective disorder",
    dsm5Disorder: "Schizoaffective Disorder",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "297.1",
    icd9Title: "Delusional disorder",
    dsm5Disorder: "Delusional Disorder",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "298.8",
    icd9Title: "Brief psychotic disorder",
    dsm5Disorder: "Brief Psychotic Disorder",
    dsm5Category: "Schizophrenia Spectrum and Other Psychotic Disorders",
    relationship: "exact"
  },

  // Neurodevelopmental Disorders
  {
    icd9Code: "314.00",
    icd9Title: "Attention-deficit hyperactivity disorder, predominantly inattentive type",
    dsm5Disorder: "Attention-Deficit/Hyperactivity Disorder, Predominantly Inattentive Presentation",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "314.01",
    icd9Title: "Attention-deficit hyperactivity disorder, predominantly hyperactive-impulsive type",
    dsm5Disorder: "Attention-Deficit/Hyperactivity Disorder, Predominantly Hyperactive-Impulsive Presentation",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "314.01",
    icd9Title: "Attention-deficit hyperactivity disorder, combined type",
    dsm5Disorder: "Attention-Deficit/Hyperactivity Disorder, Combined Presentation",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "299.00",
    icd9Title: "Autistic disorder",
    dsm5Disorder: "Autism Spectrum Disorder",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "broader",
    notes: "DSM-5 combined autistic disorder, Asperger's, and PDD-NOS into Autism Spectrum Disorder"
  },
  {
    icd9Code: "299.80",
    icd9Title: "Asperger's disorder",
    dsm5Disorder: "Autism Spectrum Disorder",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "broader",
    notes: "DSM-5 integrated Asperger's into Autism Spectrum Disorder"
  },
  {
    icd9Code: "315.00",
    icd9Title: "Developmental reading disorder",
    dsm5Disorder: "Specific Learning Disorder with impairment in reading",
    dsm5Category: "Neurodevelopmental Disorders",
    relationship: "approximate",
    notes: "DSM-5 uses umbrella term 'Specific Learning Disorder' with specifiers"
  },

  // Substance-Related and Addictive Disorders
  {
    icd9Code: "303.90",
    icd9Title: "Alcohol dependence",
    dsm5Disorder: "Alcohol Use Disorder, Moderate or Severe",
    dsm5Category: "Substance-Related and Addictive Disorders",
    relationship: "approximate",
    notes: "DSM-5 combined abuse and dependence into single 'Use Disorder' with severity levels"
  },
  {
    icd9Code: "305.00",
    icd9Title: "Alcohol abuse",
    dsm5Disorder: "Alcohol Use Disorder, Mild",
    dsm5Category: "Substance-Related and Addictive Disorders",
    relationship: "approximate",
    notes: "DSM-5 eliminated separate abuse/dependence distinction"
  },
  {
    icd9Code: "304.00",
    icd9Title: "Opioid dependence",
    dsm5Disorder: "Opioid Use Disorder, Moderate or Severe",
    dsm5Category: "Substance-Related and Addictive Disorders",
    relationship: "approximate"
  },
  {
    icd9Code: "312.31",
    icd9Title: "Pathological gambling",
    dsm5Disorder: "Gambling Disorder",
    dsm5Category: "Substance-Related and Addictive Disorders",
    relationship: "exact",
    notes: "Moved from Impulse Control Disorders to Addictive Disorders in DSM-5"
  },

  // Personality Disorders
  {
    icd9Code: "301.83",
    icd9Title: "Borderline personality disorder",
    dsm5Disorder: "Borderline Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.7",
    icd9Title: "Antisocial personality disorder",
    dsm5Disorder: "Antisocial Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.82",
    icd9Title: "Avoidant personality disorder",
    dsm5Disorder: "Avoidant Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.6",
    icd9Title: "Dependent personality disorder",
    dsm5Disorder: "Dependent Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.81",
    icd9Title: "Narcissistic personality disorder",
    dsm5Disorder: "Narcissistic Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.0",
    icd9Title: "Paranoid personality disorder",
    dsm5Disorder: "Paranoid Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.20",
    icd9Title: "Schizoid personality disorder",
    dsm5Disorder: "Schizoid Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.22",
    icd9Title: "Schizotypal personality disorder",
    dsm5Disorder: "Schizotypal Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact"
  },
  {
    icd9Code: "301.4",
    icd9Title: "Obsessive-compulsive personality disorder",
    dsm5Disorder: "Obsessive-Compulsive Personality Disorder",
    dsm5Category: "Personality Disorders",
    relationship: "exact",
    notes: "Different from OCD (Obsessive-Compulsive Disorder)"
  }
];

// Helper function to get DSM-5 information from ICD-9 code
export function getDSM5FromICD9(icd9Code: string): ICD9ToDSM5CrossReference[] {
  return icd9ToDsm5Mapping.filter(mapping => mapping.icd9Code === icd9Code);
}

// Helper function to get ICD-9 codes from DSM-5 disorder name
export function getICD9FromDSM5(dsm5Disorder: string): ICD9ToDSM5CrossReference[] {
  return icd9ToDsm5Mapping.filter(mapping => 
    mapping.dsm5Disorder.toLowerCase().includes(dsm5Disorder.toLowerCase())
  );
}
