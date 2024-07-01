import Link from "next/link"
import MobileMenu from "./MobileMenu"


const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="">
        <Link href='/' className="font-bold text-xl text-blue-500" >SOCIOSCROLLS</Link>
      </div>

      {/* CENTER */}
      <div className=""></div>
      {/* RIGHT */}
      <div className="">
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar
