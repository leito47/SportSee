import Header from "../components/Header/Header";
import Aside from "../components/Aside/Aside";
import "../styles/header.scss";
import "../styles/aside.scss";
import "../styles/_variables.scss";
function Home() {
  return (
    <div>
      <Header />
      <Aside />
    </div>
  );
}

export default Home;
