import './App.css'

const wishes = [
  'Пусть каждый день начинается с улыбки и ощущения праздника ✨',
  'Пусть мечты становятся планами, а планы — яркой реальностью 🚀',
  'Пусть рядом будут люди, которые вдохновляют и поддерживают 💛',
]

const gifts = ['🎁 Счастье', '🎂 Вкусные моменты', '🌈 Яркие эмоции', '💌 Тёплые слова']

function App() {
  return (
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
