import styles from './List.module.css'
import ListItem from './ListItem/ListItem';

function List(props) {
    const files = props.fileList;

    function listItems(){
        var list = [];
        for(let i = 1; i < files.length; i++){
            const newItem = <ListItem item={files[i]} />
            list.push(newItem);
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