const listSchema = {
  $id: "http://example.com/shemas/list.json",
  tye: "object",
  required: ["name"],
  properties: {
    name: {
      type: "string",
    },
    description: {
      type: "string",
    },
    toDoListItems: {
      type: "array",
      items: {
        tye: "object",
        required: ["name", "complete"],
        properties: {
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          listId: {
            type: "number",
          },
          priority: {
            type: "number",
          },
          complete: {
            type: "boolean",
          },
        },
      },
    },
  },
};

const itemSchema = listSchema.properties.toDoListItems;

module.exports = {
  listSchema,
  itemSchema,
};
