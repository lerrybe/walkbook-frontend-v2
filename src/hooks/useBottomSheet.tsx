import { useCallback } from 'react';
import { useState } from 'react';

export const useBottomSheet = () => {
  const [active, setActive] = useState(true);
  const handleOpenBottomSheet = useCallback(() => setActive(true), [setActive]);
  const handleCloseBottomSheet = useCallback(() => setActive(false), [setActive]);
  const handleToggleBottomSheet = useCallback(() => setActive((prev) => !prev), [setActive]);

  return {
    active,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleToggleBottomSheet,
  };
};
