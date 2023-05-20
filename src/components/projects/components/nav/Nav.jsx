import React from 'react'

const Nav = ({ category, setCategory }) => {
    return (
        <>
            <input
                type='button'
                value={'landing'}
                onClick={() => setCategory('landing')}
                className={category == 'landing' ? 'active' : null}
            />
            <input
                type='button'
                value={'react'}
                onClick={() => setCategory('react')}
                className={category == 'react' ? 'active' : null}
            />
            <input
                type='button'
                value={'javascript'}
                onClick={() => setCategory('javascript')}
                className={category == 'javascript' ? 'active' : null}
            />
        </>
    )
}

export default Nav