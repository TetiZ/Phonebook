import Loader from "../components/Loader/Loader";
import PageTitle from "../components/PageTitle/PageTitle";
import css from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import phoneImage from "../assets/img/phone.png";
import dotsImage from "../assets/img/dots.png";

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <PageTitle></PageTitle>
      <section className={css.section}>
        <div className={css.container}>
          <div className={css.intro}>
            <p className={css.text}>
              Try our App and <Loader />
            </p>
            <h1 className={css.title}>
              Organize your <span className={css.span}>contact list</span>
            </h1>
            <p className={css.descr}>
              Welcome to your Phonebook! With our App, managing your contacts
              has never been easier. You can seamlessly add, edit, and delete
              contacts in your private profile, ensuring that your contacts are
              always up to date and organized just the way you want them. No
              more scrolling through long lists – just type in the name, and our
              app will do the rest.
            </p>
            {isLoggedIn ? (
              <NavLink to="/contacts" className={css.btn}>
                Get Started Now
              </NavLink>
            ) : (
              <NavLink to="/login" className={css.btn}>
                Get Started Now
              </NavLink>
            )}
          </div>
          <div className={css.imgWrapper}>
            <img
              className={css.phoneImg}
              src={phoneImage}
              alt="phone image"
              width="512"
              height="460"
            />
            <img
              className={css.dotsImg}
              src={dotsImage}
              alt="dots image"
              width="122"
              height="108"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
