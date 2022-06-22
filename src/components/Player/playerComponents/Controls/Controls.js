import styles from './Controls.module.css';
import ControlTypes from './ControlTypes';

function Controls() {
    return (
        <div className={styles.controls}>
            {ControlTypes.map((control) => {
                return (
                    <button key={control.name} name={control.name}>
                        {control.icon}
                    </button>
                );
            })}
        </div>
    );
}

export default Controls;