export interface RichSegment {
  text: string;
  strong: boolean;
}

/** Turns "À **280 m** du Craves" into plain and bold segments, rendered as escaped text (no raw HTML). */
export function richText(input: string): RichSegment[] {
  return input
    .split('**')
    .map((text, i) => ({ text, strong: i % 2 === 1 }))
    .filter((segment) => segment.text.length > 0);
}
