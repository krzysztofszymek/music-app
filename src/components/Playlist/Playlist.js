import { useState } from 'react';
import styles from './Playlist.module.css'
import List from './playlistComponents/List/List';
import ChooseFolder from './playlistComponents/ChooseFolder/ChooseFolder';

function Playlist() {
    const [fileList, setFileList] = useState();

    function setFileListHandler(files){
        setFileList(files);
    }

    return (
        <div className={styles.playlist}>
            <List fileList={fileList}/>
            <ChooseFolder fileListSetter={setFileListHandler}/>
        </div>
    );
}

export default Playlist;