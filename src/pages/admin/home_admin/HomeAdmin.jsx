import HeaderAdmin from '../../../components/admin/HeaderAdmin'
import NavbarAdmin from '../../../components/admin/NavbarAdmin'
import NoelBackground from '../../../components/admin/NoelBackground'
import AdminRouters from '../../../routers/AdminRouters'

const HomeAdmin = () => {
  return (
    <>
        <NoelBackground />
        <div className='md:flex'>
           <NavbarAdmin/>
      <div className="flex-1 min-w-0 overflow-hidden">
           <HeaderAdmin/>
           <AdminRouters />
      </div>
    </div>
    </>

  )
}

export default HomeAdmin