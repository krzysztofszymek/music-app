import styles from './List.module.css'
import ListItem from './ListItem/ListItem';

function List(props) {
    const data = props.fileList;

    function listItems(){
        var list = [];
        data.forEach((item) => {
            const newItem = <ListItem item={item} />
            list.push(newItem);
        });
        return list;
    }

    return (
        <ul className={styles.list}>
            {data == null ? null : listItems()}
        </ul>
    );
}

export default List;