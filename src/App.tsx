import "./App.css";

import MainNavigation from "../components/navigations/MainNavigation";

function App() {
  return (
    <>
      <main>
        <section className="intro h-screen bg-no-repeat bg-cover">
          <MainNavigation />
        </section>
        <section>
          <div className="px-48 py-20">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores distinctio sunt velit voluptate commodi soluta ut
              inventore nam laudantium quis, quaerat, numquam minus delectus
              ducimus dolores voluptatem unde. Similique, voluptatibus. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla
              dolores nesciunt rerum delectus debitis ratione. Illo qui,
              explicabo possimus error nesciunt enim accusamus architecto
              laboriosam praesentium placeat inventore quidem! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quidem eligendi tenetur
              tempore nesciunt facere maiores quaerat ad a sint, ratione, soluta
              necessitatibus modi? Tempora, dicta veritatis reiciendis inventore
              dolorum minima.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
