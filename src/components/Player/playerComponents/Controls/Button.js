import styles from './Button.module.css'

function Button(props) {
    return (
        <button 
            className={styles.button}
            key={props.control.name} 
            name={props.control.name} 
        >
            {props.control.icon}
        </button>
    );
}

export default Button;