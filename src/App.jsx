import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return <Card key={item.id} {...item} />
  })

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Hero />
          <div className='cards'>
            {cards}
          </div>
        </main>
      </div>
    </>
  )
}

export default App
