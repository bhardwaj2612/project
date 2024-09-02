import AboutUs from "./components/AboutUs";
import Artist from "./components/Artist";
import Contect from "./components/Contect";
import Profile from "./components/Profile";
import RecentShow from "./components/RecentShow";
import Squard from "./components/Squard";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">

      <Artist />
      <Profile />
      <AboutUs />
      <RecentShow />
      <Contect />
      {/* <Squard /> */}
    </main>
  );
}
