import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[collectionUrlParam]
  );

//  converts object to array, since we updated our SHOP_DATA
export const selectCollectionForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
