import { renderHook, act } from '@testing-library/react-native';

import useDebounce from '../../src/hooks/useDebounce';

describe('useDebounce', () => {
  jest.useFakeTimers();

  it('should debounce the function call', () => {
    const debouncedFunction = jest.fn();
    const { result } = renderHook(() => useDebounce(debouncedFunction, 500));

    act(() => {
      result.current[0]('test');
    });

    expect(debouncedFunction).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(debouncedFunction).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(debouncedFunction).toHaveBeenCalledWith('test');
    expect(result.current[1]).toBe(false);
  });

  it('should set isWaiting to true during the debounce delay', () => {
    const debouncedFunction = jest.fn();
    const { result } = renderHook(() => useDebounce(debouncedFunction, 500));

    act(() => {
      result.current[0]('test');
    });

    expect(result.current[1]).toBe(true);

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current[1]).toBe(false);
  });
});
