import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { createElement } from 'react';

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to visit google",
  if(username === 'suleiman' ? "yes": "no")
};

function MyApp(){
  return (
    <div>
      <h1>Hello Custom React App </h1>
    </div>
  )
}

const AnotherElement = (
  <a href="http://google.com" target="_blank" rel="noopener noreferrer">Google</a>
)

const ActreactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visti google',

)

createRoot(document.getElementById('root')).render(
  //  <App />
  // <MyApp />
  // MyApp() // not recommended this
  // <AnotherElement /> // not working
  // AnotherElement() // not working
  // AnotherElement // working
  // createElement // react doesnot undestand coz react doesnot know what is this type , this is my custom react , i made it up. how react understand ? - use React lang (React.creatElemant )
// ActreactElement
)
