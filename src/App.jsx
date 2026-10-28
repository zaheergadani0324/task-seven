import React, {useState,useEffect} from 'react'
import UserCard from './components/UserCard.jsx'

const App = () => {
  const [user,setUser]=useState([])
  const [count, setCount] = useState()

useEffect(() => {
  
  async function getData(){
    const response=await fetch(`https://api.github.com/users?per_page=${count}`)
    const result = await response.json()
    setUser(result)
    console.log(result)
  }

  getData()
}, [count])

  
  return (
    <div className='container'>
      <div>
        <input type="text" value={count} onChange={function(e){
          setCount(e.target.value)
        }}/>
      </div>
      <div className='main'>
      
     { user.map(function(user){

      return <UserCard img={user.avatar_url} name={user.login} key={user.id}/>

      })}
    </div>
    </div>
  )
}

export default App
