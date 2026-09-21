import React, { useState } from "react";
import { blogPosts } from "../data/blogPosts";
import { BlogCard } from "../components/blog/BlogCard";
import { FAQAccordion } from "../components/common/FAQAccordion";
import { CTABanner } from "../components/common/CTABanner";

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Training", "Nutrition", "Mindset", "Competition", "History"];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  const featured = filteredPosts[0];
  const remaining = filteredPosts.slice(1);

  return (
    <main className="pt-12">
      {/* Header */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold uppercase tracking-wider text-dojo-red bg-dojo-red/10 px-3 py-1 rounded-full border border-dojo-red/20 inline-block mb-3">
          DOJO BLOG
        </span>
        <h1 className="text-4xl sm:text-6xl font-heading font-black text-white tracking-tight">
          Insights from <br />
          <span className="bg-gradient-to-r from-white via-dojo-gold to-dojo-red bg-clip-text text-transparent">
            the Dojo.
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-dojo-muted max-w-xl mx-auto leading-relaxed">
          Training tips, belt guides, nutrition advice, and mindset wisdom from our senseis.
        </p>

        {/* Category Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  active
                    ? "bg-dojo-red text-white shadow-md shadow-dojo-red/30 scale-105"
                    : "bg-dojo-card text-dojo-muted hover:text-white border border-dojo-border"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-dojo-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured && <BlogCard post={featured} featured={selectedCategory === "All"} />}
            {remaining.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />
      <CTABanner />
    </main>
  );
};
