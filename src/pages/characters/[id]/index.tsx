import axios from 'axios'
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React from 'react'

export const getStaticPaths = async () => {
  const data = await axios.get('https://rickandmortyapi.com/api/character');
  const paths = data.data.results.map((character: any) => ({ params: { id:
    character.id.toString() } }));
    return { paths, fallback: false };
};


export const getStaticProps = async ({params}: {params: { id: string}}) => {
    const { id } = params;
    const data = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    
    return {
        props: { character: data.data }
    }
}


const Character = ({ character }:InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className='flex flex-col items-center justify-center my-5 min-h-screen'>
        <h1 className='text-5xl font-bold mb-5'>{character.name}</h1>
        <Image src={character.image} alt={character.name} width={300} height={300} className='rounded-full' />
        <div className='mt-8 flex flex-col gap-5'>
          <p className='text-2xl font-bold'>Status: {character.status}</p>
          <p className='text-2xl font-bold'>Species: {character.species}</p>
          <p className='text-2xl font-bold'>Gender: {character.gender}</p>
        </div>
    </div>
  )
}

export default Character;