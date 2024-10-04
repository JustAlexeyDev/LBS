import {House} from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  return(
    <div className="Footer--Container">
      <Link to="/" className="Footer--Container__button">
        <House />
        <p>Главная</p>
      </Link>

      <Link to="/" className="Footer--Container__button">
        <House />
        <p>Будильник</p>
      </Link>

      <Link to="/" className="Footer--Container__button">
        <House />
        <p>Рейтинг</p>
      </Link>

      <Link to="/" className="Footer--Container__button">
        <House />
        <p>Настройки</p>
      </Link>
      
    </div>
  );
}
export default Footer;