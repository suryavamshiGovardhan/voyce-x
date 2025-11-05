export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string
          event_name: string
          event_properties: Json | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_name: string
          event_properties?: Json | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_name?: string
          event_properties?: Json | null
          id?: string
          user_id?: string | null
        }
        Relationships: []
      }
      badges: {
        Row: {
          category: string
          created_at: string
          description: string
          icon: string
          id: string
          name: string
          points_required: number
        }
        Insert: {
          category?: string
          created_at?: string
          description: string
          icon: string
          id?: string
          name: string
          points_required?: number
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          icon?: string
          id?: string
          name?: string
          points_required?: number
        }
        Relationships: []
      }
      blogs: {
        Row: {
          author: string
          author_id: string | null
          author_name: string | null
          blog_references: string | null
          category: string | null
          content: string
          created_at: string
          date: string
          featured_image: string | null
          footer: string | null
          id: string
          image_url: string | null
          moderated_at: string | null
          moderated_by: string | null
          moderation_status: string | null
          quotes: string | null
          slug: string
          status: string | null
          summary: string | null
          tags: string[] | null
          tips: string | null
          title: string
          updated_at: string
        }
        Insert: {
          author: string
          author_id?: string | null
          author_name?: string | null
          blog_references?: string | null
          category?: string | null
          content: string
          created_at?: string
          date?: string
          featured_image?: string | null
          footer?: string | null
          id?: string
          image_url?: string | null
          moderated_at?: string | null
          moderated_by?: string | null
          moderation_status?: string | null
          quotes?: string | null
          slug: string
          status?: string | null
          summary?: string | null
          tags?: string[] | null
          tips?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          author_id?: string | null
          author_name?: string | null
          blog_references?: string | null
          category?: string | null
          content?: string
          created_at?: string
          date?: string
          featured_image?: string | null
          footer?: string | null
          id?: string
          image_url?: string | null
          moderated_at?: string | null
          moderated_by?: string | null
          moderation_status?: string | null
          quotes?: string | null
          slug?: string
          status?: string | null
          summary?: string | null
          tags?: string[] | null
          tips?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_interactions: {
        Row: {
          content_id: string
          content_type: string
          created_at: string
          id: string
          interaction_type: string
          interaction_value: number | null
          user_id: string
        }
        Insert: {
          content_id: string
          content_type: string
          created_at?: string
          id?: string
          interaction_type: string
          interaction_value?: number | null
          user_id: string
        }
        Update: {
          content_id?: string
          content_type?: string
          created_at?: string
          id?: string
          interaction_type?: string
          interaction_value?: number | null
          user_id?: string
        }
        Relationships: []
      }
      daily_challenges: {
        Row: {
          challenge_type: string
          created_at: string
          date: string
          description: string
          id: string
          points_reward: number
          target_content_id: string | null
          title: string
        }
        Insert: {
          challenge_type: string
          created_at?: string
          date: string
          description: string
          id?: string
          points_reward?: number
          target_content_id?: string | null
          title: string
        }
        Update: {
          challenge_type?: string
          created_at?: string
          date?: string
          description?: string
          id?: string
          points_reward?: number
          target_content_id?: string | null
          title?: string
        }
        Relationships: []
      }
      journal_entries: {
        Row: {
          content: string
          created_at: string
          id: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mood_entries: {
        Row: {
          created_at: string
          id: string
          mood_label: string
          mood_level: number
          notes: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          mood_label: string
          mood_level: number
          notes?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          mood_label?: string
          mood_level?: number
          notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          content_html: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          published_at: string | null
          slug: string
          title: string
        }
        Insert: {
          content_html?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug: string
          title: string
        }
        Update: {
          content_html?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          title?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          content_html: string | null
          created_at: string | null
          excerpt: string | null
          hero_image: string | null
          id: string
          published_at: string | null
          slug: string
          status: string | null
          tags: string[] | null
          'Unlocking Everyday Joy: "Mindfulness for a Better You"': string
          updated_at: string | null
        }
        Insert: {
          content_html?: string | null
          created_at?: string | null
          excerpt?: string | null
          hero_image?: string | null
          id?: string
          published_at?: string | null
          slug: string
          status?: string | null
          tags?: string[] | null
          'Unlocking Everyday Joy: "Mindfulness for a Better You"': string
          updated_at?: string | null
        }
        Update: {
          content_html?: string | null
          created_at?: string | null
          excerpt?: string | null
          hero_image?: string | null
          id?: string
          published_at?: string | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          'Unlocking Everyday Joy: "Mindfulness for a Better You"'?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          age_group: string | null
          created_at: string
          district: string | null
          full_name: string | null
          id: string
          mobile: string | null
          state: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age_group?: string | null
          created_at?: string
          district?: string | null
          full_name?: string | null
          id?: string
          mobile?: string | null
          state?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age_group?: string | null
          created_at?: string
          district?: string | null
          full_name?: string | null
          id?: string
          mobile?: string | null
          state?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          answers: Json | null
          completed_at: string
          id: string
          quiz_id: string
          score: number
          time_spent_seconds: number | null
          total_questions: number
          user_id: string
        }
        Insert: {
          answers?: Json | null
          completed_at?: string
          id?: string
          quiz_id: string
          score: number
          time_spent_seconds?: number | null
          total_questions: number
          user_id: string
        }
        Update: {
          answers?: Json | null
          completed_at?: string
          id?: string
          quiz_id?: string
          score?: number
          time_spent_seconds?: number | null
          total_questions?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          category: string
          created_at: string
          description: string | null
          difficulty: string
          id: string
          is_active: boolean
          points_reward: number
          questions: Json
          time_limit_seconds: number | null
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          difficulty?: string
          id?: string
          is_active?: boolean
          points_reward?: number
          questions: Json
          time_limit_seconds?: number | null
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          difficulty?: string
          id?: string
          is_active?: boolean
          points_reward?: number
          questions?: Json
          time_limit_seconds?: number | null
          title?: string
        }
        Relationships: []
      }
      referral_codes: {
        Row: {
          code: string
          created_at: string
          expires_at: string | null
          id: string
          max_uses: number | null
          points_reward: number
          user_id: string
          uses: number
        }
        Insert: {
          code: string
          created_at?: string
          expires_at?: string | null
          id?: string
          max_uses?: number | null
          points_reward?: number
          user_id: string
          uses?: number
        }
        Update: {
          code?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          max_uses?: number | null
          points_reward?: number
          user_id?: string
          uses?: number
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string
          id: string
          points_awarded: number
          referral_code: string
          referred_id: string
          referrer_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          points_awarded?: number
          referral_code: string
          referred_id: string
          referrer_id: string
        }
        Update: {
          created_at?: string
          id?: string
          points_awarded?: number
          referral_code?: string
          referred_id?: string
          referrer_id?: string
        }
        Relationships: []
      }
      user_badges: {
        Row: {
          badge_id: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          badge_id: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          badge_id?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_daily_challenges: {
        Row: {
          challenge_id: string
          completed_at: string
          id: string
          user_id: string
        }
        Insert: {
          challenge_id: string
          completed_at?: string
          id?: string
          user_id: string
        }
        Update: {
          challenge_id?: string
          completed_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_daily_challenges_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "daily_challenges"
            referencedColumns: ["id"]
          },
        ]
      }
      user_gamification: {
        Row: {
          created_at: string
          current_level: number
          current_streak: number
          id: string
          last_activity_date: string | null
          longest_streak: number
          total_points: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_level?: number
          current_streak?: number
          id?: string
          last_activity_date?: string | null
          longest_streak?: number
          total_points?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_level?: number
          current_streak?: number
          id?: string
          last_activity_date?: string | null
          longest_streak?: number
          total_points?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_onboarding: {
        Row: {
          completed_at: string | null
          created_at: string
          current_step: number
          experience_level: string | null
          id: string
          interests: string[] | null
          learning_goals: string[] | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          current_step?: number
          experience_level?: string | null
          id?: string
          interests?: string[] | null
          learning_goals?: string[] | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          current_step?: number
          experience_level?: string | null
          id?: string
          interests?: string[] | null
          learning_goals?: string[] | null
          user_id?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          completed_at: string
          id: string
          module_id: string
          module_title: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          module_id: string
          module_title: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          module_id?: string
          module_title?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          granted_at: string
          granted_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          granted_at?: string
          granted_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      award_points: {
        Args: { p_event_type: string; p_points: number; p_user_id: string }
        Returns: undefined
      }
      can_moderate: { Args: { _user_id: string }; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
      update_streak: { Args: { p_user_id: string }; Returns: undefined }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
