import Image from 'next/image'
import Logo from '../assets/Logo Rocketseat.svg'
import Tag from '../assets/Tag.svg'
export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2 bg-black border-b-8 border-violet-500">
      <div className="relative flex flex-col items-start justify-between overflow-hidden p-32">
        <Image src={Logo} alt="" />
        <h1 className="text-7xl font-bold">Ajuste de iluminação</h1>
        <h4 className="text-3xl opacity-25">Desafio 24</h4>
        <Image src={Tag} alt="" width={240} />
      </div>
    </main>
  )
}
