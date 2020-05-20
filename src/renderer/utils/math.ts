export const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export const constrain = (n: number, low: number, high: number) => {
  return Math.max(Math.min(n, high), low);
};

export function dist(x1: number, y1: number, x2: number, y2: number): number;
export function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
export function dist(...args: number[]): number {
  if (args.length === 4) {
    // 2D
    return hypot(args[2] - args[0], args[3] - args[1]);
  } else if (args.length === 6) {
    // 3D
    return hypot(args[3] - args[0], args[4] - args[1], args[5] - args[2]);
  }

  throw new Error("Wrong arguments count");
}

export const lerp = (start: number, stop: number, amt: number): number => {
  return amt * (stop - start) + start;
};

export const map = (
  n: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number,
  withinBounds: boolean = false,
): number => {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
};

export function hypot(x: number, y: number, z?: number) {
  // Use the native implementation if it's available
  if (typeof Math.hypot === "function") {
    return Math.hypot.apply(null, (arguments as unknown) as number[]);
  }

  // Otherwise use the V8 implementation
  // https://github.com/v8/v8/blob/8cd3cf297287e581a49e487067f5cbd991b27123/src/js/math.js#L217
  const length = arguments.length;
  const args = [];
  let max = 0;
  for (let i = 0; i < length; i++) {
    let n = arguments[i];
    n = +n;
    if (n === Infinity || n === -Infinity) {
      return Infinity;
    }
    n = Math.abs(n);
    if (n > max) {
      max = n;
    }
    args[i] = n;
  }

  if (max === 0) {
    max = 1;
  }
  let sum = 0;
  let compensation = 0;
  for (let j = 0; j < length; j++) {
    const m = args[j] / max;
    const summand = m * m - compensation;
    const preliminary = sum + summand;
    compensation = preliminary - sum - summand;
    sum = preliminary;
  }
  return Math.sqrt(sum) * max;
}
