import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPopularVideos, getVideo } from "../api/youtube";
import styles from '../css/detail.module.css'

function Detail() {
  const [video, setVideo] = useState({})
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const result = await getVideo(id)
      setVideo(result.items)
      const videosResult = await getPopularVideos()
      setVideos(videosResult.items)
    })()
  }, [id])

  const handleImageClick = (id) => {
    navigate(`/detail/${id}`)
  }
  return (
    <>
    {video !== null ? (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.video}>
            <iframe id="ytplayer" type="text/html" width="820" height="405"
            src={`https://www.youtube.com/embed/${video[0]?.id}`}
            frameborder="0" allowfullscreen title={video[0]?.id} />
          </div>
          <span className={styles.title}>{video[0]?.snippet.title}</span>
          <span className={styles.channelName}>{video[0]?.snippet.channelTitle}</span>
          <span className={styles.description}>{video[0]?.snippet.description}</span>
        </div>
        <div className={styles.side}>
        {videos !== null ? videos.map(video => (
          <div className={styles.sideContentWrapper}>
            <img src={video.snippet.thumbnails.high.url} className={styles.sideContentImage} alt='' onClick={() => handleImageClick(video.id)} />   
            <div className={styles.sideInfoWrapper}>
              <span className={styles.sideTitle}>{video.snippet.title}</span>
              <span className={styles.sideChannelName}>{video.snippet.channelTitle}</span>
            </div>
          </div>
        )): null}
        </div>
      </div>
    ) : null}
    </>
  )
}

export default Detail;
