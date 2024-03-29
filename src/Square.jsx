import { useState } from 'react';


function Square(){

  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
  }


  return (
    <button onClick={handleClick} className="square1">{value}</button>
  )
}


export default function Board() {
    return(
      <div>    
     <div className="board-row">
        <Square  />
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className="board-row">
        <Square/>
        <Square/>
        <Square />
      </div>
     </div>

    )
  }