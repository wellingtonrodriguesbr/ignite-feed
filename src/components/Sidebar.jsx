import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cover} />
      <div className={styles.profile}>
        <img src="https://github.com/wellingtonrodriguesbr.png" alt="" />
        <strong>Wellington Rodrigues</strong>
        <span>Frontend Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
