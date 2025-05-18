import { useRouter } from 'next/router'

export default function GamePage() {
  const { query } = useRouter()
  const { slug } = query

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Game: {slug}</h1>
      <iframe
        src={`/games/${slug}/index.html`}
        className="w-full h-[80vh] border"
        title={slug as string}
      />
    </div>
  )
}
