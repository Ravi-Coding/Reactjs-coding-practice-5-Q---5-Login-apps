// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <div>
      <button className="logout-button" type="button" onClick={logout}>
        Logout
      </button>
    </div>
  )
}
export default Logout
