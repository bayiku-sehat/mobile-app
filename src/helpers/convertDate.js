export default function convertDate(date) {
  console.log({date});
  date = date.split('T')[0];
  let year = date.split('-')[0];
  let month = date.split('-')[1];
  let day = date.split('-')[2];

  return `${day} - ${month} - ${year}`;
}
