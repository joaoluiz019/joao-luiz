'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-scroll'
import Image from 'next/image'
import FotoPerfil from '../../public/foto-perfil.png'

export default function Home() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }))
  }, [controls])

  const sections = [
    { id: 'home', title: 'Início' },
    { id: 'about', title: 'Sobre' },
    { id: 'skills', title: 'Habilidades' },
    { id: 'projects', title: 'Projetos' },
    { id: 'contact', title: 'Contato' }
  ]

  return (
    <div className="bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={800}
                  className="cursor-pointer hover:text-blue-400 transition-colors"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <motion.section
          id="home"
          className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={0}
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">João Luiz Ricardo Esteves</h1>
            <p className="text-xl md:text-2xl">Desenvolvedor Web Full Stack</p>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="min-h-screen grid gap-4 content-center bg-gray-800 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={1}
        >
          <div className="text-center grid gap-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre Mim</h2>
            <div className='flex flex-row justify-evenly'>
              <Image
                src={FotoPerfil}
                alt="João Luiz"
                width={3024}
                height={4032}
                className="rounded-full w-80"
              />
              <p className="text-lg md:text-xl mb-6 w-96 text-justify">
                Sou um desenvolvedor apaixonado por programação e estou em constante aprendizado para me tornar um excelente programador.
                Apesar de ter pouca experiência profissional, estou sempre buscando novos desafios e adquirindo conhecimentos
                que me aproximam dos meus objetivos. Minha determinação e dedicação me motivam a crescer na área, sempre com o
                desejo de alcançar grandes conquistas e contribuir significativamente para o mundo da tecnologia.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="min-h-screen flex items-center justify-center bg-gray-900 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={2}
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Habilidades</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'].map((skill) => (
                <div key={skill} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xl font-semibold">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gray-800 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={3}
        >
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Projeto 1', description: 'Descrição breve do projeto 1' },
                { title: 'Projeto 2', description: 'Descrição breve do projeto 2' },
                { title: 'Projeto 3', description: 'Descrição breve do projeto 3' },
                { title: 'Projeto 4', description: 'Descrição breve do projeto 4' },
              ].map((project, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          custom={4}
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Contato</h2>
            <p className="text-xl mb-6">Vamos trabalhar juntos? Entre em contato!</p>
            <a
              href="mailto:joloo2017@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors"
            >
              Enviar E-mail
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
