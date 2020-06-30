import React from 'react';
import {ItemType} from "../data/items.type";
import Item from "./Item";

const ItemsGrid = ({items}: { items: ItemType[] }) => {
  return <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
    {items.map((item, i) => (
      <Item itemIndex={i} key={item.name} name={item.name} value={item.value} icon={item.icon}/>
    ))}
  </div>
}

export default ItemsGrid