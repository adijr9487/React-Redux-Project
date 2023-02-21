const addItem = (item) => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    item,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    id,
  };
};

module.exports = { addItem, removeItem };
