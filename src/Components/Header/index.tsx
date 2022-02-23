import style from "./index.module.scss";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className={style.header}>
      <h2>Cep Search</h2>
      <FaSearch />
    </div>
  );
}
