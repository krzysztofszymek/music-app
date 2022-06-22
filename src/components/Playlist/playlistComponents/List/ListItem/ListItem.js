import styles from './ListItem.module.css'

function ListItem(props) {
    const name = props.item.name.split(".mp3");
    const src = URL.createObjectURL(props.item);

    console.log(props.item);
    return (
        <li className={styles.listItem} key={name}>
            {name}
            {/*<audio controls id="yourMusic" src={src}></audio>*/}
        </li>
    );
}

export default ListItem;