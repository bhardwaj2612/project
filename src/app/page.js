import AboutUs from "./components/AboutUs";
import Artist from "./components/Artist";
import Profile from "./components/Profile";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Artist />
      <Profile />
      <AboutUs />

    </main>
  );
}
