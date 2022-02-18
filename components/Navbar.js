import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.svg" width="127" height="77" />
            </div>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/game/'}><a>Game</a></Link>
            <Link href="/topup"><a>Top up</a></Link>
            <Link href="/kontak"><a>Kontak</a></Link>
        </nav>
    );
}

export default Navbar;