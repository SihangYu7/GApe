/** @format */

'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
export default function AsyncButton({
    func,
    displayName,
}: {
    func: () => void
    displayName: string
}) {
    const router = useRouter()

    return (
        <Button
            className=' border border-customeBorder '
            onClick={() => {
                console.log('logout')
                func() // Wait for signout to complete
                router.push('/') // Redirect to home page
            }}
        >
            {displayName}
        </Button>
    )
}
