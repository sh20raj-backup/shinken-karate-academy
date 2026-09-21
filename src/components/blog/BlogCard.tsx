import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "../../data/blogPosts";

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<Props> = ({ post, featured }) => {
  return (
    <article
      className={`group rounded-3xl bg-dojo-card border border-dojo-border overflow-hidden hover:border-dojo-gold/50 transition-all duration-300 flex flex-col justify-between ${
        featured ? "lg:col-span-2 lg:flex-row items-center" : ""
      }`}
    >
      <div className={featured ? "lg:w-1/2 h-72 lg:h-full relative overflow-hidden" : "h-56 relative overflow-hidden"}>
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-dojo-gold border border-white/10">
          {post.category}
        </div>
      </div>

      <div className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${featured ? "lg:w-1/2" : ""}`}>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs text-dojo-muted">
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-dojo-red" />
              {post.readTime}
            </span>
          </div>

          <h3 className={`font-heading font-bold text-white group-hover:text-dojo-gold transition-colors ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}>
            <Link to={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          <p className="text-sm text-dojo-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        <div className="pt-6 mt-4 border-t border-dojo-border/60 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-7 h-7 rounded-full object-cover border border-dojo-border"
            />
            <span className="text-xs text-white/90 font-medium">
              {post.author.name}
            </span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="text-xs font-bold text-dojo-gold group-hover:text-white flex items-center gap-1 transition-colors"
          >
            Read Article
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
