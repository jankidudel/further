import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import Reversals from './src/reversals'

function App() {
    return <StrictMode>
        <Reversals />
    </StrictMode>
}

ReactDOM.render(<App />, document.querySelector('#root'))