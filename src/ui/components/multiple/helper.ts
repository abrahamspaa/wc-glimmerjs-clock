export default function multiple(params) {
  return [...params].reduce((a, b) => Number(a) * Number(b));
}
