import {CircleUser, Bell} from "lucide-react"

const Header = () => {
  return(
    <div className='Header--Container'>

      <button className='kinich'>
        <CircleUser color="#fff"/>
      </button>

      <div className='kinich'>
        <p>Главная</p>
      </div>

      <button className='kinich'>
        <Bell  color="#fff" />
      </button>

    </div>
  );
}
export default Header;