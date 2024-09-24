export default function randomValue(arg) {
  if (Array.isArray(arg)) {
    return arg[Math.floor(Math.random() * arg.length)];
  } else if (typeof arg === "object" && !Array.isArray(arg)) {
    const { min, max } = arg;
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  } else {
    throw new Error(
      "Invalid argument type. Expecting either an array or object with prop min and max values.",
    );
  }
}
