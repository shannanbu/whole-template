import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import "../root.scss"

const root = ReactDOM.createRoot(document.querySelector('#root'))

const Root: React.FC = () => {
  return <div>react</div>
}

root.render(<Root />)
