import { useState } from 'react';
import styles from './Playlist.module.css'
import List from './playlistComponents/List/List';
import DUMMY_DATA from './Data';

function Playlist() {
    const [fileList, setFileList] = useState(DUMMY_DATA);

    return (
        <div className={styles.playlist}>
            <List fileList={fileList}/>
        </div>
    );
}

export default Playlist;