// Home page design tokens. Scoped to the home page only; the rest of the site
// keeps the global theme in app/globals.css.
//
// Palette: royal blue #1A43BF (brand), ink #0F172A, slate base #F8FAFC,
// coral #E86A3E as the single accent (highlights only, never body text).
// Shape: cards 16px, buttons and chips full pill.

export const btnPrimary =
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1A43BF] px-6 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-[#15369A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A43BF]";

export const btnOutline =
  "inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#0F172A]/15 bg-white px-6 text-[15px] font-semibold text-[#0F172A] transition-[border-color,transform] duration-200 hover:border-[#0F172A]/40 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A43BF]";

export const sectionTitle =
  "text-3xl font-extrabold tracking-[-0.03em] text-balance text-[#0F172A] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]";

export const dotGrid =
  "bg-[radial-gradient(#1A43BF2e_1px,transparent_1px)] [background-size:22px_22px]";
