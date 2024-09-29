/** @format */
import { createClient } from '@/utils/supabase/server'

export default async function UserInfo() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()

    return (
        <>
            <h2>{error || !data?.user ? 'no' : data.user.email}</h2>
        </>
    )
}
