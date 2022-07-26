import { useCallback } from 'react';
import { useState } from 'react';

export const useDrawer = () => {
  const [active, setActive] = useState(true);
  const handleOpenDrawer = useCallback(() => setActive(true), [setActive]);
  const handleCloseDrawer = useCallback(() => setActive(false), [setActive]);
  const handleToggleDrawer = useCallback(() => setActive((prev) => !prev), [setActive]);

  return {
    active,
    handleOpenDrawer,
    handleCloseDrawer,
    handleToggleDrawer,
  };
};
