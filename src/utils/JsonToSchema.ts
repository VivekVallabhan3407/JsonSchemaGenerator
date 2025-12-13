// utils/JsonToSchema.ts

export const convertJsonToSchema = (json: any): any => {
    const generateSchema = (value: any): any => {
      if (Array.isArray(value)) {
        return {
          type: "array",
          items: value.length > 0 ? generateSchema(value[0]) : {},
        };
      }

      if (value === null) {
        return { type: "null" };
      }

      switch (typeof value) {
        case "string":
          return { type: "string" };
        case "number":
          return { type: "number" };
        case "boolean":
          return { type: "boolean" };
        case "object":
          const properties:Record<string,any>={};
          const required:string[]=[];
          
          for (const key in value) {
            properties[key] = generateSchema(value[key]);
            required.push(key);
          }

          return {
            type: "object",
            properties,
            required,
          };
        default:
          return { type: "string" };
      }
    };

    return generateSchema(json);
};
