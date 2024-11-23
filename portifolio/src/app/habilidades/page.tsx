const skills = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Git']

export default function Habilidades() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Minhas Habilidades</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-lg text-center">{skill}</li>
        ))}
      </ul>
    </div>
  )
}

