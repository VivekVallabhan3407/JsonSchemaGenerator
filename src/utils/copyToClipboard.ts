import { toast } from 'react-toastify';

export const copyToClipboard = (
  text: string,
  label: string = "content"
) => {
  if (!text) {
    toast.error('Nothing to copy!');
    return;

  }

  navigator.clipboard.writeText(text);
  toast.success(`Copied ${label} to clipboard!`);
};
