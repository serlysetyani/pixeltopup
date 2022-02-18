import Image from "next/image";
import styles from "../../styles/Home.module.css"

const Jumbotron = () => {
    return (
        <div className={styles.jumbotronContainer}>
            <div>
                <h1>Your Ultimate<br />Game Top Up Buddy</h1>
                <p className={styles.jumbotronDesc}>Menyediakan berbagai game dan voucher top up dengan harga terjangkau.</p>
                <button className={styles.jumbotronCTA}>Pesan sekarang!</button>
            </div>
            <Image src="/jumbotron.svg" width={600} height={434} />
        </div>
    );
}

export default Jumbotron;