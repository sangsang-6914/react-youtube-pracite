import { useEffect, useState } from 'react';
import { getPopularVideos, getVideos } from '../api/youtube';
import styles from '../css/main.module.css';

function Main() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await getVideos();
      console.log(result.items);
      setVideos(result.items);
    })();
  }, []);
  return (
    <>
      {videos != null ? (
        <main className={styles.main}>
          {videos.map((video) => (
            <div className={styles.contentWrapper} key={video.id.videoId}>
              <img
                className={styles.contentImage}
                src={video.snippet.thumbnails.high.url}
                alt=""
              />
              <div className={styles.contentInfo}>
                <span className={styles.contentTitle}>
                  {video.snippet.title}
                </span>
                <span className={styles.contentName}>
                  {video.snippet.description}
                </span>
              </div>
            </div>
          ))}
        </main>
      ) : null}
    </>
  );
}

export default Main;
