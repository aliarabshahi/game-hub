import useGeneres from "../hooks/useGenres";

export const GenreList = () => {
  const { data } = useGeneres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
