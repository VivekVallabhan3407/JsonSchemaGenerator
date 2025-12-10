// utils/jsonToTs.ts

export const convertJsonToTs = (jsonInput: string) => {
  try {
    const json = JSON.parse(jsonInput);

    const generateTS = (value: any): string => {
      if (Array.isArray(value)) {
        if (value.length === 0) return "any[]";
        return `${generateTS(value[0])}[]`;
      }

      switch (typeof value) {
        case "string":
          return "string";
        case "number":
          return "number";
        case "boolean":
          return "boolean";
        case "object":
          if (value === null) return "null";

          let fields = "";
          for (const key in value) {
            fields += `  ${key}: ${generateTS(value[key])};\n`;
          }
          return `{\n${fields}}`;
        default:
          return "any";
      }
    };

    return `interface RootObject ${generateTS(json)}`;
  } catch {
    return null;
  }
};
