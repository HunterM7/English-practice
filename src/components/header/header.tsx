import { Link } from "react-router-dom";
import './header.scss';

export function Header() {
  return (
    <header className="header">
      <Link to='/' className="header__logo">Logo</Link>
      <div className='header__menu'>
        <Link to='lessons' className="header__menu-link">Уроки</Link>
        <Link to='profile' className="header__menu-link">Профиль</Link>
      </div>
    </header>
  )
}