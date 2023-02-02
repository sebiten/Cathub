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
      <div className="w-1/2 mx-auto grid grid-cols-2 md:grid-cols-3 ">
        {images.slice(0, 3).map((image) => (
          <Image
            src={image.url}
            alt={name}
            key={image.id}
            width={300}
            height={300}
            className="mx-auto h-56 w-64 object-cover rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}

export default OtherImages;