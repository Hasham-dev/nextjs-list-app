import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        List App
      </div>
      <Link href='/'><a>Home</a></Link>
      <Link href='/about'><a>About</a></Link>
      <Link href='/lists/'><a>Listing</a></Link>
    </nav>
  )
}

export default Navbar
