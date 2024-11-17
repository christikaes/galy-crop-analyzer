import { colornames } from "color-name-list";

export const getColor = (str: string) => {
  console.log({ colornames });
  const hash = Array.from(str).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  const index = hash % colornames.length;
  return colornames[index].hex;

  // // Generate a hash from the string
  // let hash = 0;
  // for (let i = 0; i < str.length; i++) {
  //   hash = str.charCodeAt(i) + ((hash << 5) - hash);
  // }

  // // Convert the hash to an HSL color
  // const hue = Math.abs(hash % 360); // Keep the hue between 0 and 360
  // const saturation = 70; // Make it visually appealing with 70% saturation
  // const lightness = 50; // Keep it in the middle for balanced brightness

  // return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
