import { useMemo, useState } from 'react';

function useBoundsProvider() {
  const [isOutBounds, setIsOutBounds] = useState(false);

  const boundsProviderValue = useMemo(
    () => ({ isOutBounds, setIsOutBounds }),
    [isOutBounds]
  );

  return boundsProviderValue;
}

export default useBoundsProvider;
