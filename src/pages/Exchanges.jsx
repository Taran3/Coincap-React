import { Nav } from "../components/Nav";
import { Head } from "../components/Head";
import { ExchangesList } from "../components/ExchangesList";

export function Exchanges() {
  return (
    <div>
      <Nav />
      <main className="main-container">
        <div className="container">
          <Head />
          <ExchangesList />
        </div>
      </main>
    </div>
  );
}
