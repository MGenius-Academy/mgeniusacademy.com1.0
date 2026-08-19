export const newsSlugs = [
  "mga-summer-camp-ai-humanoid-robot-camp",
  "mga-students-shine-at-math-kangaroo-2026",
  "when-mga-robots-arrived-at-one-of-the-worlds-most-loved-childrens-museums",
  "ep2-classroom-building-a-rainforest-one-layer-at-a-time",
] as const;

export type NewsSlug = (typeof newsSlugs)[number];
