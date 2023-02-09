import Reactdom from 'react-dom'
const root=Reactdom.createRoot(document.getElementById('root'));
function formatname(user){
  return firstname +''+ lastname;  
}
const user={
  firstname:"jobin",
  lastname:"jose007"



}
const Element= (
  <h1>
    hello,{formatname}
  </h1>

)
