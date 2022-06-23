import Genre from './Genre/Genre';
import styles from './ListItem.module.css'

function ListItem(props) {
    const title = props.item.title;
    const author = props.item.author;
    const genres = props.item.genres;

    return (
        <li className={styles.listItem} key={title}>
            <span className={styles.title}>{author} - {title}</span>
            <div className={styles.genres}>
                {genres.map((genre) => {
                    return <Genre genre={genre}/>
                })}
            </div>
        </li>
    );
}

export default ListItem;