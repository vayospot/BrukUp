export default function randomValue(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
