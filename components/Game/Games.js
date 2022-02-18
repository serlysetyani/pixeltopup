import { produk } from '../../data/game'
import styles from '../../styles/Produk.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const getStaticProps = async () => {
    return {
        props: {
            gamesList
        }
    }
}

const Games = ({ gamesList }) => {
    return (
        <>
            <h2>Game</h2>
            <div className={styles.cardContainer}>
                {produk.map(games =>
                    <div className={styles.cardProduk} key={games.id}>
                        <Link href={'/'}>
                            <a>
                                <Image src={games.fotoProduk} width={200} height={270} className={styles.fotoProduk} alt={games.nama} />
                            </a>
                        </Link>
                        <Link href={'/'}>
                            <a>
                                <p className={styles.namaProduk}>{games.nama}</p>
                            </a>
                        </Link>
                        <p className={styles.hargaProduk}>{games.harga}</p>
                        <div className={styles.discountContainer}>
                            <p className={styles.diskonGame}>{games.diskon}</p>
                            <p className={styles.hargaAsli}>{games.hargaAsli}</p>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default Games;