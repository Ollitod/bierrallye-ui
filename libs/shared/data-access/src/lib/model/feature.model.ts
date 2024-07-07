export const features = [
  'REGISTRATION',
  'LIVE_TRACKING',
  'EVALUATION',
] as const;

export type Feature = (typeof features)[number];
