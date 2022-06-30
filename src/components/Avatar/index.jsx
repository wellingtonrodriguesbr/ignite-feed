import styles from "./Avatar.module.css";

export function Avatar({ avatarSrc, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={avatarSrc}
      alt=""
    />
  );
}
