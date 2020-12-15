import React from 'react'
import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        const filterValue = document.getElementById('filter').value
        dispatch(filterChange(filterValue))
        // input-field value is in variable event.target.value
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input id="filter" name="filter" onChange={handleChange} />
        </div>
    )
}

export default Filter