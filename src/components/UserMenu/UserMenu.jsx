import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import style from "../App/App.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.menu}>
      <p>Welcome, {user.name}</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
}
