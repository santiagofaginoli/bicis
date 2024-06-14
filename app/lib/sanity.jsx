import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "r92e1yfz",
  dataset: "sanity", // Nombre del dataset.
  apiVersion: "2022-03-07", // versión de la API.
  useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
  return imgBuilder.image(source);
}
