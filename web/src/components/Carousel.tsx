

export function Carousel(){
  return (
    <div className="grid grid-cols-6 gap-6 mt-16">>
      <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/game-1.png" loading="lazy" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
    </div>
  )
}