import { useRouter } from 'next/router'

export default function GamePage() {
  const { query } = useRouter()
  const { gameName } = query

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Game: {gameName}</h1>
      <iframe
        src={`/games/${gameName}/index.html`}
        className="w-full h-[80vh] border"
        title={gameName as string}
      />
    </div>
  )
}
