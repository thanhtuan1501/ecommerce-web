export default function Footer() {
  return (
    <footer className='py-16 bg-neutral-100'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-1'>
            <div> © 2023 Shopee. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia và Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile
            </div>
          </div>
        </div>
        <div className='text-center text-sm mt-10'>
          <div>Cong ty Bap</div>
          <div className='mt-2'>thong tin 1</div>
          <div className='mt-2'>thong tin 1</div>
          <div className='mt-2'>thong tin 1</div>
          <div className='mt-2'>thong tin 1</div>
          <div className='mt-2'>thong tin 1</div>
        </div>
      </div>
    </footer>
  )
}
