import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type Post = Tables<'posts'>;
type News = Tables<'news'>;

// Partial types for specific queries
type BlogPostPreview = Pick<Post, 'id' | 'title' | 'slug' | 'excerpt' | 'created_at'>;
type BlogPostDetail = Pick<Post, 'title' | 'content_html' | 'hero_image' | 'created_at' | 'tags'>;
type NewsPreview = Pick<News, 'id' | 'title' | 'slug' | 'created_at'>;
type DraftPreview = Pick<Post, 'id' | 'title' | 'slug' | 'created_at'>;

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPostPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, excerpt, created_at')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(slug: string) {
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('title, content_html, hero_image, created_at, tags')
          .eq('slug', slug)
          .single();

        if (error) throw error;
        setPost(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}

export function useLatestNews() {
  const [news, setNews] = useState<NewsPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('id, title, slug, created_at')
          .order('published_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        setNews(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return { news, loading, error };
}

export function useDraftPosts() {
  const [posts, setPosts] = useState<DraftPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDrafts() {
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, created_at')
          .eq('status', 'draft')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setPosts(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch drafts');
      } finally {
        setLoading(false);
      }
    }

    fetchDrafts();
  }, []);

  return { posts, loading, error };
}