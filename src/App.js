import React, { useReducer } from 'react';

const initialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE TEXT INPUT":
        return {
          ...state,
          [action.field]: action.payload,
        }
      case "toggle consent":
        return {
          ...state,
          hasConsented:!state.hasConsented
        }
      default:
        return state;
      }
    }
  
function App() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleTextChange =(e) => {
    dispatch({
      type: "HANGLE TEXT INPUT",
      field: e.target.value,
      payload: e.target.value
    })
  }

  return (
    <div className="App">
     <form>
       <label>
         Username:
       </label>
       <input
       type="text"
       name="username"
       value={formState.username}
       onChange={(e)=>handleTextChange(e)}
       />
     </form>
    </div>
  );
}

export default App;
