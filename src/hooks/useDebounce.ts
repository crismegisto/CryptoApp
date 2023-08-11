import { useEffect, useState } from 'react';

const useDebounce = <T>(
  debouncedFunction: (value: T | null) => void,
  delay: number
): [(value: T) => void, boolean] => {
  const [functionValue, setFunctionValue] = useState<T | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    setIsWaiting(true);
    const handler = setTimeout(() => {
      debouncedFunction(functionValue);
      setIsWaiting(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedFunction, delay, functionValue]);

  return [
    (value: T) => {
      setFunctionValue(value);
    },
    isWaiting
  ];
};

export default useDebounce;
