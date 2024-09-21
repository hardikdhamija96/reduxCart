import Products from "../components/Products";

const Home = () => {
  return (
    <div className="bg-blue-200 py-8 mx-auto">
      <div>
        <h3 className="font-bold text-center text-xl uppercase">
          Demo project for Redux Toolkit in React
        </h3>
        <h2 className="font-bold text-center text-2xl uppercase text-blue-800">
          Welcome to Redux Store!
        </h2>
      </div>
      <section className="max-w-[90vw] mx-auto">
        <h3 className="text-center font-bold uppercase text-xl">Product</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
