export default async function fetchUserData() {
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=12&inc=name,gender,id,picture"
    );
    const jsonData = await response.json();
    const userData = jsonData.results.map((item) => ({
      id: item.id.value,
      title: item.name.first,
      image: item.picture.large,
      height: getRandomHeight(),
    }));
    return userData;
  } catch (error) {
    alert("There was an error fetching the data. Sorry about that.");
  }
}

function getRandomHeight() {
  const heights = [200, 230, 250];
  const randomIndex = Math.floor(Math.random() * heights.length);
  return heights[randomIndex];
}
