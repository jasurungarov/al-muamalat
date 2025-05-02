'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Logo from '@/components/shared/logo'
import LanguageDropdown from '@/components/shared/language-dropdown'
import { Button } from '@/components/ui/button'

function Navbar() {
	const pathname = usePathname()
	const router = useRouter();

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
                <Logo/>
				{/* Nav links */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-green-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* Search */}
				<div className='flex items-center gap-1'>
					<LanguageDropdown />
						 <ModeToggle/>
						 <Button
      onClick={() => router.push('/SignIn')} 
      variant="ghost"
      size="lg"
      className="text-1xl hidden md:flex bg-primary"
    >
      Sign In
    </Button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
