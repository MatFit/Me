import { MenuLayout } from "./home";
import { Footer } from "./home";
import { Grid, Typography, Paper, Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { indexModel as s } from './indexModel.styles';
import { useState } from "react";
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import birdPic from '../assets/choice.jpg';
import choice from '../assets/choice.jpg';
import dreamEmbark from '../assets/dreams_uml.jpg';
import connectN from '../assets/connectN.jpg'
import sentimentAnalysis from '../assets/sentiment_s.jpg'
import tintNtell from '../assets/tintsNtells.jpg'



const CARD_SIZE = 12;
const ROW_SPACING = 8;
const COLUMN_SPACING = 4;


type OpenImageProps = {
  src: StaticImageData;
  onClick: () => void;
};




export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <MenuLayout>
        <div className="w-full px-4 animate-fade-in">
          <div className="pt-20 flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold font-mono text-white">Projects</h1>
          <h2 className="text-sm font-mono"> Everything I've done so far</h2>



          <Grid container direction={"column"} spacing={COLUMN_SPACING} alignItems={"center"}>
        



            <Grid size={CARD_SIZE}>

              <section className="mt-12">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <Image src={sentimentAnalysis}  alt="Project preview"  className="w-full md:w-1/2 rounded-xl object-cover"/>

                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold">Sentiment Analysis in Horse Race Betting</h3>
                    <p className="mt-4 text-stone-300 break-words">
                    This project we scraped UK horse racing forums to track sentiments of jockies, trainers, and horses with BERT in order to analyze potential
                    betting opportunities simulated with Kelly Criterion and Monte Carlo. 
                  </p>
                  <a className="mt-4 block text-slate-400 hover:underline" href="https://github.com/Jamrowski/CSCI3832-FinalProject" target="_blank">Check it out here</a>
                  </div>
                </div>
            
              </section>
            </Grid>

            <Grid size={CARD_SIZE}>

              <section className="">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold">Choice – Media Storage Application</h3>
                    <p className="mt-4 text-stone-300 break-words">
                      Simple web app to store, catagorize, and search for any media content with Node.js, PostgreSQL, EJS/CSS, REST APIs, and so on
                    </p>
                    <a className="mt-4 block text-slate-400 hover:underline" href="https://github.com/kyndranelson/CSCI3308_MovieRecommender_Project" target="_blank">Check it out here</a>
                  </div>
                  <Image src={choice}  alt="Project preview"  className="w-full md:w-1/2 rounded-xl object-cover" onClick={() => setOpen(true)}/>
                  
                </div>

                
              </section>
            </Grid>

            <Grid size={CARD_SIZE}>
              <section className="">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <Image src={dreamEmbark}  alt="Project preview"  className="w-full md:w-1/2 rounded-xl object-cover"/>

                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold">Dream Embarked - 2D Java Game</h3>
                    <p className="mt-4 text-stone-300 break-words">
                      Java game in libGDX and dependancies handled with Gradle I don't have the appropriate dependancies installed though on this computer so ill get a picture of the game later
                    </p>
                    <a className="mt-4 block text-slate-400 hover:underline" href="https://github.com/MatFit/Dreams-Embarked" target="_blank">Check it out here</a>
                  </div>
                </div>

                
              </section>



            </Grid>
            <Grid size={CARD_SIZE}>
              
              <section className="">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold">ConnectN - An extension to Connect 4</h3>
                    <p className="mt-4 text-stone-300 break-words">
                      Neat Connect 4 but more game with special abilities and disk animations. Written in C++ w/ QT Graphics
                    </p>
                    <a className="mt-4 block text-slate-400" target="_blank">Not Public Sadly</a>
                  </div>
                  <Image src={connectN}  alt="Project preview"  className="w-full md:w-1/2 rounded-xl object-cover"/>

                  
                </div>

                
              </section>


            </Grid>
            

            <Grid size={CARD_SIZE}>

              <section>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <Image src={tintNtell}  alt="Project preview"  className="w-full md:w-1/2 rounded-xl object-cover"/>
                  <div className="md:w-1/2">
                    <h3 className="text-3xl font-bold">Tints N Tells</h3>
                    <p className="mt-4 text-stone-300 break-words">
                      Hues and Cues but on the computer, works pretty well. Written in C++ w/ QT Graphics as well
                    </p>
                    <a className="mt-4 block text-slate-400 hover:underline" href="https://github.com/MatFit/TintsAndTells" target="_blank">Check it out here</a>
                  </div>
                </div>

               
              </section>

            </Grid>
          </Grid>
          
          </div>
        </div>
      </MenuLayout>
      <Footer></Footer>
    </main>
  );
}



function OpenImage({src, onClick} : OpenImageProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <button
            onClick={onClick}
            className="absolute top-4 left-4 text-white text-3xl font-bold"
          >
            ×
          </button>
          <Image
            src={src}
            alt="Full Image"
            // className="max-w-full max-h-full rounded-xl"
          />
        </div>
  )
}
