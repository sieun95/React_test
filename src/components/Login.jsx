import axios from 'axios';

/*
    API 설계먼저!! 아주 중요
    프론트 백 순서 상관없음

        back 3500
        front 3000

        post /user/login {userid, userpw} : cookie 생성
        post /user/logout {} : cookie 삭제
 */

const Login = (props) => {

    const handleSubmit = async e => {
        e.preventDefault()      // htmlm 기능을 다 막는다

        const {userid, userpw} = e.target
        try{
            const result = await axios.post('http://localhost:3500/user/login', {
                userid:userid.value,
                userpw:userpw.value,
            }, {
                withCredentials:true,
            })  // async await
            console.log(result.data)
            const {response, error} = result.data
            if(error !== null) return alert(error)

            props.onClick()
        }       
        catch(e) {
            alert('접속불량~')
        }
        // props.onClick() // 백앤드에서 응답이 왔을때.
    }

    return (
        <>
            <h2>로그인 폼</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" name="userid"/>
                <input type="password" name="userpw"/>
                <input type="submit" name="로그인" />
            </form>
        </>
    )
}

export default Login