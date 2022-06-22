import styles from './List.module.css'

function List(props) {
    const files = props.fileList;

    console.log(files);

    function listItems(){
        var list = [];

        for(let i = 1; i < files.length; i++){
            var newItem = <li key={files[i].name}>
                                {files[i].name}
                           </li>
            list = [...list, newItem];
        }

        return list;
    }

    return (
        <ul className={styles.list}>
            {files == null ? null : listItems()}
        </ul>
    );
}

export default List;