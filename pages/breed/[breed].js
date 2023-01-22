import SingleBreed from "../../components/SingleBreed";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  const data = await res.json();

  const paths = data.map((dog) => {
    return {
      params: { breed: dog.name.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const breed = context.params.breed;
  const res = await fetch(
    `https://api.thedogapi.com/v1/breeds/search?q=${breed}`
  );
  const data = await res.json();
  return {
    props: { dog: data[0] },
  };
};


export default function Breed({ dog }) {

  const { name, temperament, origin, life_span, weight, height, image, description, breedfor } = dog;
  return (
    <>
    <SingleBreed
      name={dog.name}
      temperament={dog.temperament}
      origin={dog.origin}
      life_span={dog.life_span}
      weight={dog.weight.imperial}
      height={dog.height.imperial}
      image={dog.reference_image_id}
      description={dog.description}
      breedfor={dog.breed_for}
    ></SingleBreed>
    <h1>More images</h1>
    {dog.images.map((image) => (
      <div key={image.id}>
        <img src={image.url} alt={image.id} />
      </div>
    ))}

        
    </>

  );
}
