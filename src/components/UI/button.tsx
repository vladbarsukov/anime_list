import React, {FC, SyntheticEvent} from 'react';
import styles from './button.module.css'


interface IButtonProps {
    onClick: (e: SyntheticEvent) => void
    textContent: string
}
const Button: FC<IButtonProps> = ({onClick, textContent}) => {

    return (
            <button onClick={onClick} className={styles.container}>
                <h3 className={styles.textContent}>{textContent}</h3>
            </button>
    );
};

export default Button;