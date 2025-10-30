import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

Deno.serve(async (req) => {
  try {
    // Get authorization header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Create Supabase client with service role for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )

    // Verify the user making the request
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const userId = user.id

    // Delete user's data in order (to respect foreign key constraints)
    console.log(`Deleting data for user ${userId}`)

    // Delete journal entries
    const { error: journalError } = await supabaseAdmin
      .from('journal_entries')
      .delete()
      .eq('user_id', userId)
    if (journalError) console.error('Journal deletion error:', journalError)

    // Delete mood entries
    const { error: moodError } = await supabaseAdmin
      .from('mood_entries')
      .delete()
      .eq('user_id', userId)
    if (moodError) console.error('Mood deletion error:', moodError)

    // Delete user progress
    const { error: progressError } = await supabaseAdmin
      .from('user_progress')
      .delete()
      .eq('user_id', userId)
    if (progressError) console.error('Progress deletion error:', progressError)

    // Delete user blogs
    const { error: blogsError } = await supabaseAdmin
      .from('blogs')
      .delete()
      .eq('author_id', userId)
    if (blogsError) console.error('Blogs deletion error:', blogsError)

    // Delete user roles
    const { error: rolesError } = await supabaseAdmin
      .from('user_roles')
      .delete()
      .eq('user_id', userId)
    if (rolesError) console.error('Roles deletion error:', rolesError)

    // Delete profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .delete()
      .eq('user_id', userId)
    if (profileError) console.error('Profile deletion error:', profileError)

    // Finally, delete the auth user
    const { error: deleteUserError } = await supabaseAdmin.auth.admin.deleteUser(userId)
    
    if (deleteUserError) {
      console.error('User deletion error:', deleteUserError)
      return new Response(
        JSON.stringify({ error: 'Failed to delete user account' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    console.log(`Successfully deleted user ${userId}`)

    return new Response(
      JSON.stringify({ success: true, message: 'Account successfully deleted' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
})
