/**
 * Check if the given data is empty.
 *
 * @param data The data to check.
 * @returns `true` if the data is empty, `false` otherwise.
 */
export function isEmpty(data: unknown): data is null | undefined {
  return data === null || typeof data === 'undefined';
}

/**
 * Check if the given data is an object.
 *
 * @param data The data to check.
 * @returns `true` if the data is an object, `false` otherwise.
 */
export function isObject(data: unknown): data is object {
  return !!data && typeof data === 'object';
}

/**
 * Check if the given data is empty or blank.
 *
 * @param data The data to check.
 * @returns `true` if the data is empty or blank, `false` otherwise.
 */
export function isBlank(data: unknown) {
  return (
    isEmpty(data) ||
    (Array.isArray(data) && data.length === 0) ||
    (isObject(data) && Object.keys(data).length === 0) ||
    (typeof data === 'string' && data.trim().length === 0)
  );
}
