import React from "react";
import ItemsGrid from './components/ItemsGrid';
import items from './data/items';
import ItemsContext from './itemsContext';
import {goDown, goLeft, goRight, goUp, indexToPosition} from './utils/keyboardNavigation';


function App() {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const inventoryRef = React.useRef<HTMLDivElement>(null);

  const contextState = {
    selectedItem,
    setSelectedItem
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    let newItemIndex = null;
    const matrixPosition = indexToPosition(selectedItem)

    if (e.key === "ArrowUp") {
      newItemIndex = goUp(matrixPosition);
    } else if (e.key === "ArrowDown") {
      newItemIndex = goDown(matrixPosition);
    } else if (e.key === "ArrowLeft") {
      newItemIndex = goLeft(matrixPosition);
    } else if (e.key === "ArrowRight") {
      newItemIndex = goRight(matrixPosition);
    }

    if (newItemIndex != null) {
      setSelectedItem(newItemIndex);
    }
  }

  React.useEffect(() => {
    inventoryRef.current?.focus();
  }, [])

  return (
    <div className="container mx-auto flex flex-col xl:flex-row bg-zelda-darkGreen" onKeyDown={handleKeyPress}
         tabIndex={0} ref={inventoryRef}>
      <div className="w-full xl:w-1/2">
        <ItemsContext.Provider value={contextState}>
          <ItemsGrid items={items.weapons}/>
        </ItemsContext.Provider>
      </div>
      <div className="w-full xl:w-1/2"/>
    </div>
  );
}

export default App;
