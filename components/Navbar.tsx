import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/home.svg', alt: 'home'},
  { src: '/assets/icons/history.svg', alt: 'history'},
  { src: '/assets/icons/cart.svg', alt: 'cart'},
  { src: '/assets/icons/notification.svg', alt: 'notification'},
  { src: '/assets/icons/user.svg', alt: 'user'}
]

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav bg-black">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          /> 

          <p className="nav-logo">
            Tracky<span className='text-primary'>Spy</span>
          </p>     

        </Link>  

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div> 



      </nav>
    </header>
  )
}

export default Navbar