import React, {useEffect} from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdotesList from './components/anecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'



const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, []) 
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification/>
      <AnecdotesList />
      <AnecdoteForm />
    </div>
  )
}

export default App