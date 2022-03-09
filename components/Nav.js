import Link from "next/link"

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 bg-white">
        <div class="flex items-center justify-between">
            <Link href="/" passHref>
                Shopify+Next.js
            </Link>
            <a class="text-md">
                Cart
            </a>
        </div>
    </header>
  )
}
