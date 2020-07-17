const size = {
  sm: 48, // tablet 768px
  md: 64, // laptop 1024px
  md2: 80, // laptop2 1200px
  lg: 105.063, // computer 1536px
  xl: 120 // large screen 1920px
};

// 1536

export const responsive = {
  sm: `(max-width: ${size.sm}rem)`,
  md: `(max-width: ${size.md}rem)`,
  md2: `(max-width: ${size.md2}rem)`,
  lg: `(max-width: ${size.lg}rem)`,
  xl: `(max-width: ${size.xl}rem)`
};
