import React from 'react'

const EpisodeCard = (name, episode, air_date) => {
  return (
    <button>
        <h2>{name}</h2>
        <p>Episode {episode}</p>
        <p>Air Date: {air_date}</p>
    </button>
  )
}

export default EpisodeCard