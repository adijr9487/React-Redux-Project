const addItem = (item) => {
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

const completeItem = (id) => {
  return {
    type: "COMPLETE_ITEM",
    id,
  };
};

module.exports = { addItem, removeItem, completeItem };
