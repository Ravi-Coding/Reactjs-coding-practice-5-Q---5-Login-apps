// Write your code here
import './index.css'

const Login = props => {
  const {login} = props

  return (
    <div>
      <button className="login-button" type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}
export default Login
