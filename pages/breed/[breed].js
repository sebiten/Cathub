import OtherImages from "../../components/OtherImages";
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

  const { name, temperament, origin, life_span, weight, height, image, description, bred_for, reference_image_id, breed_group, id } = dog;
  return (
    <>
    <SingleBreed
      name={name}
      temperament={temperament}
      origin={origin}
      life_span={life_span}
      weight={weight.imperial}
      height={height.imperial}
      image={reference_image_id}
      description={description}
      breedfor={bred_for}
      breedgroup={breed_group}
    ></SingleBreed>
      <OtherImages
        id={id}
        name={name}
      />
        
    </>

  );
}