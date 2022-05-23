import React, { useState, useEffect } from "react";

const ChecklistItem = ({checked, setActiveItemsCount }) => {
  const [isActive, setIsActive] = useState(checked);

  const changeHandler = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (!isActive) {
      setActiveItemsCount((prevCount) => {
        if (prevCount !== 0) {
          return prevCount - 1;
        }
        return prevCount;
      });
    }

    if (isActive) {
      setActiveItemsCount((prevCount) => prevCount + 1 );
    }
  }, [isActive, setActiveItemsCount]);

  return <input type="checkbox" checked={isActive} onChange={changeHandler} />;

};

export default ChecklistItem;