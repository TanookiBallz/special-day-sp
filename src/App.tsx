import { useEffect, useState } from 'react'
import './App.css'

const wishes = [
  'Пусть каждый день начинается с улыбки и ощущения праздника ✨',
  'Пусть мечты становятся планами, а планы — яркой реальностью 🚀',
  'Пусть рядом будут люди, которые вдохновляют и поддерживают 💛',
]

const gifts = ['🎁 Счастье', '🎂 Вкусные моменты', '🌈 Яркие эмоции', '💌 Тёплые слова']

function App() {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      document.documentElement.style.setProperty('--parallax-x', x.toFixed(3))
      document.documentElement.style.setProperty('--parallax-y', y.toFixed(3))
    }

    window.addEventListener('mousemove', onMove)

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

function App() {
  return (
    <main className={`birthday-page ${isOpened ? 'opened' : 'closed'}`}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      {!isOpened ? (
        <section className="intro-screen">
          <div className="sparkles" aria-hidden="true" />
          <p className="eyebrow">special day delivery</p>
          <h1>Тебе пришла праздничная коробка 🎁</h1>
          <p className="subtitle">
            Нажми на коробку, чтобы открыть сюрприз и увидеть открытку.
          </p>

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
          <p className="hint">Кликни для открытия ✨</p>
        </section>
      ) : (
        <>
          <section className="hero-card parallax-layer deep">
            <p className="eyebrow">Happy Birthday</p>
            <h1>С Днём Рождения! 🎉</h1>
            <p className="subtitle">
              Сегодня особенный день — пусть он будет наполнен смехом, теплом и
              волшебством.
            </p>

            <div className="cake-wrap" role="img" aria-label="Праздничный торт со свечами">
              <div className="confetti" aria-hidden="true" />
              <div className="cake">
                <div className="candle candle-one">
                  <span className="flame" />
                </div>
                <div className="candle candle-two">
                  <span className="flame" />
                </div>
                <div className="candle candle-three">
                  <span className="flame" />
                </div>
                <div className="icing" />
                <div className="layer" />
                <div className="plate" />
              </div>
            </div>
          </section>

          <section
            className="message-grid parallax-layer mid"
            aria-label="Пожелания ко дню рождения"
          >
            {wishes.map((wish) => (
              <article className="wish-card" key={wish}>
                {wish}
              </article>
            ))}
          </section>

          <section className="gift-strip parallax-layer top" aria-label="Подарки-пожелания">
            {gifts.map((gift) => (
              <span key={gift} className="gift-pill">
                {gift}
              </span>
            ))}
          </section>

          <div className="balloons" aria-hidden="true">
            <span className="balloon b1" />
            <span className="balloon b2" />
            <span className="balloon b3" />
            <span className="balloon b4" />
            <span className="balloon b5" />
            <span className="balloon b6" />
          </div>
        </>
      )}
    <main className="birthday-page">
      <div className="glow glow-left" aria-hidden="true" />
      <div className="glow glow-right" aria-hidden="true" />

      <section className="hero-card">
        <p className="eyebrow">Happy Birthday</p>
        <h1>С Днём Рождения! 🎉</h1>
        <p className="subtitle">
          Сегодня особенный день — пусть он будет наполнен смехом, теплом и
          волшебством.
        </p>

        <div className="cake-wrap" role="img" aria-label="Праздничный торт со свечами">
          <div className="confetti" aria-hidden="true" />
          <div className="cake">
            <div className="candle candle-one">
              <span className="flame" />
            </div>
            <div className="candle candle-two">
              <span className="flame" />
            </div>
            <div className="candle candle-three">
              <span className="flame" />
            </div>
            <div className="icing" />
            <div className="layer" />
            <div className="plate" />
          </div>
        </div>
      </section>

      <section className="message-grid" aria-label="Пожелания ко дню рождения">
        {wishes.map((wish) => (
          <article className="wish-card" key={wish}>
            {wish}
          </article>
        ))}
      </section>

      <section className="gift-strip" aria-label="Подарки-пожелания">
        {gifts.map((gift) => (
          <span key={gift} className="gift-pill">
            {gift}
          </span>
        ))}
      </section>

      <div className="balloons" aria-hidden="true">
        <span className="balloon b1" />
        <span className="balloon b2" />
        <span className="balloon b3" />
        <span className="balloon b4" />
      </div>
    </main>
  )
}

export default App
