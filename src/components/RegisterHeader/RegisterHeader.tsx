import { Link } from 'react-router-dom'

export default function RegisterHeader() {
  return (
    <header className='py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-start items-center'>
          <Link to='/'>
            <img className='h-8 lg:h-11 ' src="https://d1zqp7au6yhc2p.cloudfront.net/5sfdQFGViZ-space/photo_335fd86475b2ffcfcccd1eeadf8fab5a/128x128.png" alt="" />
          </Link>
          <div className="ml-5 text-xl lg:text-2xl">Dang Ky</div>
        </nav>
      </div>
    </header>
  )
}
