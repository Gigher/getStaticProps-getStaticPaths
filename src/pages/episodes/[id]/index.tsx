import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import React from 'react';

export const getStaticPaths = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/episode');
    const paths = data.results.map((episode: any) => ({
        params: { id: episode.id.toString() }
    }));
    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    return {
        props: { episode: data },
    };
};

const Episode = ({ episode }: InferGetStaticPropsType<typeof getStaticProps>) => {

    console.log(episode);
    

    return (
        <div className="flex flex-col items-center justify-center my-5 min-h-screen">
        <h1 className="text-5xl font-bold mb-5">{episode.name}</h1>
        <div className='m-5 flex gap-6'>
            <p>Episode: {episode.episode}</p>
            <p>Date: {episode.air_date}</p>
        </div>
        

        </div>
    );
};

export default Episode;