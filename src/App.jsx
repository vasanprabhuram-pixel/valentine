import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {


  const navigate=useNavigate();

  return (
    <div className='love'>
      <div className='ques'>
        <h2>Will you be my valentine?</h2>
      </div>     
      <div className='button'>
          <button className='yes' onClick={()=>navigate("view")}>Yes</button>
          <button className='no'>No</button>
      </div>
      
    </div>
  );
}

export default App;


