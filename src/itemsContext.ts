import React from "react";

const ItemsContext = React.createContext({
  selectedItem: 0,
  setSelectedItem: (item: number): void => {}
});

export default ItemsContext;