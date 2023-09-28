import iconYoga from "../../assets/yoga-icon.svg";
import iconSwimming from "../../assets/swimming-icon.svg";
import iconCyclo from "../../assets/cyclo-icon.svg";
import iconWeight from "../../assets/strength-icon.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchUserData } from "../../services/ServiceApi";
import { useState } from "react";
function Aside() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await fetchUserData();
        setUser(userData);
        console.log(userData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const actualDate = new Date();
  return (
    <aside className="sidenav">
      <nav className="sidenav__nav">
        <Link to="/">
          <img src={iconYoga} alt="" />
        </Link>
        <Link to="/">
          <img src={iconSwimming} alt="" />
        </Link>
        <Link to="/">
          <img src={iconCyclo} alt="" />
        </Link>
        <Link to="/">
          <img src={iconWeight} alt="" />
        </Link>
      </nav>
      <p>Copyright, SportSee {actualDate.getFullYear()}</p>
    </aside>
  );
}

export default Aside;
