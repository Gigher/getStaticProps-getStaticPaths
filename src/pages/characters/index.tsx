import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const getStaticProps = async () => {
  const res = await axios.get('https://rickandmortyapi.com/api/character');

  return {
    props: {
      characters: res.data.results,
    },
  };
};

type Character = {
    id: number;
    image: string;
    name: string;
    species: string;
  };

const Characters = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-10">Characters</h1>
      <div className="flex flex-wrap justify-center mb-10">
        {characters.map((character) => (
          <Link
            key={character.id}
            href={`/characters/${character.id}`}
            className="m-5 p-5 max-w-[244px] rounded-lg bg-white text-black"
          >
            <Image
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover rounded-t-lg"
              width={240}
              height={168}
            />
            <h2 className="text-[20px] font-medium">{character.name}</h2>
            <p>{character.species}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;