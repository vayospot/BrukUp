import randomValue from "../utils/randomValue";

export default async function fetchUserData() {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
    const response = await fetch(
      `${API_URL}/search/photos?per_page=20&orientation=portrait&query=young+woman`,
      {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );
    console.log(
      `Remaining Requests: ${response.headers.get(
        "X-Ratelimit-Remaining"
      )}/${response.headers.get("X-Ratelimit-Limit")}`
    );
    const jsonData = await response.json();
    const userData = jsonData.results.map((item) => ({
      id: item.id,
      name: item.user.first_name.split(" ")[0],
      fullName: item.user.name,
      image: item.urls.small,
      imageHigh: item.urls.regular,
      location: item.user.location,
      age: randomValue({ min: 22, max: 34 }),
      height: randomValue([200, 230, 250]),
      matchValue: randomValue({ min: 60, max: 95 }),
    }));
    return userData;
  } catch (error) {
    throw error;
  }
}
