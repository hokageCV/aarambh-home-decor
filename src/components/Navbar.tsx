export default function Navbar() {
    return (
        <nav className='navbar bg-navBG text-navText'>
            <div className='navbar-start'>
                <div className='flex flex-row items-center justify-center'>
                    <img src='/logo.svg' alt='menu icon' className='h-7 w-7' />
                    <a className='ml-2 normal-case text-xl'>Aarambh Home Décor</a>
                </div>
            </div>
            <div className='navbar-end'>
                {/* menu in lg screen  */}
                <div className=' hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>
                        <MenuItems />
                    </ul>
                    <a className='btn bg-btnBG text-btnText'>Login</a>
                </div>
                {/*  hamburger menu */}
                <div>
                    <div className='dropdown dropdown-end'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <img src='/svg/menu.svg' alt='menu icon' className='h-5 w-5' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 p-2 shadow bg-navBG rounded-box w-40'
                        >
                            <MenuItems />
                            <a className='btn bg-btnBG text-btnText'>Login</a>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function MenuItems() {
    return (
        <>
            <li className='m-1 lg:mx-4'>Home</li>
            <li className='m-1 lg:mx-4'>Contact Us</li>
        </>
    );
}
