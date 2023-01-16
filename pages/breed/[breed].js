import Image from 'next/image';
import React from 'react'

export default function Breed({ dog }) {
  console.log(dog);
  return (
    <div>
      <h1>{dog.name}</h1>
      <Image
        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
        alt={dog.name}
        width={300}
        height={300}
      />

    </div>
  )
}
export const getStaticPaths = async () => {
  const res = await fetch('https://api.thedogapi.com/v1/breeds');
  const data = await res.json();

  const paths = data.map(dog => {
    return {
      params: { breed: dog.name.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const breed = context.params.breed;
  const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`);
  const data = await res.json();

  return {
    props: { dog: data[0] }
  }
}


