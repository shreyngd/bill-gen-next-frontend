const { atom } = require("recoil");

export const inventoryListState = atom({
  key: "inventoryListState",
  default: [],
});
