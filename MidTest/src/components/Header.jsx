function Header() {
  return (
    <div className="flex h-[48px] w-full items-center justify-between">
      <span className="text-white  text-4xl font-bold">Anonime</span>
      <nav className="text-gray-500 text-lg">Home</nav>
      <nav className="text-gray-500 text-lg">List anime</nav>
      <input
        type="search"
        placeholder="Search movie or anime"
        className=" h-full w-[375.58px] rounded-full border-0 bg-[#374151] px-6 text-lg text-[#d1d5db] placeholder:text-[#9ca3af] outline-none"
      />
    </div>
  );
}

export default Header;
