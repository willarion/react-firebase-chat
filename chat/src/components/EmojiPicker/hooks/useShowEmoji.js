import { useCallback, useState } from "react";

export const useShowEmoji = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const toggleShowEmoji = useCallback(
    () => setShowEmoji(!showEmoji),
    [showEmoji]
  );

  return { toggleShowEmoji, showEmoji };
};
