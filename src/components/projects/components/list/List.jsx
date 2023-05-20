import React from 'react'

const List = ({ category, appList }) => {
    return (
        <div className="list">
            {
                appList.filter(el => el.category == category).map(el => {
                    return <div>
                        <h1>{el.name}</h1>
                    </div>
                })
            }
        </div>
    )
}

export default List