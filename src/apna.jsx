// import PropTypes  from "prop-types";
import { useState } from "react";

function Apna(props) {
  
const [state, setState] = useState("usama")


function onClick(){
  console.log(state)
  setState("waqas")
   props.getdata(state)
  
    
  }

  return (
    <>
   <div>
      <button onClick={onClick}>Click Here </button>
    </div>

    </>
  )
}
// Apna.propTypes = {
//     name: PropTypes.string.isRequired
//   }

export default Apna;