import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'

function Layout({ children }: ChildProps) {
	return (
		<main className="flex flex-col justify-between">
			<Navbar />
			<main className="flex-grow py-6">{children}</main>
			<Footer />
		</main>
	)
}

export default Layout
