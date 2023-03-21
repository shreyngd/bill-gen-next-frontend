const { atom } = require("recoil");

export const inventoryListState = atom({
  key: "inventoryListState",
  default: [],
});

export const businessListState = atom({
  key: "businessListState",
  default: [],
});
