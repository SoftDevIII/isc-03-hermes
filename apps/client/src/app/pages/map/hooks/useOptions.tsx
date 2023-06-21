import { useEffect, useState } from 'react';

function useOptions({ json }: UseOptionsProps) {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    setOptions(json.options || []);
  }, [json]);

  return options;
}

export default useOptions;
