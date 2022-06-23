import styles from './Genre.module.css'

function Genre(props) {
    return (
        <span className={styles.genre} key={props.genre}>
            {props.genre}
        </span>
    );
}

export default Genre;