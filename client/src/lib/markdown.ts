import fm from "front-matter";
import { marked } from "marked";

export interface StoryAttributes {
  id: number;
  title: string;
  season: number;
  date: string;
  duration: string;
  image: string;
  summary: string;
  isNew: boolean;
}

export interface StoryData extends StoryAttributes {
  content: string;
  htmlContent: string;
}

export async function getStory(filename: string): Promise<StoryData> {
  const response = await fetch(`/content/stories/${filename}`);
  const text = await response.text();
  const { attributes, body } = fm<StoryAttributes>(text);
  const htmlContent = await marked(body);

  return {
    ...attributes,
    content: body,
    htmlContent,
  };
}

export async function getAllStories(): Promise<StoryData[]> {
  // In a real static site generator, we would read the directory.
  // Since this is a client-side app, we need a manifest or a known list.
  // For this implementation, we'll fetch a manifest file that we'll generate.
  // If manifest doesn't exist (dev mode), we fallback to known list.

  try {
    const response = await fetch("/content/stories/manifest.json");
    if (response.ok) {
      const files = await response.json();
      const stories = await Promise.all(files.map((file: string) => getStory(file)));
      return stories.sort((a, b) => b.id - a.id);
    }
  } catch {
    console.warn("Manifest not found, using fallback list");
  }

  // Fallback for dev/demo
  const knownFiles = ["ep1.md", "ep2.md", "ep3.md"];
  const stories = await Promise.all(knownFiles.map((file) => getStory(file)));

  return stories.sort((a, b) => b.id - a.id);
}
