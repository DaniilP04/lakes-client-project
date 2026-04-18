import Link from 'next/link';
import { ProtectedShell } from '@/components/ProtectedShell';
import { PageHeader } from '@/components/PageHeader';
import { KpiCard } from '@/components/KpiCard';

export default function HomePage() {
  return (
    <ProtectedShell>
      <div className="stack">
        <section className="card stack" style={{ padding: '30px' }}>
          <div className="eyebrow">Lakes Client</div>

          <div className="page-header align-start">
            <div style={{ maxWidth: 760 }}>
              <h1 className="page-title">Система мониторинга озёр Северного Казахстана</h1>
              <p className="page-description">
                Клиентская часть платформы для просмотра водоёмов на карте, изучения паспортных
                данных и анализа показателей качества воды по накопленным измерениям.
              </p>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn" href="/water-bodies">
                Открыть карту
              </Link>
              <Link className="btn secondary" href="/profile">
                Перейти в профиль
              </Link>
            </div>
          </div>
        </section>

        <section className="grid cards-3">
          <KpiCard
            title="Карта водоёмов"
            value="Обзор"
            hint="Откройте интерактивную карту и выберите интересующий объект."
          />
          <KpiCard
            title="Карточка озера"
            value="Паспорт"
            hint="Просматривайте основные характеристики, координаты и сведения о водоёме."
          />
          <KpiCard
            title="Аналитика"
            value="Графики"
            hint="Изучайте динамику показателей воды по выбранному параметру и периоду."
          />
        </section>

        <section className="card stack">
          <PageHeader
            title="Для чего нужна эта система"
            description="Платформа помогает собрать в одном месте карту, карточки водоёмов и историю измерений для удобного наблюдения за состоянием озёр."
          />

          <div className="details-grid">
            <div>
              <strong>Наблюдение:</strong> быстрый доступ к списку и расположению водоёмов.
            </div>
            <div>
              <strong>Анализ:</strong> просмотр параметров воды и визуализация изменений во времени.
            </div>
            <div>
              <strong>Удобство:</strong> единая точка входа для карты, профиля и страницы конкретного озера.
            </div>
            <div>
              <strong>Прозрачность данных:</strong> вся информация берётся из backend-сервиса и отображается в удобном виде.
            </div>
          </div>
        </section>

        <section className="card">
          <div className="page-header">
            <div>
              <h2 className="section-title">Быстрые переходы</h2>
              <p className="page-description no-margin">
                Выберите раздел, с которого хотите начать работу.
              </p>
            </div>
          </div>

          <div
            className="details-grid"
            style={{ marginTop: 16 }}
          >
            <Link href="/water-bodies" className="card" style={{ padding: 18 }}>
              <h3 className="no-margin">Карта озёр</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                Перейти к списку водоёмов и интерактивной карте.
              </p>
            </Link>

            <Link href="/profile" className="card" style={{ padding: 18 }}>
              <h3 className="no-margin">Личный кабинет</h3>
              <p className="muted" style={{ marginTop: 8 }}>
                Посмотреть данные текущего пользователя и профиль.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </ProtectedShell>
  );
}