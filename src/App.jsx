import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'

function App() {
  const cards = data.map(item => {
    console.log(item.price);
    return <Card key={item.id} {...item} />
  })

  return (
    <>
      <div className="card">
        <Header />
        <main>
          <Hero />
          {cards}
        </main>
      </div>
    </>
  )
}

export default App
