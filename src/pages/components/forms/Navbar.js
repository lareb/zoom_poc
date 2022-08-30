import Link from 'next/link';

const Navbar = () =>{
    return (<div className='navbar'>
        <ul>
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
              <Link href="/">
                <a>about</a>
                </Link>
            </li>
            <li>
            <Link href="/">
                <a>company</a>
                </Link>
            </li>
            <li style={{ float : "right"}}>
            <Link href="/signin">
                <a>Sign In</a>
                </Link>
            </li>
        </ul>
    </div>);

};

export default Navbar;