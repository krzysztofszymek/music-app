import styles from './Player.module.css'
import Controls from './playerComponents/Controls/Controls';
import AlbumCover from './playerComponents/Cover/AlbumCover';
import ProgressBar from './playerComponents/Progressbar/ProgressBar';
import TitlePanel from './playerComponents/TitlePanel/TitlePanel';

function Player() {
    return (
        <div className={styles.player}>
            <AlbumCover />
            <TitlePanel />
            <ProgressBar />
            <Controls />
        </div>
    );
}

export default Player;