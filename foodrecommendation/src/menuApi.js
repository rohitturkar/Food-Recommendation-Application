
export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/products") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              Menu: [
                {
                  id: 1,
                  image: "images/maggi.jpg",
                  name: "maggi",
                  category: "breakfast",
                  price: "12₹",
                  description:
                    "Maggi is made by a process similar to soy sauce, except with fermented wheat protein, so it has a deep, rich, and salty savoriness that cannot come from regular old salt and pepper. The best way to describe its actual flavor is “roasty.” It tastes like cooked … something",
                },
              
                {
                  id: 2,
                  image: "images/allupakoida.jpg",
                  name: "allu pakoida",
                  category: "evening",
                  price: "20₹",
                  description:
                    "Pakoras are made by coating ingredients, usually vegetables, in a spiced batter, then deep frying them. Common varieties of pakora use onion, chicken, arbi root and leaves, eggplant, potato, chili pepper, spinach, paneer, cauliflower, mint, plantain or baby corn",
                },
                {
                  id: 3,
                  image: "images/corn.jpg",
                  name: "corn",
                  category: "breakfast",
                  price: "10₹",
                  description:
                    "Sweetcorn is a long rounded vegetable covered in small yellow seeds. It is part of the maize plant. The seeds themselves can also be referred to as sweetcorn.",
                },
                {
                  id: 4,
                  image: "../images/chola.jpg",
                  name: "chola",
                  category: "lunch",
                  price: "50₹",
                  description:
                    "Chole” is a Punjabi word for “chickpeas” and “masala” is a word for “spices”. So this dish is nothing but chickpeas cooked to perfection with various spices, onions, tomatoes and herbs. Chickpea is a legume that is relished all over India.",
                },
                {
                  id: 5,
                  image: "../images/pizza.jpg",
                  name: "pizza",
                  category: "evening",
                  price: "80₹",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
                },
                {
                  id: 6,
                  image: "../images/nonvegthali.jpg",
                  name: "Non-Veg Thali",
                  category: "dinner",
                  price: "180₹",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
                },
                {
                  id: 7,
                  image: "../images/sweet.jpg",
                  name: "Sweets",
                  category: "dinner",
                  price: "60₹",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
                },
                {
                  id: 8,
                  image: "../images/rajmarice.jpg",
                  name: "Rajma Rice",
                  category: "lunch",
                  price: "60₹",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
                },
                {
                  id: 9,
                  image: "../images/samosa.jpg",
                  name: "samaso",
                  category: "evening",
                  price: "10₹",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
                },
              ]
            }
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 0);
    });
  };