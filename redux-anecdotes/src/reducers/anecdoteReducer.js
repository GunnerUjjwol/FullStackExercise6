import anecdoteService from '../services/anecdotes'
import { removeNotification } from './notificationReducer'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data ]
    case 'INIT_ANECDOTES':
      return action.data
    case 'CAST_VOTE':
      const id = action.data.id;
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {...anecdoteToChange , votes: anecdoteToChange.votes + 1}
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    default:
      return state
  }
}


export const castVote = (anecdote) => {
  return async dispatch => {
    const anecdoteWithAddedVote = {...anecdote, votes: anecdote.votes + 1}
    const changedAnecdote = await anecdoteService.addVote(anecdoteWithAddedVote)
    dispatch({
      type: 'CAST_VOTE',
      data: {id: anecdote.id}
    })
  }
}
        
export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default anecdoteReducer
