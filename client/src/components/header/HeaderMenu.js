import React from 'react';
import Link from 'next/link'

const HeaderMenu = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/shop">
                            <a>Shop</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderMenu;
