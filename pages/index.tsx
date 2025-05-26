import { MenuLayout } from "./home";
import { Footer } from "./home";
import Image from 'next/image';
import birdPic from '../assets/bird_with_balls.jpg';
import posts from '../data/test_posts.json';


export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout>
        <div className="w-full px-4 animate-fade-in">
          <div className="pt-20 flex flex-col items-center space-y-4">
          <Image src={birdPic} alt="Profile" className="w-24 h-24 rounded-full object-cover bg-black"/>
          <h1 className="text-4xl font-bold font-mono text-white">Mathis Fituwi</h1>
          <h3 className="font-bold font-mono text-white">A bum. Negative to Zero sum. I'm going numb 🦬</h3>
          </div>
        </div>



          {/* stuff*/}
          <section className="mt-16 w-full flex justify-center">
            <div className="bg-stone-600 p-6 rounded-lg w-full max-w-5xl text-white font-mono space-y-6">
              <h2 className="text-4xl font-bold font-mono text-center">Stuff</h2>
                {posts.map((post, i) => (
                  <div key={i} className="border-l-4 border-white pl-5 bg-stone-700 p-6 rounded-lg w-full max-w-5xl text-white">
                    <h3 className="text-2xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-200">{post.date}</p>
                    <p className="mt-2">{post.subtitle}</p>
                  </div>
                ))}
            </div>
          </section>





      </MenuLayout>
      <Footer></Footer>  
    </main>
  );
}
