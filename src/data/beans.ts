export interface BeanPosition {
  x: number; // percentage or px
  y: number;
  size: number;
  rotate: number;
  opacity?: number;
}

// 26 deterministic beans around the Feature Spotlight cup (~520px stage)
export const spotlightBeans: BeanPosition[] = [
  // Dense cluster on left
  { x: 12, y: 195, size: 22, rotate: -42, opacity: 0.95 },
  { x: 18, y: 235, size: 28, rotate: 18, opacity: 1 },
  { x: 8, y: 280, size: 20, rotate: 65, opacity: 0.9 },
  { x: 26, y: 315, size: 26, rotate: -25, opacity: 0.95 },
  { x: 42, y: 375, size: 24, rotate: 45, opacity: 1 },
  { x: 70, y: 410, size: 22, rotate: -15, opacity: 0.9 },
  { x: 32, y: 260, size: 16, rotate: 80, opacity: 0.85 },
  { x: 48, y: 210, size: 18, rotate: -60, opacity: 0.85 },

  // Bottom cluster
  { x: 115, y: 440, size: 26, rotate: 30, opacity: 1 },
  { x: 160, y: 465, size: 24, rotate: -50, opacity: 0.95 },
  { x: 215, y: 475, size: 28, rotate: 15, opacity: 1 },
  { x: 275, y: 460, size: 22, rotate: 72, opacity: 0.9 },
  { x: 330, y: 435, size: 26, rotate: -35, opacity: 0.95 },
  { x: 380, y: 395, size: 24, rotate: 40, opacity: 0.9 },
  { x: 240, y: 440, size: 16, rotate: -20, opacity: 0.85 },

  // Right side scattered
  { x: 420, y: 345, size: 20, rotate: 55, opacity: 0.9 },
  { x: 435, y: 280, size: 26, rotate: -12, opacity: 0.95 },
  { x: 425, y: 215, size: 18, rotate: 68, opacity: 0.85 },

  // Top and upper-right trail
  { x: 375, y: 95, size: 22, rotate: 25, opacity: 0.9 },
  { x: 320, y: 55, size: 26, rotate: -48, opacity: 0.95 },
  { x: 260, y: 40, size: 20, rotate: 10, opacity: 0.85 },
  { x: 195, y: 58, size: 24, rotate: -65, opacity: 0.9 },
  { x: 135, y: 90, size: 18, rotate: 35, opacity: 0.85 },

  // Outliers (drifting upper-right and far left)
  { x: 465, y: 150, size: 24, rotate: -30, opacity: 0.9 },
  { x: 450, y: 80, size: 16, rotate: 45, opacity: 0.8 },
  { x: 5, y: 340, size: 18, rotate: -15, opacity: 0.8 },
];

// ~10 beans scattered around the seam of the phones in AppSection
export const phoneSeamBeans: BeanPosition[] = [
  { x: -18, y: 10, size: 16, rotate: 25, opacity: 0.9 },
  { x: 58, y: -16, size: 14, rotate: -40, opacity: 0.85 },
  { x: 68, y: 18, size: 18, rotate: 55, opacity: 0.95 },
  { x: -22, y: 44, size: 17, rotate: -60, opacity: 0.9 },
  { x: 50, y: 56, size: 15, rotate: 15, opacity: 0.85 },
  { x: 12, y: -24, size: 14, rotate: 75, opacity: 0.8 },
  { x: -10, y: -12, size: 13, rotate: -15, opacity: 0.8 },
  { x: 34, y: 64, size: 18, rotate: 30, opacity: 0.9 },
  { x: -32, y: 28, size: 12, rotate: 45, opacity: 0.75 },
  { x: 74, y: 42, size: 13, rotate: -70, opacity: 0.8 },
];

// ~30 beans at footer bottom-left spilling outside the shell edge
export const footerBeans: BeanPosition[] = [
  { x: -35, y: 20, size: 20, rotate: 32, opacity: 0.95 },
  { x: -18, y: 38, size: 24, rotate: -45, opacity: 0.9 },
  { x: 10, y: 15, size: 22, rotate: 15, opacity: 0.95 },
  { x: -42, y: 65, size: 18, rotate: 75, opacity: 0.85 },
  { x: -25, y: 82, size: 26, rotate: -20, opacity: 1 },
  { x: 4, y: 55, size: 24, rotate: 50, opacity: 0.95 },
  { x: 30, y: 35, size: 19, rotate: -35, opacity: 0.9 },
  { x: -55, y: 105, size: 22, rotate: 10, opacity: 0.9 },
  { x: -38, y: 125, size: 25, rotate: -65, opacity: 0.95 },
  { x: -8, y: 100, size: 20, rotate: 40, opacity: 0.85 },
  { x: 22, y: 80, size: 23, rotate: -15, opacity: 0.9 },
  { x: 48, y: 60, size: 16, rotate: 60, opacity: 0.85 },
  { x: -48, y: 155, size: 24, rotate: -30, opacity: 0.95 },
  { x: -22, y: 165, size: 20, rotate: 25, opacity: 0.9 },
  { x: 5, y: 140, size: 26, rotate: -55, opacity: 1 },
  { x: 35, y: 115, size: 18, rotate: 35, opacity: 0.85 },
  { x: 62, y: 95, size: 21, rotate: -40, opacity: 0.9 },
  { x: -32, y: 200, size: 22, rotate: 65, opacity: 0.9 },
  { x: -5, y: 185, size: 25, rotate: -15, opacity: 0.95 },
  { x: 20, y: 170, size: 19, rotate: 45, opacity: 0.85 },
  { x: 50, y: 145, size: 23, rotate: -25, opacity: 0.9 },
  { x: 78, y: 125, size: 17, rotate: 70, opacity: 0.85 },
  { x: 12, y: 220, size: 20, rotate: -50, opacity: 0.85 },
  { x: 42, y: 195, size: 24, rotate: 20, opacity: 0.9 },
  { x: 68, y: 175, size: 18, rotate: -60, opacity: 0.85 },
  { x: 92, y: 155, size: 22, rotate: 15, opacity: 0.8 },
  { x: 35, y: 235, size: 19, rotate: 55, opacity: 0.85 },
  { x: 60, y: 215, size: 21, rotate: -35, opacity: 0.85 },
  { x: 85, y: 195, size: 16, rotate: 30, opacity: 0.8 },
  { x: -15, y: 225, size: 17, rotate: -20, opacity: 0.8 },
];
