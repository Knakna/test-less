import styles from './Loader.module.less'


export function Loader(props) {


    return (
        <div className={styles.container} style={props.style}>
            44444
            <div className={styles.progressBar}>
                <div className={styles.progress}>

                </div>
            </div>
        </div>
    )
}