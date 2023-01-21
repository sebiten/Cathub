import Image from "next/image";
import { useState, useEffect } from "react";

function OtherImages({ id, name }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}&limit=9`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <h1 className="w-1/2 mx-auto my-8 uppercase font-bold text-xl text-center">
        Other Images
      </h1>
      {loading && (
        <h2 className="text-center font-bold text-xl mt-6">Loading...</h2>
      )}
      <div className="w-1/2 mx-auto grid grid-cols-2 md:grid-cols-2 gap-4 relative">
        {images.slice(0, 8).map((image) => (
          <Image
            src={image.url}
            alt={name}
            key={image.id}
            width={300}
            height={300}
            className="h-56 w-64 object-cover rounded-2xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        ))}
        {isOpen && (
          <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex items-center justify-center"
          >
          <img src={images.url}
          alt={name}
          className="w-full max-w-lg m-auto"
          />
          <button
          className="absolute top-0 right-0 mt-4 mr-4 text-3xl font-bold text-white"
          onClick={() => setIsOpen(false)}>Close</button>
        </div>
          )}
      </div>
    </div>
  );
}

export default OtherImages;
