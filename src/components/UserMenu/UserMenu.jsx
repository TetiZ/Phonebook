import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
}
