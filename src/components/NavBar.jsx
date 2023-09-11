import Link from "next/link";
import Image from 'next/image';

const NavBar = () => {
    return(
        <nav className=' flex justify-between items-baseline bg-lime-200 px-6 py-4'>
        <Link href="/inicial" className='h-14 w-32'>
          <Image src="/logoCanteiro.png" alt="canteiro"  width={124} height={58}/>
        </Link>

        <ul className='flex gap-12 items-end'>
          <li> <Link href='/inicial' className='text-black text-xl'>Home</Link></li>
          <li> <Link href='/sobre' className='text-black text-xl'>Sobre Nós</Link></li>
          <li> <Link href='/chat' className='text-black text-xl'>Chat</Link></li>
          <li> <Link href='/canteiro' className='text-black text-xl'>Canteiro</Link></li>
        </ul>

        <div className='h-14 w-14 rounded-full overflow-hidden '>
            <img src='https://i.pravatar.cc/100' alt='avatar' />
        </div>
      </nav>
    )
};

export default NavBar;