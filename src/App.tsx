import { useEffect, useState } from 'react'
import './App.css'

const wishes = [
  {
    title: 'Самолётик мечты',
    text: 'Пусть каждый новый день приносит вдохновение, энергию и счастливые моменты.',
  },
  {
    title: 'Самолётик удачи',
    text: 'Пусть все важные решения ведут к победам, а вокруг будут добрые и надёжные люди.',
  },
  {
    title: 'Самолётик радости',
    text: 'Пусть в доме будет уют, в сердце — тепло, а в жизни — много поводов для улыбки.',
  },
  {
    title: 'Самолётик любви',
    text: 'Пусть любовь, забота и поддержка всегда окружают тебя, куда бы ты ни шёл.',
  },
]

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [activeWish, setActiveWish] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0

      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

function App() {
  return (
    <main className={`birthday-page ${isOpened ? 'opened' : 'closed'}`}>
      {!isOpened ? (
        <section className="intro-screen" aria-label="Открыть подарок">
          <button
            className="gift-box"
            type="button"
            onClick={() => setIsOpened(true)}
            aria-label="Открыть подарочную коробку"
          >
            <span className="gift-lid" />
            <span className="gift-ribbon vertical" />
            <span className="gift-ribbon horizontal" />
            <span className="gift-bow" />
            <span className="gift-body" />
          </button>
        </section>
      ) : (
        <>
          <section className="hero scroll-layer layer-top">
            <p className="eyebrow">Birthday Story</p>
            <h1>С Днём Рождения! 🔥🎉</h1>
            <p className="subtitle">
              Скролль вниз: фон и декор двигаются с параллаксом, а пожелания прилетят в
              бумажных самолётиках.
            </p>
          </section>

          <section className="cake-stage scroll-layer layer-mid" aria-label="Праздничный торт">
            <div className="cake">
              <div className="candle candle-left">
                <span className="flame" />
                <span className="glow" />
                <span className="smoke" />
              </div>
              <div className="candle candle-center">
                <span className="flame" />
                <span className="glow" />
                <span className="smoke" />
              </div>
              <div className="candle candle-right">
                <span className="flame" />
                <span className="glow" />
                <span className="smoke" />
              </div>
              <div className="cream" />
              <div className="cake-layer top-layer" />
              <div className="cake-layer bottom-layer" />
              <div className="cake-shadow" />
            </div>
          </section>

          <section className="planes-section scroll-layer layer-low" aria-label="Летающие самолётики">
            <h2>Нажми на самолётик, чтобы открыть пожелание</h2>
            <div className="planes-grid">
              {wishes.map((wish, index) => (
                <button
                  key={wish.title}
                  className={`plane-btn plane-${index + 1}`}
                  onClick={() => setActiveWish(index)}
                  type="button"
                  aria-label={`Открыть пожелание: ${wish.title}`}
                >
                  <span className="plane-shape" aria-hidden="true" />
                  <span className="plane-label">{wish.title}</span>
                </button>
              ))}
            </div>
          </section>

          <div className="balloons" aria-hidden="true">
            <span className="balloon b1" />
            <span className="balloon b2" />
            <span className="balloon b3" />
            <span className="balloon b4" />
          </div>

          {activeWish !== null && (
            <div className="wish-overlay" role="dialog" aria-modal="true">
              <article className="wish-paper">
                <button
                  className="close-wish"
                  type="button"
                  onClick={() => setActiveWish(null)}
                  aria-label="Закрыть пожелание"
                >
                  ×
                </button>
                <h3>{wishes[activeWish].title}</h3>
                <p>{wishes[activeWish].text}</p>
              </article>
            </div>
          )}
        </>
      )}
    </main>
  )
}

export default App
