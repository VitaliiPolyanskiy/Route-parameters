import { useParams } from 'react-router-dom';

export default function Tours() {
  // useParams — це хук React Router, який
  // дозволяє отримати параметри маршруту з URL.
  const { id } = useParams<{ id: string }>();

  return (
    <section className="page-card">
      <span className="page-badge">Динамічний маршрут</span>
      <h2>Тур № {id}</h2>
      <p className="page-lead">Обраний ідентифікатор маршруту: {id}.</p>
    </section>
  );
}