import Link from 'next/link'

const Nav = () => {
    return (
        <nav className="nav p-3 border-bottom">
            <Link href="/" passHref>
                <h2 className="pointer">Madre de Deus</h2>
            </Link>

            <Link href="/historia" passHref>
                <p className="ms-5 pointer lead my-auto">História</p>
            </Link>

            <Link href="/brigida" passHref>
                <p className="ms-5 pointer lead my-auto">Brígida</p>
            </Link>

            <Link href="/blog" passHref>
                <p className="ms-5 pointer lead my-auto">Blog</p>
            </Link>
        </nav>

    )
}

export default Nav