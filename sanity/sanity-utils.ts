import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

import { Project } from "@/types/Project";
import { Social } from "@/types/Social";
import { PageInfo } from "@/types/PageInfo";
import { Experience } from "@/types/Experience";
import { Skill } from "@/types/Skill";

// Defining an asynchronous function named getProjects which returns a Promise of an array of Project objects
export async function getProjects(): Promise<Project[]>{
    // Creating a Sanity client using clientConfig and fetching data based on the specified GROQ query
    return createClient(clientConfig).fetch(
        // GROQ query to fetch projects data
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            image,
            summary,
            url,
            technologies[]->
        }`,
        {},
        { next: { revalidate: 60 } }
    )
}

// Defining an asynchronous function named getSocials which returns a Promise of an array of Social objects
export async function getSocials(): Promise<Social[]>{
    // Creating a Sanity client using clientConfig and fetching data based on the specified GROQ query
    return createClient(clientConfig).fetch(
        // GROQ query to fetch socials data
        groq`*[_type == "social"]{
            _id,
            title,
            slug,
            url,
        }`,
        {},
        { next: { revalidate: 60 } }
    )
}

// Defining an asynchronous function named getPageInfo which returns a Promise of an array of PageInfo objects
export async function getPageInfo(): Promise<PageInfo[]>{
    // Creating a Sanity client using clientConfig and fetching data based on the specified GROQ query
    return createClient(clientConfig).fetch(
        // GROQ query to fetch pageInfo data
        groq`*[_type == 'pageInfo']{
            ...,
        }`,
        {},
        { next: { revalidate: 60 } }
    )
}

// Defining an asynchronous function named getExperience which returns a Promise of an array of Experience objects
export async function getExperience(): Promise<Experience[]>{
    // Creating a Sanity client using clientConfig and fetching data based on the specified GROQ query
    return createClient(clientConfig).fetch(
        // GROQ query to fetch experience data, sorted by creation date (newest first)
        groq`*[_type == 'experience'] | order(_createdAt desc){
            ...,
            technologies[]->
        }`,
        {},
        { next: { revalidate: 60 } } // Revalidate every 60 seconds
    )
}

// Defining an asynchronous function named getSkill which returns a Promise of an array of Skill objects
export async function getSkill(): Promise<Skill[]>{
    // Creating a Sanity client using clientConfig and fetching data based on the specified GROQ query
    return createClient(clientConfig).fetch(
        // GROQ query to fetch skill data
        groq`*[_type == 'skill']{
            ...,
            image,
        }`,
        {},
        { next: { revalidate: 60 } }
    )
}