import styles from '../css/main.module.css';

function VideoList ({video, onImageClick}) {
    return (
        <div className={styles.contentWrapper} key={video.id.videoId}>
            <img
                className={styles.contentImage}
                src={video.snippet.thumbnails.high.url}
                alt=""
                onClick={() => onImageClick(video.id)}
            />
            <div className={styles.contentInfo}>
                <span className={styles.contentTitle}>
                    {video.snippet.title}
                </span>
                <span className={styles.contentName}>
                    {video.snippet.channelTitle}
                </span>
            </div>
        </div>
    )
}

export default VideoList;