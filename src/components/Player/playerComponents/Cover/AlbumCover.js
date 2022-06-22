import styles from './AlbumCover.module.css'

function AlbumCover() {
    return (
        <div className={styles.albumCover}>
            <img src="/img/pain.jpg" alt="albumCover" />
        </div>
    );
}

export default AlbumCover;