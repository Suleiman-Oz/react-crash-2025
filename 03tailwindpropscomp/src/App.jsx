import './App.css'
import Card from './components/Card'

function App() {

  const cardObj = {
    img: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "From unsplash",
    username: "Suleiman",
    post: "Staff Engineer"
}

  return (
    <>
      <h1 className="text-4xl font-bold text-blue-600">
        Hello Vite + Tailwind + React!
      </h1>
      <Card cardObj={cardObj}/>
    </>
  )
}

export default App
