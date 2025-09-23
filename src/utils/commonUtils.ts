// A custom throttle function that throttles frequent calls
// to a function but also keeps track of the last call that
// was made when inThrottle state was true, so that it can call
// that last call to the function.

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function customThrottle<T extends (...args: any) => void>(
  fn: T,
  time: number,
) {
  let inThrottle = false;
  let timer: NodeJS.Timeout | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: Parameters<T>) {
    if (inThrottle) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.call(this, ...args);
      }, 100);
      return;
    }

    inThrottle = true;
    fn.call(this, ...args);
    setTimeout(() => {
      inThrottle = false;
    }, time);
  };
}
