import Image from 'next/image';
import styles from '../../styles/Home.module.css'

const Partner = () => {
    return (
        <div className={styles.partnerContainer}>
            <p className={styles.partnerTitle}>PARTNER KAMI</p>
            <div className={styles.partnerLogo}>
                <Image src={"/origin.svg"} width={200} height={80} />
                <Image src={"/pubg.svg"} width={200} height={80} />
                <Image src={"/steam.svg"} width={200} height={80} />
                <Image src={"/tencent.svg"} width={200} height={80} />
            </div>
        </div>
    );
}

export default Partner;