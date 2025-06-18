import { MenuLayout } from "../components/MenuLayout";
import { Footer } from "../components/MenuLayout";
import { useState, useEffect } from "react";
import { indexModel as s } from '../styles/indexModel.styles';
import Image from 'next/image';
import birdPic from '../assets/bird_with_balls.jpg';
import posts from '../data/test_posts.json';


export default function Home() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 
  
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout>
        <div className="w-full px-4 animate-fade-in">
          <div className="pt-20 flex flex-col items-center space-y-4">
          <Image src={birdPic} alt="Profile" className="w-24 h-24 rounded-full object-cover bg-black"/>
          <h1 className="text-4xl font-bold font-mono text-white">Mathis Fituwi</h1>
          <h3 className="font-bold font-mono text-white">Life's comet blazes brilliantly, it's light soon to fade, where weary skies lies</h3>
          <h4>🦬</h4>
          </div>
        </div>



          {/* stuff*/}
          <section className="mt-12 w-full flex justify-center animate-fade-in">
             <div className={s.card}>   
              <h2 className={s.header_2}>Random talks</h2>

                {/* Fetching posts */}
                {posts.map((post, i) => (
                  <div key={i} onClick = {() => setSelectedPost(post)} className={s.post_card}>
                    <h3 className="text-2xl font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-200"> Date: {post.date}</p>
                    <p className="mt-2"> - {post.subtitle} -</p>
                  </div>
                ))}
            </div>


            {/* If Post is clicked */}
            {selectedPost && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className={s.post}>
                  <h3 className="text-center text-2xl font-bold text-stone-900">{selectedPost.title}</h3>
                  <p className="text-center text-sm text-stone-700">Date: {selectedPost.date}</p>

                  {/* Posts in article format */}
                  <article className="w-full h-96 max-h-[70vh] overflow-y-auto overflow-x-hidden p-6 bg-stone-100 rounded-lg shadow-inner">
                    <p className="whitespace-pre-wrap break-words leading-relaxed text-stone-800">
                      {selectedPost.content}
                    </p>
                  </article>

                  {/* Handle close post by toggling off setSelectedPost */}
                  <div className="flex justify-end">
                    <button onClick={() => setSelectedPost(null)} className="bg-stone-700 hover:bg-stone-800 transition text-white px-5 py-2 rounded-lg font-semibold">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}

          </section>

      <Footer></Footer>  
      </MenuLayout>
      
    </main>
  );
}
