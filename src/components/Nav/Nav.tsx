import { NavLink } from 'react-router-dom';
import './Nav.css';

// Цю функцію викликає сам компонент NavLink
// Параметр { isActive } він теж передає сам.
// const isActive = currentUrl === linkUrl
// const className = setActive({ isActive })

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'active' : '';

// Для створення посилання застосовується об'єкт NavLink,
// який визначений у модулі react-router-dom
function Nav() {
  return (
    <nav>
      <NavLink to="/" className={setActive}>Головна</NavLink>
      <NavLink to="/about" className={setActive}>Про сайт</NavLink>
      <NavLink to="/tours/1" className={setActive}>Авіатури</NavLink>
      <NavLink to="/tours/2" className={setActive}>Круїзи</NavLink>
      <NavLink to="/tours/3" className={setActive}>Автобусні тури</NavLink>
    </nav>
  );
}

export default Nav;