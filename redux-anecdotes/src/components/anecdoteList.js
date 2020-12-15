import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {castVote} from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
const Anecdote = ({anecdote, handleClick}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick= {handleClick}>vote</button>
            </div>
        </div>
    )
}



const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        
        return state.anecdotes.filter(anecdote =>anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })

    const vote = (anecdote) => {
        dispatch(castVote(anecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 5000))
    }
    return(
        <div>
            {anecdotes.sort((a,b) => (a.votes < b.votes) ? 1 : -1).map(anecdote =>
                <Anecdote key={anecdote.id}
                    anecdote = {anecdote}
                    handleClick ={() => vote(anecdote)} />
            )}
        </div>
    )
}

export default AnecdoteList