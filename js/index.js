console.clear();

const url = "https://swapi.dev/api/people";

// - log the entire data object
// async function fetchData() {
//   const response = await fetch(url);
//   const json = await response.json();
//   const data = json.results;

//   return data;
// }
// fetchData().then((value) => {
//   console.log(value);
// });

// - Bonus: Can you log the eye color of R2-D2?
async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();
  return json.results;
}
async function main() {
  const data = await fetchData();
  //console.log(data[2].eye_color);
  const result = data.filter((item) => {
    return item.name == "Darth Vader";
  });
  console.log(result);
}
