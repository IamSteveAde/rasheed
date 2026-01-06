export default function BlogContent({ content }: { content: string }) {
  return (
    <section className="bg-white py-28">
      <div className="container mx-auto px-6 lg:max-w-screen-xl">
        <article
          className="
            prose prose-lg
            max-w-3xl
            prose-headings:font-semibold
            prose-headings:text-black
            prose-p:text-black/75
            prose-li:text-black/70
            prose-strong:text-black
          "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
