import { Link, useParams } from "react-router-dom";
import PageShell from "../Components/PageShell.jsx";
import NotFound from "./NotFound.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { formatDate, postMeta, NOT_FOUND } from "../data/site.js";
import { getPost } from "../data/posts.js";

export default function Post() {
  const { id } = useParams();
  const post = getPost(id);
  usePageMeta(post ? postMeta(post) : NOT_FOUND);

  if (!post) return <NotFound />;

  return (
    <PageShell current="/updates">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/updates" className="text-sm opacity-80 hover:opacity-100">
          ← Back to updates
        </Link>
        <article className="mt-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{post.title}</h1>
          <time dateTime={post.date} className="mt-2 block text-sm opacity-70">
            {formatDate(post.date)}
          </time>
          <div className="mt-3 flex flex-wrap gap-2">
            {(post.tags || []).map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-brand1/10 border border-brand1/30">
                {t}
              </span>
            ))}
          </div>
          {/* content_html comes from our own posts.json file, not from visitors. */}
          <div className="post-body mt-6 text-neutral-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content_html }} />
        </article>
      </main>
    </PageShell>
  );
}
