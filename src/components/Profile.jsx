const Profile = (props) => {

    const handleClick = e => {
        e.preventDefault()
        props.onClick()
    }
    return (
        <>
            <h2>회원정보</h2>
            XXX님 환영합니다 
            <a href="#" onClick={handleClick}>로그아웃</a>
        </>
    )
}

export default Profile