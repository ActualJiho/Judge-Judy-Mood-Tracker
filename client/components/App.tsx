import Footer from './Footer'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import Main from './Main'
import { SetStateAction, useState } from 'react'
import Navbar from './Navbar'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (formName: SetStateAction<string>) => {
    setCurrentForm(formName)
  }
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Main />
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      <Footer />
    </div>
  )
}

export default App
