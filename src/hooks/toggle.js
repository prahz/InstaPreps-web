import { useCallback, useState } from 'react';

const useToggle = ({ initialOpen }) => {
  const [open, setOppen] = useState(initialOpen);

  const toggle = useCallback(() => {
    setOppen((prevValue) => !prevValue);
  }, []);

  return {
    open,
    toggle
  };
};

export default useToggle;
