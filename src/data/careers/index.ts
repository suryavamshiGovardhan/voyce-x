import type { Career } from "./types";
import { creativeMediaCareers } from "./creative-media";
import { scienceEnvironmentCareers } from "./science-environment";
import { technologyCareers } from "./technology";
import { healthWellbeingCareers } from "./health-wellbeing";
import { businessSocietyCareers } from "./business-society";
import { craftFoodTradesCareers } from "./craft-food-trades";
import { sportTravelOutdoorsCareers } from "./sport-travel-outdoors";
import { cultureEducationCareers } from "./culture-education";

export type { Career };

export const careerGroups = [
  { key: "creative", label: "Creative & Media", careers: creativeMediaCareers },
  { key: "science", label: "Science & Environment", careers: scienceEnvironmentCareers },
  { key: "technology", label: "Technology & Engineering", careers: technologyCareers },
  { key: "health", label: "Health & Wellbeing", careers: healthWellbeingCareers },
  { key: "business", label: "Business & Society", careers: businessSocietyCareers },
  { key: "craft", label: "Craft, Food & Trades", careers: craftFoodTradesCareers },
  { key: "sport", label: "Sport, Travel & Outdoors", careers: sportTravelOutdoorsCareers },
  { key: "culture", label: "Culture & Education", careers: cultureEducationCareers },
] as const;

export const allCareers: Career[] = careerGroups.flatMap((g) => g.careers);

export const industries: string[] = Array.from(
  new Set(allCareers.map((c) => c.industry)),
).sort();
