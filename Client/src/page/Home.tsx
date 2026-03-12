// COMPONENTS IMPORTS
import Header from "../components/Header";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ marginBottom: "20vh" }}>
        <Banner />
      </div>
      <div>
        <Skills />
      </div>
    </>
  );
};

export default Home;
