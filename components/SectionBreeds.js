import Image from 'next/image'
import React from 'react'
import useDogs from '../hooks/useDogs'

function SectionBreeds() {
  const { dogs, text } = useDogs()
  return (
    <div>
        <section
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))" }}
        >
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="bg-white rounded-lg shadow-lg p-4 m-4"
            >
              <div className="flex justify-center">
                <Image

                  src={dog.image.url}
                  alt={dog.name}
                  width={256}
                  height={256}
                />
              </div>
              <div className="flex justify-center">
                <h2 className="text-2xl font-bold">{dog.name}</h2>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.temperament}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.origin}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.life_span}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.weight.metric}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.height.metric}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.bred_for}</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500">{dog.breed_group}</p>
              </div>




              </div>
          ))}
        </section>
    </div>
  )
}

export default SectionBreeds