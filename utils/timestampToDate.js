/**
 * Converts a timestamp object or a numeric timestamp (e.g. Date.now()) to a JavaScript Date object.
 *
 * @param {Object|number} timestamp - The timestamp object with seconds and nanoseconds, or a numeric timestamp.
 * @param {number} timestamp.seconds - The number of seconds since the Unix epoch.
 * @param {number} timestamp.nanoseconds - The number of nanoseconds after the seconds.
 * @returns {Date} - A JavaScript Date object representing the timestamp.
 * @throws {Error} - Throws an error if the timestamp object is invalid.
 */
export default function timestampToDate(timestamp) {
  if (typeof timestamp === "number") {
    return new Date(timestamp);
  }

  // Validate the types of the input parameters
  if (
    typeof timestamp.seconds !== "number" ||
    typeof timestamp.nanoseconds !== "number"
  ) {
    throw new Error("Invalid timestamp object");
  }

  // Convert the timestamp to milliseconds and create a Date object
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
}
