import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import { BlogCard } from "../components/blog/BlogCard";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { CTABanner } from "../components/common/CTABanner";

export const BlogPostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="pt-10">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-dojo-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs bg-dojo-red text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-dojo-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-dojo-gold" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-dojo-muted leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-dojo-border/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-dojo-border"
              />
              <div>
                <h4 className="font-heading font-bold text-sm text-white">
                  {post.author.name}
                </h4>
                <p className="text-xs text-dojo-gold font-medium">
                  {post.author.role} • {post.date}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }
              }}
              className="p-2 rounded-full bg-dojo-card hover:bg-dojo-surface text-dojo-muted hover:text-white border border-dojo-border transition-colors"
              title="Share article"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-dojo-border shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full max-h-[500px] object-cover"
          />
        </div>

        {/* Rich Article Body */}
        <div className="prose prose-invert prose-red max-w-none space-y-6 text-sm sm:text-base text-dojo-lightText/90 leading-relaxed font-sans [&>h3]:text-2xl [&>h3]:font-heading [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>blockquote]:border-l-4 [&>blockquote]:border-dojo-red [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-dojo-gold [&>blockquote]:my-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul>li]:text-dojo-lightText [&>p]:mb-4">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-dojo-surface/40 border-t border-dojo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-8">
            More Insights from the Dojo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <BlogCard key={r.slug} post={r} />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />
      <CTABanner />
    </main>
  );
};
