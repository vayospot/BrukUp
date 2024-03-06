import randomValue from "../utils/randomValue";

// export default async function fetchUserData() {
//   try {
//     const response = await fetch(
//       "https://randomuser.me/api/?results=20&inc=name,gender,id,picture"
//     );
//     const jsonData = await response.json();
//     const userData = jsonData.results.map((item) => ({
//       id: item.id.value,
//       name: item.name.first,
//       image: item.picture.large,
//       height: randomValue([200, 230, 250]),
//       matchValue: randomValue(
//         Array.from(
//           { length: 10 },
//           () => `${Math.floor(Math.random() * 36 + 60)}%`
//         )
//       ),
//     }));
//     return userData;
//   } catch (error) {
//     alert("There was an error fetching the data. Sorry about that.");
//   }
// }

export default async function fetchUserData() {
  try {
    const response = await fetch(
      "https://api.unsplash.com/search/photos?per_page=10&orientation=portrait&query=random-people",
      {
        headers: {
          Authorization:
            "Client-ID y2XbgwZmnR9xlNqjQrnhZPyO7YHtBZMooY_E2I3UOhA",
        },
      }
    );
    const jsonData = await response.json();
    const userData = jsonData.results.map((item) => ({
      id: item.id,
      name: item.user.first_name,
      fullname: item.user.name,
      image: item.urls.small,
      height: randomValue([200, 230, 250]),
      matchValue: randomValue(
        Array.from(
          { length: 10 },
          () => `${Math.floor(Math.random() * 36 + 60)}%`
        )
      ),
    }));
    return userData;
    // console.log(JSON.stringify(userData, null, 2));
  } catch (error) {
    console.log(error);
  }
}
