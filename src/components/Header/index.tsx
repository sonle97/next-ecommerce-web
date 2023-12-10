import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import TopBar from "./TopBar";

function Header() {
  return (
    <>
      <header className="w-full bg-white">
        <TopBar />
        <SearchSection />
      </header>
      <Navbar />
    </>
  );
}

export default Header;
