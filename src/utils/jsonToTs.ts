// utils/jsonToTs.ts

export const convertJsonToTs = (json: any): string => {

  const generateTS = (value: any): string => {
    if (Array.isArray(value)) {
      if (value.length === 0) return "any[]";
      return `${generateTS(value[0])}[]`;
    }

    if (value === null) return "null";


    switch (typeof value) {
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "object":

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
};
