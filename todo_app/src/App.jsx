import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import List from './List'
import ListFooter from './ListFooter'
import Footer from './Footer'

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <section mv-app="todoapp" className="todoapp"
			mv-bar="none" mv-storage="local"
			mv-autosave="3"
			mv-mode="edit"
			mv-init="#data">
        <Header setTodoList={setTodoList}/>
        <List props={{todoList, setTodoList}}/>
        {todoList.length ? <ListFooter props={{todoList, setTodoList}}/> : <div></div>}
      </section>
      <Footer />
    </div>
  )
}

export default App
