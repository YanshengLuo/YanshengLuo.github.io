// Text helpers for data strings that mark species names with *asterisks*.

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Escape HTML, then turn *word* into <em>word</em>. Safe for set:html. */
export function emphasize(text: string): string {
  return escapeHtml(text).replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

/** Remove emphasis markers, for attributes and metadata. */
export function plain(text: string): string {
  return text.replace(/\*([^*]+)\*/g, "$1");
}
