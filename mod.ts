// Array of numbers
type DataSet = Array<number>;

/** Sum of numbers */
function sum(numbers: DataSet): number {
  return numbers.reduce((sum: number, a) => sum + a, 0);
}

/** New set where each number is a[i] * b[i] */
function dot(a: DataSet, b: DataSet): DataSet {
  return a.map((_, i) => a[i] * b[i]);
}

/** Calculate Pearson Correlation Coefficient of two datasets
 * @param a List of numbers in first set
 * @param b List of numbers in second set
 * @returns The numerical coefficient in range -1.0 to 1.0
 */
export function correlation(a: DataSet, b: DataSet): number {
  // Confirm count if elements
  if (a.length < 2 || b.length < 2)
    throw new Error(`Datasets must have at least 1 element.`);

  // Confirm same length
  if (a.length != b.length)
    throw new Error(
      `Datasets must have same length, but have ${a.length} and ${b.length} elements.`
    );

  // Calculate coefficient
  const n: number = a.length;
  const x: number = sum(a);
  const y: number = sum(b);
  const xx: number = sum(dot(a, a));
  const yy: number = sum(dot(b, b));
  const xy: number = sum(dot(a, b));
  const coefficient: number =
    (n * xy - x * y) / Math.sqrt((n * xx - x * x) * (n * yy - y * y));
  return coefficient;
}
