import img from "../../images/img.webp";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <img className={css.welcome} src={img} alt="" />
    </>
  );
};
export default Home;
