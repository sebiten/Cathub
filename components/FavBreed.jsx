import { useState } from "react";

export default function FavoriteImage({ breed }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleClick() {
    setIsFavorited(!isFavorited);
  }

  return (
    <div className="relative">
      <svg
        className="absolute top-0 right-0 m-2 cursor-pointer"
        onClick={handleClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorited ? '#F44336' : 'none'}
        stroke={isFavorited ? '#F44336' : '#000'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    </div>
  );
}