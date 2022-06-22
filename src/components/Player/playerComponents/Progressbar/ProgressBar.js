import { useState, useRef } from 'react';
import styles from './ProgressBar.module.css';
import { FaCircle } from 'react-icons/fa'

function ProgressBar() {
    const progressBarWidthRef = useRef(null);

    const [progress, setProgress] = useState({width: '0%'});
    const [hover, setHover] = useState(false);
    
    function setProgressHandler(e){
        const current = progressBarWidthRef.current;
        const percentage = ((e.clientX - current.offsetLeft) / current.clientWidth * 100).toFixed(0);

        setProgress({width: `${percentage}%`});
    }

    function isHovered(){
        setHover(!hover);
    }

    return (
        <div ref={progressBarWidthRef} 
            className={styles.progressBar} 
            onMouseOver={isHovered} 
            onMouseOut={isHovered} 
            onClick={setProgressHandler}>

            <span className={styles.bar} style={progress} />
            {hover && <FaCircle/>}
        </div>
    );
}

export default ProgressBar;