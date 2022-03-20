const navigation = [
    {name: 'About', href: '#'},
    {name: 'Jobs', href: '#'},
    {name: 'Shop', href: '#'},
    {name: 'Terms and Conditions', href: '#'}
]

export default function Footer() {
  return (
    <div >
        <nav className="flex flex-warp justify-center">
            {
                navigation.map((item, i) => (
                    <div key={i} className="px-6">
                        <a href={item.href}>
                            {item.name}
                        </a>
                    </div>
                ))
            }
        </nav>
        <p className="mt-8 text-center">
            &copy; All rights reserved 
        </p>
    </div>
  )
}
