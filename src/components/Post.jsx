import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/wellingtonrodriguesbr.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Wellington Rodrigues</strong>
            <span>Frontend Developer</span>
          </div>
        </div>
        <time dateTime="2022-05-11 09:00:32">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          {" "}
          👉{" "}
          <a href="https://doctor-care-site.netlify.app/" target="_blank">
            DoctorCare
          </a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw</a> <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
