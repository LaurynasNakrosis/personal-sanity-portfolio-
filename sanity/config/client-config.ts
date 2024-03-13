import createImageUrlBuilder from "@sanity/image-url"

const config = {
    projectId: "w186ajj8",
    dataset: "production",
    apiVersion: "2024-03-27",
    //useCdn: true,
}
export default config;

export const urlFor = (source: any) => 
createImageUrlBuilder(config).image(source);