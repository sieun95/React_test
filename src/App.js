import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState } from 'react'

// 조건부 랜더링
// 특정한 값이 true일때는 a 컴포넌트가 나오고, fales일때는 b 컴포넌트
// 삼항연산자 조건 ? 진실 : 거짓
function App() {
  const [isLogin, setIsLogin] = useState(false)

  const clickToggle = () => {
    setIsLogin(!isLogin) // isLogin true -> false / false -> true
  }

  return (
    <>
    {
      isLogin
      ? <Profile onClick={ clickToggle } />
      : <Login onClick={ clickToggle } />
    }
    </>
  );
}

export default App;
