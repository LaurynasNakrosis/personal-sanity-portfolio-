"use client"
import createImageUrlBuilder from "@sanity/image-url"
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";


export default function AdminPage(){
    return <NextStudio config={config} />;
}
export const urlFor = (source: any) => 
createImageUrlBuilder(config).image(source);