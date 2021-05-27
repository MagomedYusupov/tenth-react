import {useState} from "react";

function App() {

  const[passwordOne,setPasswordOne]=useState('')
  const[passwordTwo,setPasswordTwo]=useState('')
  const [window, setWindow]= useState()

  const handlePasswordOne=(e)=>{
    setPasswordOne(e.target.value)
  }
  const handlePasswordTwo=(e)=>{
    setPasswordTwo(e.target.value)
  }


  const handleCheck=()=>{
    if (setPasswordOne === setPasswordTwo){
       return setWindow("Корректно");
    }else setWindow("Ошибка")
  }
  return (
<div className="app">
  <div className="main">
  <input placeholder="Введите пароль" type="text" value={passwordOne}onChange={handlePasswordOne} />
  </div>
  <div className="main">
  <input placeholder="Повторите пароль" type="text" value={passwordTwo} onChange={handlePasswordTwo}/>
  </div>
  <div className="btn">
    <button onClick={handleCheck}>Проверить</button>
  </div>
  <div className="window">
    {window}
  </div>
</div>
  );
}

export default App;
