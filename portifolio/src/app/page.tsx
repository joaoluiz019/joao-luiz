export default function Home() {
  return (
    <div className="text-center grid gap-24">
      <h1 className="text-6xl font-bold mb-4">Bem-vindo ao Meu Portfólio</h1>
      <div className="text-center flex flex-row items-center justify-evenly">
        <img className="w-80 shadow-2xl rounded-full border-4 border-violet-600" src="https://media.licdn.com/dms/image/v2/D4D03AQFiPx4V9JsF5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711411603463?e=1737590400&v=beta&t=NfmexkYE0JmKxZbp_APlHPTRyvBhItQpuKaabiFaVKw" alt="Foto João" />
        <p className="text-xl w-96  antialiased text-justify">Me chamo <a className="underline decoration-violet-500">João Luiz Ricardo Esteves</a>
          , sou apaixonado por programação e estou em constante aprendizado para me tornar um excelente
          programador. Apesar de ter pouca experiência profissional, estou sempre buscando novos desafios e adquirindo conhecimentos
          que me aproximam dos meus objetivos. Minha determinação e dedicação me motivam a crescer na área, sempre com o desejo
          de alcançar grandes conquistas e contribuir significativamente para o mundo da tecnologia.</p>
      </div>
    </div>
  )
}

