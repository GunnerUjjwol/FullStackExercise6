const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION' :
            return (`${action.data}`)
        case 'REMOVE_NOTIFICATION' :
            return ''
        default :
        return state;
    }
    
}

export const setNotification = (content, timeToDisplay) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: content
          })
        setTimeout(() => dispatch({
            type: 'REMOVE_NOTIFICATION',
            data: ''
          }), timeToDisplay)
      }
    
}

// export const removeNotification = () => {
//     return {
//         type: 'REMOVE_NOTIFICATION',
//         data: ''
//     }
// }

export default notificationReducer