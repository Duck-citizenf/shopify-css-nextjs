import Link from "next/link"

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between">
            <Link href="/" passHref>
                Shopify+Next.js
            </Link>
            <a className="text-md">
                Cart
            </a>
        </div>
    </header>
  )
}
