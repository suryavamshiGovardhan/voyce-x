export interface Career {
  /** Unique kebab-case id */
  id: string;
  /** Career title */
  title: string;
  /** Industry group label */
  industry: string;
  /** One line describing what the person actually does */
  what: string;
  /** True for emerging / future-facing roles (AI, climate, biotech, robotics, space) */
  future?: boolean;
}
