/**
 * Sanitizes database errors to prevent information leakage
 * Maps technical error codes to user-friendly messages
 */
export function sanitizeDbError(error: any): string {
  // Log full error in development for debugging
  if (import.meta.env.DEV) {
    console.error('Database error:', error);
  }

  // Map PostgreSQL error codes to user-friendly messages
  const errorCode = error?.code;
  const errorMessage = error?.message?.toLowerCase() || '';

  // Unique constraint violations
  if (errorCode === '23505') {
    if (errorMessage.includes('slug')) return 'A post with this URL already exists';
    return 'This item already exists';
  }

  // Foreign key violations
  if (errorCode === '23503') return 'Cannot complete action due to missing reference';

  // Not null violations
  if (errorCode === '23502') return 'Required information is missing';

  // RLS policy violations
  if (errorMessage.includes('rls') || errorMessage.includes('policy')) {
    return 'You do not have permission to perform this action';
  }

  // JWT/Auth errors
  if (errorMessage.includes('jwt') || errorMessage.includes('token')) {
    return 'Your session has expired. Please log in again.';
  }

  // Network/Connection errors
  if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
    return 'Network error. Please check your connection and try again.';
  }

  // Generic fallback
  return 'An unexpected error occurred. Please try again or contact support.';
}
