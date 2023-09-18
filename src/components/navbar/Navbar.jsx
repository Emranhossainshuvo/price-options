import Link from "../Link/Link";

const Navbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/help', name: 'help' }
      ];
      
    return (
        <div>
            <ul className="flex">
            {
                routes.map(route => <Link route={route} key={route.id}></Link> )
            }    
            </ul>                  
        </div>
    );
};

export default Navbar;