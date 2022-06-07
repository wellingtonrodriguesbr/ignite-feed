import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR";
import styles from "./Post.module.css";

export function Post() {
  return (
    <>
      {posts.map((post) => (
        <article className={styles.post} key={post.id}>
          <header>
            <div className={styles.author}>
              <Avatar avatarSrc={post.author.avatar} />
              <div className={styles.authorInfo}>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>
            <time
              title={format(
                post.content.publishedAt,
                "d 'de' LLLL 'às' HH:mm'h'",
                {
                  locale: ptBR,
                }
              )}
              dateTime={post.content.publishedAt.toISOString()}
            >
              {formatDistanceToNow(post.content.publishedAt, {
                locale: ptBR,
                addSuffix: true,
              })}
            </time>
          </header>
          <div className={styles.content}>
            <p>{post.content.title}</p>
            <p>{post.content.description}</p>
            <p>
              {" "}
              👉{" "}
              <a href={post.content.link} target="_blank">
                DoctorCare
              </a>
            </p>
            <p>
              {post.content.tags.map((tag) => (
                <a href="" key={tag}>
                  {tag}
                </a>
              ))}
            </p>
          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder="Escreva um comentário..." />
            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>

          <div className={styles.commentList}>
            <Comment />
          </div>
        </article>
      ))}
    </>
  );
}

const posts = [
  {
    id: 1,
    author: {
      name: "Wellington Rodrigues",
      avatar: "https://github.com/wellingtonrodriguesbr.png",
      role: "Frontend Developer",
    },
    content: {
      title: "Fala galera 👋",
      description:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      link: "https://doctor-care-site.netlify.app/",
      tags: ["#novoprojeto", "#nlw", "#rocketseat"],
      publishedAt: new Date("2022-05-11 09:00:32"),
    },
  },
  {
    id: 2,
    author: {
      name: "Wellington Rodrigues",
      avatar: "https://github.com/wellingtonrodriguesbr.png",
      role: "Frontend Developer",
    },
    content: {
      title: "Fala galera 👋",
      description:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      link: "https://doctor-care-site.netlify.app/",
      tags: ["#novoprojeto", "#nlw", "#rocketseat"],
      publishedAt: new Date("2022-05-11 09:00:32"),
    },
  },
  {
    id: 3,
    author: {
      name: "Wellington Rodrigues",
      avatar: "https://github.com/wellingtonrodriguesbr.png",
      role: "Frontend Developer",
    },
    content: {
      title: "Fala galera 👋",
      description:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      link: "https://doctor-care-site.netlify.app/",
      tags: ["#novoprojeto", "#nlw", "#rocketseat"],
      publishedAt: new Date("2022-05-11 09:00:32"),
    },
  },
];
