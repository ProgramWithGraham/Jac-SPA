// import React from "react";

// function FindByDateButton({ findByDateButton }) {
//   const fetchDate = () => {
//     fetch("http://localhost:8080/api/nasa/")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setFavorites(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem fetching favorite facts:", error);
//       });
//   };

//   return <button onClick={fetchFavorites}>Show favorite facts</button>;
// }

// export default FavoritesButton;
