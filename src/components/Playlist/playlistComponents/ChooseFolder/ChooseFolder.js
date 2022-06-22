import styles from './ChooseFolder.module.css'

function ChooseFolder(props) {
    
    function openFolder(e){
        var musicFiles = e.target.files;
        props.fileListSetter(musicFiles);
    }

    return (
        <div className={styles.folderInput}>
            <label htmlFor="folder">Select .mp3 folder</label>
            <input type="file" id="folder" webkitdirectory="true" multiple onChange={openFolder}/>
        </div>
    );
}

export default ChooseFolder;