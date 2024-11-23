import Image from 'next/image'

const projects = [
  { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1' },
  { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2' },
  { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3' },
]

export default function Projetos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Meus Projetos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded-lg">
            <Image src={`/placeholder.svg?height=200&width=300`} alt={project.title} width={300} height={200} className="mb-2" />
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

