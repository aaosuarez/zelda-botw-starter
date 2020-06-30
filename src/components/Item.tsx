import React from 'react';
import cn from 'classnames';
import ItemsContext from "../itemsContext";

const Item = ({itemIndex, name, value, icon}: {itemIndex: number, name: string, value: string, icon: string}) => {
  const {selectedItem, setSelectedItem} = React.useContext(ItemsContext);
  const handleClick = () => {
    setSelectedItem(itemIndex);
  }

  return (
    <div onClick={handleClick} className={cn({"shadow-yellow border-zelda-softYellow border-2": selectedItem === itemIndex},
      "w-20 h-20 bg-black border border-zelda-softYellow relative cursor-pointer")}>
      <img src={icon} alt={name} />
      <div className="-mx-1 -my-1 bg-black text-sm absolute right-0 bottom-0 text-white border border-zelda-darkGray px-2">{value}</div>
    </div>
  );
}

export default Item;