export const addFeature = (item) => {
  console.log("add feature", item);
  return { type: "ADD_FEATURE", payload: item };
};

export const removeFeature = (item) => {
  console.log("remove feature", item);
  return { type: "REMOVE_FEATURE", payload: item };
};
