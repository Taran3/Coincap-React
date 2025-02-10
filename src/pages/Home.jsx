import { Nav } from "../components/Nav";
import { Head } from "../components/Head";
import { Coins } from "../components/Coins";

export function Home() {
  return (
    <div>
      <Nav />
      <main className="main-container">
        <div className="container">
          <Head />
          <Coins />
        </div>
      </main>
    </div>
  );
}
