import React, { useState, useCallback } from 'react';

const useToggle = (initialState = false) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = useCallback(() => {
    setIsToggled((prevState) => !prevState);
  }, []);

  return [isToggled, toggle];
};

export default useToggle;
