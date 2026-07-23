import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App | Neetu</h1>
    </div>
  )
}

/*const ReactElement ={
    type: "a",
    props : {
        href: 'https://google.com',
        target: ' _blank'
    },
    Children: 'Click me to visit Google'
}*/

const anotherElement =(
  <a href = 'https://google.com' target='_blank'>visit Google</a>
)

const anotherUser = "Neetu kanoujiya"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit Google',
  anotherUser

)

createRoot(document.getElementById('root')).render(

    reactElement
  
)
