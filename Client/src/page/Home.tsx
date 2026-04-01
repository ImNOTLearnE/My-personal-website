// COMPONENTS IMPORTS
import Header from "../components/Header";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Communication from "../components/Communication";
import ShowProjects from "../components/ShowProjects";

const Home = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div style={{ marginBottom: "20vh" }}>
        <Banner />
      </div>
      <div style={{ marginBottom: "20vh" }}>
        <ShowProjects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Communication />
      </div>
    </>
  );
};

export default Home;
