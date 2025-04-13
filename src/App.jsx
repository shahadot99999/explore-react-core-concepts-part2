
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Rendern from './Rendern';
import Team from './Team';
import Users from './Users';
import Splitting from './Splitting';
import Rendering from './Rendering';
import RecipeList from './RecipeList';

function App() {
 

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 =()=>{
    alert('button 2 clicked');
  }

  const addToFive =(num)=>{
    alert(num + 5);
  }

  return (
    <>
      
      <h1>Vite + React</h1>

       <RecipeList></RecipeList>

       {/* <Rendering></Rendering> */}
      
       {/* <Splitting></Splitting> */}

      <Rendern></Rendern>

       <Friends></Friends>

      <Users></Users>

      <Team></Team>
          
          <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      <button onClick={()=>addToFive(3)}>Four</button>
     
    </>
  )
}

export default App
