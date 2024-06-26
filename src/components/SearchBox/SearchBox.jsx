import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBox() {
  const filters = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.text}>Find contacts</p>
      <input
        className={css.input}
        placeholder="Start typing the name..."
        type="text"
        value={filters}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
}
