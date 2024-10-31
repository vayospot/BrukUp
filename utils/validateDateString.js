/**
 * Validate a date string and return an object with the following properties:
 * - isValid: a boolean indicating whether the date string is valid.
 * - date: a Date object representing the parsed date.
 * - age: the age of the person in years, only present if options.isDateOfBirth is true.
 *
 * @param {string} dateString - the date string to validate.
 * @param {Object} [options={}] - an object with the following properties:
 *   - isDateOfBirth: whether to validate as a date of birth.
 *   - minimumAge: the minimum age, only calculated if set and options.isDateOfBirth is true.
 * @returns {object} an object with the above properties.
 */
export default function validateDateString(
  dateString,
  { isDateOfBirth = false, minimumAge = null } = {},
) {
  /**
   * The date format to validate against.
   * Supports YYYY-MM-DD or YYYY/MM/DD.
   */
  const DATE_FORMAT =
    /^(\d{4})[-/](0[1-9]|1[0-2])[-/](0[1-9]|1[0-9]|2[0-9]|3[0-1])$/;

  if (!DATE_FORMAT.test(dateString)) {
    throw new Error("Please enter a correct date (YYYY-MM-DD)");
  }

  /**
   * Standardize the date string by replacing all "/" with "-",
   * so that the date can be parsed consistently.
   */
  const standardizedDateString = dateString.replace(/\//g, "-");

  const parsedDate = new Date(standardizedDateString);

  if (isNaN(parsedDate)) {
    throw new Error("Please enter a correct date.");
  }

  if (isDateOfBirth) {
    /**
     * Calculate the age of the person based on the date of birth.
     * Takes into account the current year, month and day.
     */
    const today = new Date();
    let age = today.getFullYear() - parsedDate.getFullYear();
    const monthDiff = today.getMonth() - parsedDate.getMonth();
    const dayDiff = today.getDate() - parsedDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    if (minimumAge && age < minimumAge) {
      throw new Error(`You must be at least ${minimumAge} years old.`);
    }

    return { isValid: true, date: parsedDate, age };
  }

  return { isValid: true, date: parsedDate };
}
