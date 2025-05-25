import createImageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "w186ajj8",
  dataset: "production",
<<<<<<< HEAD
  apiVersion: "2024-04-03",
=======
  apiVersion: "2024-04-02",
>>>>>>> 5c4161509a65818ca85f0afbba35ca8733089033
  useCdn: false,
};
export default config;

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
