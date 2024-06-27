import axios from 'axios';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
  const res = await axios.get("https://rickandmortyapi.com/api/episode");

  return {
    props: {
      episodes: res.data.results
    }
  }
}

interface Episode {
    id: number;
    name: string;
    episode: string;
    air_date: string;
}

interface EpisodesProps {
    episodes: Episode[];
}

const Episodes: React.FC<EpisodesProps> = ({ episodes }) => {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center my-10'>Episodes</h1>
      <div className='flex flex-wrap justify-center mb-10'>
        {episodes.map((episode) => {
            return (
            <Link href={`/episodes/${episode.id}`} key={episode.id} className='m-5 p-4 rounded-xl bg-white text-black w-[250px] h-[150px] content-center text-center'>
                <h2 className='text-xl font-bold'>{episode.name}</h2>
                <p className='font-semibold'>{episode.episode}</p>
                <p>Air Date: {episode.air_date}</p>
            </Link>
            )
        })}
      </div>
      
    </div>
  )
}

export default Episodes;