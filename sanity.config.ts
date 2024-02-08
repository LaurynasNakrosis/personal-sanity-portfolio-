import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
    projectId: "w186ajj8",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-02-03",
    basePath: "/admin",
    plugins: [structureTool(),visionTool() ],
    schema: {types: schemas},

    
})

export default config;