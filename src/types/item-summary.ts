import _ from "lodash";

interface ItemSummary {
  imageUrl: string;
  name: string;
}

export function createDummyRoughSummary(): ItemSummary {

  const imageTypes = ['nature', 'water', 'toy', 'book', 'sun', 'snow', 'tree', 'forest', 'coffee', 'house', 'lake'];

  return {
    imageUrl: 'https://source.unsplash.com/400x300/?' + _.shuffle(imageTypes)[0],
    name: "Something special♡",
  };
}

export default ItemSummary;