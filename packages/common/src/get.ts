/**
 * Get the value at the given path of an object.
 *
 * @param {Object} obj The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
 * @returns Returns the resolved value.
 */
export function get<T>(obj: unknown, path: string | string[], defaultValue?: T): T | undefined {
  // If obj is undefined or null, return the default value
  if (obj === undefined || obj === null || typeof obj !== 'object') {
    return defaultValue;
  }

  // Convert path to array if it's not
  const keys = Array.isArray(path)
    ? path.map(key => key.replace(/\[(\d+)\]/g, '$1')) // Convert indexes to properties
    : path.split(/\.|\[|\]./g).filter(Boolean);

  let res = obj;
  // Traverse the object
  for (const key of keys) {
    // If the result is an object and the key exists in the result
    if (typeof res === 'object' && key in res && Object(res)[key] !== undefined) {
      res = Object(res)[key];
    } else {
      return defaultValue;
    }
  }

  return res === undefined ? defaultValue : (res as T);
}
