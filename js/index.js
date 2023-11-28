console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData().then((value) => {
  console.log(value);
});
