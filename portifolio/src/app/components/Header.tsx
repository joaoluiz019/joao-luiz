import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-violet-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
          <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
          <li><Link href="/projetos" className="hover:text-gray-300">Projetos</Link></li>
          <li><Link href="/habilidades" className="hover:text-gray-300">Habilidades</Link></li>
          <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

