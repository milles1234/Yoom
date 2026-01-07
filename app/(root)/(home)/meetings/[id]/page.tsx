import React from 'react'

const Meetings = ({params} : {params : {id: string}}) => {
    return (
        <div>
        Meetings : #{params.id}
        </div>
    )
}

export default Meetings