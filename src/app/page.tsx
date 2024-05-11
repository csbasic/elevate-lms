
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
		 
			<h1>Hello Next</h1>
		 	<Link href="/users" className="">Users</Link>
			<ProductCard />
		</main>
	)
}
