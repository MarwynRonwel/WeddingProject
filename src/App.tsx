import "./App.css";

// import MainNavigation from "../components/navigations/MainNavigation";

function App() {
  return (
    <>
      <main>
        <section className="h-screen w-full relative bg-stone-100/70">
          {/* <MainNavigation /> */}
          <div className="text-stone-600 absolute top-[20%] left-1/2 -translate-x-1/2 text-center font-medium font-serif">
            <p className="text-5xl leading-normal">
              James & Mae <br /> are getting <br /> married
            </p>

            <p className="text-3xl mt-44">12.30.23</p>
          </div>
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
