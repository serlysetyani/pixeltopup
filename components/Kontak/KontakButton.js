import Link from 'next/link';
import styles from '../../styles/Kontak.module.css'
const KontakButton = () => {
    return (
        <>
            <h2>Find Pixel Top up on:</h2>
            <div className={styles.linkContainer}>
                <Link href={"https://api.whatsapp.com/send/?phone=62895342700030&text&app_absent=0"}>
                    <a>
                        <p>Find me on Whatsapp</p>
                    </a>
                </Link>
            </div>
            <div className={styles.linkContainer}>
                <Link href={"https://www.instagram.com/pixel.topup/"}>
                    <a>
                        <p>Find me on Instagram</p>
                    </a>
                </Link>
            </div>
            <div className={styles.linkContainer}>
                <Link href={"https://steamcommunity.com/id/apolluke/"}>
                    <a>
                        <p>Add Pixel on Steam</p>
                    </a>
                </Link>
            </div>
        </>
    );
}

export default KontakButton;