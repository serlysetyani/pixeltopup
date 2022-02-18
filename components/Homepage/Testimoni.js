import { testimoni } from "../../data/Testimoni";
import styles from "../../styles/Home.module.css"
import Image from "next/image";

export const getStaticProps = async () => {
    return {
        props: {
            testimoniList
        }
    }
}

const Testimoni = (testimoniList) => {
    return (
        <>
            <h2>Testimoni</h2>
            <div className={styles.testimoniContainer}>
                {testimoni.map(testimonials =>
                    <div className={styles.cardTestimoni} key={testimonials.id}>
                        <div className={styles.userProfil}>
                            <Image src={testimonials.imgUser} width={60} height={60} className={styles.userImg} />
                            <p>{testimonials.namaUser}</p>
                        </div>
                        <p className={styles.userReview}>{testimonials.review}</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Testimoni;