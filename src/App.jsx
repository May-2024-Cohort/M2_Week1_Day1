
import "./style.css"

import catPicture from './cat.jpeg'


import Navbar from './components/Navbar'

import Name from './components/Name'





/* 

command to create a react application: 

    1. npm create vite name-of-application
    2. npm i


index.html: the single page that the components get rendered in

main.jsx: the jsx file where we render the components in the index.html in the root div

app.jsx: a component that is being rendered in main.jsx

command to run my react application: npm run dev


*/


function App() {

  let myName = {
    firstName: "Mikko"
  }

  function click(){
    alert("Button has been clicked")
  }

  /* 
  
  Exercise:

  1. Create a Name.jsx component that contains your name in a variable

  2. the component should display the name in the jsx in an h2

  3. export the component and import in app.jsx

  4. render the component on the page

  */

  return (

    <div>

      <Navbar></Navbar>

      <h1 className="h1s">my name is {myName.firstName.toUpperCase()}</h1>
      <p id="first-p">My Paragraph</p>

      <img src={catPicture} alt="" />

      <button onClick={click}>Click me</button>



    </div>
  )
}

export default App
