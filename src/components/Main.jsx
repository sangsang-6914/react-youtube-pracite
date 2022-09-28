import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPopularVideos } from '../api/youtube';
import styles from '../css/main.module.css';
import VideoList from './VideoList';

function Main() {
  const [videos, setVideos] = useState([]);
  const { keyword } = useParams();
  console.log(keyword)
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await getPopularVideos();
      console.log(result.items);
      setVideos(result.items);
    })();
  }, []);

  const handleImageClick = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <>
      {videos != null ? (
        <main className={styles.main}>
          {videos.map((video) => (
            <VideoList key={video.id} video={video} onImageClick={handleImageClick} />
          ))}
        </main>
      ) : null}
    </>
  );
}

export default Main;
