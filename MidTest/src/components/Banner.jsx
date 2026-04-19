function Banner({ anime }) {
  if (!anime) {
    return null;
  }

  return (
    <section className="relative mt-8 h-[400px] w-full overflow-hidden rounded-[14px]">
      <img
        src={anime.image}
        alt={anime.movieName}
        className="block h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-8 left-8 max-w-[700px] text-white">
        <h2 className="mb-3 text-[32px] font-semibold leading-tight">
          {anime.movieName}
        </h2>
        <p className="line-clamp-3 leading-6">{anime.description}</p>
      </div>
    </section>
  );
}

export default Banner;
