import { useState } from 'react';
import fetchOptions from '../services/OptionsService';

function useOptions({ url }: UseOptionsProps) {
  const [options, setOptions] = useState<Option[]>([]);

  fetchOptions({ url })
    .then(res => setOptions(res))
    .catch((err: Error) => {
      throw new Error(err.message);
    });

  return options;
}

export default useOptions;
