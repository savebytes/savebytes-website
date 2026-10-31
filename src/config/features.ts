/** Feature flags. Flip a flag and the route registry shows/hides the matching page, nav link and sitemap entry. */
export const features = {
  blog: false,
  pricing: false,
  careers: false,
} as const;

export type FeatureFlag = keyof typeof features;
