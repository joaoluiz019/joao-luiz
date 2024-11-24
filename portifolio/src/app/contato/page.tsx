export default function Contato() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nome</label>
          <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">E-mail</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Mensagem</label>
          <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600">Enviar</button>
      </form>
    </div>
  )
}

