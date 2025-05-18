// Entry point for application
import Link from 'next/link'

const games = [
  { title: 'Jump Run', slug: 'jump-run' },
  { title: 'Puzzle Box', slug: 'puzzle-box' },
]

export default function Home() {
  return (
    <main className="p-4 grid gap-4 md:grid-cols-2">
      {games.map(game => (
        <Link
          key={game.slug}
          href={`/games/${game.slug}`}
          className="block border p-4 rounded-lg shadow hover:bg-gray-100"
        >
          <h2 className="text-xl font-bold">{game.title}</h2>
          <p className="text-sm text-gray-600">Click to play</p>
        </Link>
      ))}
    </main>
  )
}
