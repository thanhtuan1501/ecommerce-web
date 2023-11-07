import Footer from '~/components/Footer'
import RegisterHeader from '~/components/RegisterHeader/RegisterHeader'

interface props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
