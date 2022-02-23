import CollectionPreview from "../CollectionPreview/CollectionPreview";
import SHOP_DATA from "./Shop.data.ts";

const ShopPage = () => {
  const shopData = SHOP_DATA;

  return (
    <div className="shop-page">
      {shopData.map(({ id, title, items }) => (
        <CollectionPreview key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default ShopPage;
