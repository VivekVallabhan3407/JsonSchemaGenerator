// utils/JsonToSchema.ts

export const convertJsonToSchema = (jsonInput: string) => {
  try {
    const json = JSON.parse(jsonInput);

    const generateSchema = (value: any): any => {
      if (Array.isArray(value)) {
        return {
          type: "array",
          items: value.length > 0 ? generateSchema(value[0]) : {},
        };
      }

      switch (typeof value) {
        case "string":
          return { type: "string" };
        case "number":
          return { type: "number" };
        case "boolean":
          return { type: "boolean" };
        case "object":
          if (value === null) return { type: "null" };

          let properties: any = {};
          for (const key in value) {
            properties[key] = generateSchema(value[key]);
          }

          return {
            type: "object",
            properties,
            required: Object.keys(value),
          };
        default:
          return { type: "string" };
      }
    };

    return JSON.stringify(generateSchema(json), null, 2);
  } catch (error) {
    return null; // return null when invalid
  }
};
