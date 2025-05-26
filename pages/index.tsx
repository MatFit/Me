import { MenuLayout } from "./home";
import { Footer } from "./home";
import Image from 'next/image';
import birdPic from '../assets/bird_with_balls.jpg';

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





      </MenuLayout>
      <Footer></Footer>  
    </main>
  );
}
