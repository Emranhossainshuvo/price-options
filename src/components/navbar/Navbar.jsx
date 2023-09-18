import { useState } from "react";
import Link from "../Link/Link";
import { BiMenu } from 'react-icons/bi';
import { TbArrowsCross } from 'react-icons/tb'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/help', name: 'help' }
    ];

    return (
        <nav className=" p-5">
            <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <TbArrowsCross></TbArrowsCross> :
                    <BiMenu></BiMenu>
                }
                
            </div>
            <ul className="md:flex absolute md:static bg-rose-500">
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;