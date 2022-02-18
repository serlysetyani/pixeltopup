import Image from "next/image";
import Link from "next/link";
import styles from '../../styles/Home.module.css'

const CTA = () => {
    return (
        <div>
            <div className={styles.containerCTA}>
                <p>Ready to be a<br />Champion?</p>
                <button>Pesan sekarang!</button>
            </div>
        </div>
    );
}

export default CTA;