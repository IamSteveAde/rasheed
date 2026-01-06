import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "../data/posts";
import type { BlogPost } from "../data/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post: BlogPost | undefined = posts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white">
      {/* HERO */}
      <div className="relative h-[60vh]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 lg:max-w-screen-md py-24">
        <time className="block text-xs text-black/50 mb-6">
          {post.date}
        </time>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-12">
          {post.title}
        </h1>

        <div
          className="blog-article"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
