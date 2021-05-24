export default function add(params) {
  return [...params].reduce((a, b) => Number(a) + Number(b));
}
