import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import NotFound from './pages/NotFound';

// Routes - контейнер маршрутів дозволяє обрати один
// відповідний маршрут і використати його для обробки запиту.

// Кожен маршрут являє собою об'єкт Route.
// Для маршруту встановлюються два атрибути:
// path: шаблон адреси, с яким буде зіставлятися запитана адреса URL.
// element - компонент, який відповідає за обробку запиту за цим маршрутом.
// "/" — це кореневий URL сайту
// Nav - панель навігації завжди видна на всіх сторінках
// Динамічний маршрут /tours/:id, який
// дозволяє передати дані через параметр id
function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours/:id" element={<Tours />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;