export default function getAge(date) {
  return Math.round((Date.now() - new Date(date)) / 1000 / 60 / 60 / 24 / 30);
}
