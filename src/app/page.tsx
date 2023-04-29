import { Footer } from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { Home as HomeIcon, Search, Library, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Layout, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-10">
          <div className="flex flex-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Music vibe</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="#" className="bg-white/5 rounded group w-auto flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors ">
              <Image src="/album01.jpg" width={104} height={104} alt="capa do album" />
              <strong>Wasting light</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            
          </div>

          <h2 className="font-semibold text-2xl mt-10">As melhores da semana</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
            <a href="" className="bg-white/5 p-3 rouded-md flex flex-col gap-2 hover:bg-white/10">
              <Image src="/album02.jpg" className="w-full" width={120} height={120} alt="capa do album" />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-400">Ze neto, Jhi, Drx, Aloy</span>
            </a>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  )

}
