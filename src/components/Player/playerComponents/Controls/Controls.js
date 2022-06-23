import styles from './Controls.module.css';
import ControlTypes from './ControlTypes';
import Button from './Button';

function Controls() {
    return (
        <div className={styles.controls}>
            {ControlTypes.map((control) => {
                return (
                    <Button control={control}/>
                );
            })}
        </div>
    );
}

export default Controls;