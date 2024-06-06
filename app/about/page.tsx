import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "#site/content";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import { Tag } from "@/components/tag";
import { MDXContent } from "@/components/mdx-components";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  const post = posts.find((post) => post.title === "@About Me");

  if (!post) {
    return (
      <div>
        <h1 className="inline-block font-black text-4xl lg:text-5xl">
          Nothing to see here..
        </h1>
      </div>
    );
  }

  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <article className="container prose dark:prose-invert max-w-3xl mx-auto">
        <div className="flex-1">
          <h1 className="inline-block font-black text-4xl">About Me</h1>
        </div>
        {post.description ? (
          <p className="text-xl mt-0 text-muted-foreground">
            {post.description}
          </p>
        ) : null}
        <hr className="my-2" />
        <MDXContent code={post.body} />
      </article>
    </div>
  );
}
