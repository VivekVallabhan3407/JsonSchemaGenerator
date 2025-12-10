export const validateJson = (str: string) => {
  try {
    const parsed = JSON.parse(str);
    return { valid: true, parsedJson: parsed };
  } catch (error: any) {
    return { valid: false, error: error.message };
  }
};
