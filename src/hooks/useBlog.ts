import { useState, useEffect } from 'react';
import { Tables } from '@/integrations/supabase/types';
import { supabase } from '@/integrations/supabase/client';

// Update types to use the blogs table instead of posts
export type BlogPostPreview = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  created_at: string;
};

export type BlogPostDetail = {
  id: string;
  title: string;
  slug: string;
  content: string;
  hero_image?: string;
  created_at: string;
  tags?: string[];
};

export type NewsPreview = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  published_at?: string;
  created_at?: string;
};

export type DraftPreview = {
  id: string;
  title: string;
  slug: string;
  created_at: string;
};

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, summary, created_at')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        const formattedPosts = data?.map(post => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.summary,
          created_at: post.created_at
        })) || [];
        
        setPosts(formattedPosts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;
      
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, content, created_at')
          .eq('slug', slug)
          .eq('status', 'published')
          .maybeSingle();

        if (error) throw error;
        
        if (data) {
          const formattedPost: BlogPostDetail = {
            id: data.id,
            title: data.title,
            slug: data.slug,
            content: data.content,
            created_at: data.created_at
          };
          setPost(formattedPost);
        } else {
          setPost(null);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}

export function useLatestNews() {
  const [news, setNews] = useState<NewsPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('id, title, slug, excerpt, published_at, created_at')
          .order('published_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        setNews(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
}

export function useDraftPosts() {
  const [posts, setPosts] = useState<DraftPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDrafts = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('id, title, slug, created_at')
          .eq('status', 'draft')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrafts();
  }, []);

  return { posts, loading, error };
}