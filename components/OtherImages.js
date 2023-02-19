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
    <div className="mx-auto py-8">
      <h1 className="w-1/2 mx-auto my-5 uppercase font-bold text-xl text-center">
        Other Images
      </h1>
      {loading && (
        <h2 className="text-center font-bold text-xl mt-5">Loading...</h2>
      )}
      <div className="w-full xl:w-1/2 mx-auto grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3  gap-2">
        {images.slice(0, 3).map((image) => (
          <Image
            src={image.url}
            alt={name}
            key={image.id}
            width={300}
            height={300}
            className="mx-auto h-66 w-96 sm:h-72 sm:w-96 object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

export default OtherImages;