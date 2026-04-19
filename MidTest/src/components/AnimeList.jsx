function AnimeList({ anime, onSelect, activeAnimeId }) {
  if (!anime?.length) {
    return null;
  }

  return (
    <section className="mt-8 w-full">
      <p className="text-4xl font-bold text-white">New Release</p>
      <div className="mt-6 grid w-full grid-cols-6 gap-5">
        {anime.map((item) => (
          <article
            key={item.id}
            className="cursor-pointer text-center text-white"
            onClick={() => onSelect?.(item)}
          >
            <div
              className={`relative aspect-[180/255] overflow-hidden rounded-[14px] transition-transform duration-200 `}
            >
              <img
                src={item.image}
                alt={item.movieName}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d1117]/95 via-[#0d1117]/55 to-transparent" />
              <span className="absolute inset-x-0 bottom-4 text-[15px] font-medium text-white">
                Episode {item.episode}
              </span>
            </div>
            <h3 className="mt-4 text-[18px] font-semibold leading-tight text-white">
              {item.movieName}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AnimeList;
