import Nav from "./Nav"

export default function Layout({children}) {
  return (
    <div class="flex flex-col justify-between min-h-screen">
        <Nav />
        <main>
            {children}
        </main>
        <footer>
            Footer
        </footer>
    </div>
  )
}
