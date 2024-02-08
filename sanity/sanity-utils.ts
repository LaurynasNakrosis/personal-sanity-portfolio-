import { Project } from "@/types/Project";

import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Social } from "@/types/Social";
import { PageInfo } from "@/types/PageInfo";

export async function getProjects(): Promise<Project[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            summary,
            url,
        }`
    )
}
export async function getSocials(): Promise<Social[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == "social"]{
            _id,
            title,
            slug,
            url,
        }`
    )
}
export async function getPageInfo(): Promise<PageInfo[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == 'pageInfo']{
            _id,
            _createdAt,
            _Type,
            name,
            slug,
            profession,
            url,
            backgroundInformation,
            profilePicture
        }`
    )
}
