import dreamMocks from "../mocks/dreams";

const MyDreams = () => {
  return (

<div>
  {dreamMocks.map((dream, dreamIndex) => (
    <div key={dream.dream_id}>
      <h3>{dream.dream_title}</h3>
      <p>{dream.dream_description}</p>
      <div>
        {dream.dream_tags.map((tag, tagIndex) => (
          <span key={tag}>
            {tag}
            {tagIndex !== dream.dream_tags.length - 1 && ", "}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
  );
};

export default MyDreams;
