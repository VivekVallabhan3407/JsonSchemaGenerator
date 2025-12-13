export const copyToClipboard = (
  text: string,
  label: string = "content"
) => {
  if (!text) return;

  navigator.clipboard.writeText(text);
  alert(`Copied ${label} to clipboard!`);
};
