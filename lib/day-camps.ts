export type DayCamp = {
  date: string;
  weekday: string;
  occasion: string;
};

export const dayCamps: DayCamp[] = [
  { date: "Aug 31, 2026", weekday: "Mon", occasion: "Before school starts" },
  { date: "Sep 1, 2026", weekday: "Tue", occasion: "Before school starts" },
  { date: "Sep 21, 2026", weekday: "Mon", occasion: "Yom Kippur - no school" },
  { date: "Oct 12, 2026", weekday: "Mon", occasion: "Indigenous Peoples' Day" },
  { date: "Nov 3, 2026", weekday: "Tue", occasion: "Newton Election Day" },
  { date: "Nov 11, 2026", weekday: "Wed", occasion: "Veterans Day" },
  { date: "Dec 28, 2026", weekday: "Mon", occasion: "December Recess" },
  { date: "Dec 29, 2026", weekday: "Tue", occasion: "December Recess" },
  { date: "Dec 30, 2026", weekday: "Wed", occasion: "December Recess" },
  { date: "Dec 31, 2026", weekday: "Thu", occasion: "December Recess" },
  { date: "Jan 4, 2027", weekday: "Mon", occasion: "Back-from-break day" },
  { date: "Jan 18, 2027", weekday: "Mon", occasion: "MLK Jr. Day" },
  {
    date: "Feb 15, 2027",
    weekday: "Mon",
    occasion: "Presidents' Day · Winter Recess",
  },
  { date: "Mar 26, 2027", weekday: "Fri", occasion: "Good Friday" },
  {
    date: "Apr 19, 2027",
    weekday: "Mon",
    occasion: "Patriots' Day · Spring Recess",
  },
];
