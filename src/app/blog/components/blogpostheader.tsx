import Image from "next/image";

export default function BlogPostHeader({ post }: any) {
  return (
    <section className="relative bg-white pt-32">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        <time className="block text-xs text-black/50 mb-6">
          {post.date}
        </time>

        <h1 className="text-4xl md:text-5xl font-semibold text-black max-w-3xl">
          {post.title}
        </h1>
      </div>

      <div className="relative mt-16 h-[520px]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
