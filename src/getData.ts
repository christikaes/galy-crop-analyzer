export type Crop = {
  id: string;
  name: string;
  technicalScore: number;
  marketScore: number;
  esgScore: number;
  regulatoryScore: number;
};

const crops = [
  "Hemp",
  "Poppy",
  "Sesame",
  "Sunflower",
  "Chia Seed",
  "Flaxseed",
  "Peas",
  "Beans",
  "Lentils",
  "Chickpeas",
  "Amaranth",
  "Quinoa",
  "Black Pepper",
  "Cardamom",
  "Clove",
  "Cinnamon",
  "Nutmeg",
  "Vanilla",
  "Pistachios",
  "Cashews",
  "Walnuts",
  "Almonds",
  "Peanuts",
  "Turmeric",
  "Ginger",
  "Garlic",
  "Onion",
  "Radish",
  "Carrot",
  "Cabbage",
  "Cauliflower",
  "Broccoli",
  "Kale",
  "Spinach",
  "Lettuce",
  "Eggplant",
  "Pepper",
  "Cucumber",
  "Tomato",
  "Sugar Beet",
  "Sugarcane",
  "Cassava",
  "Sweet Potato",
  "Potato",
  "Millet",
  "Sorghum",
  "Oats",
  "Barley",
  "Bananas",
  "Maize",
  "Wheat",
  "Rice",
  "Soybeans",
  "Soybean oil",
  "Palm kernel oil",
  "Palm oil",
  "Groundnut oil",
  "Groundnuts",
  "Coconut oil",
  "Tea",
  "Coffee (Robusta)",
  "Coffee (Arabica)",
  "Cocoa",
  "Cotton",
];

export const getData = async () => {
  return Promise.resolve(
    crops.map((crop) => ({
      id: crop,
      name: crop,
      technicalScore: Math.floor(Math.random() * 100),
      marketScore: Math.floor(Math.random() * 100),
      esgScore: Math.floor(Math.random() * 100),
      regulatoryScore: Math.floor(Math.random() * 100),
    }))
  );
};
