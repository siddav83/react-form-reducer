
import formReducer from './formReducer'
import { useReducer } from "react";
// import "./styles.css"

const initialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
  };

const Form = () => {
    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleTextChange = (e) => {
      dispatch({
        type:"HANDLE INPUT TEXT",
        field: e.target.name,
        payload: e.target.value,
      });
    };
    return(
      <form>
        <label>
          Password:
          <input
          type="text"
          name="password"
          value={formState.password}
          onChange={(e)=> handleTextChange(e)} />
        </label>
        <label>
          Username:
          <input
          type="text"
          name="username"
          value={formState.username}
          onChange={(e)=> handleTextChange(e)} />
        </label>
        <label>
          Consent to Terms and conditions
          <input
          type="checkbox"
          checked={formState.hasConsented}
          onChange={(e)=> dispatch({type: "TOGGLE CONSENT"})} />
        </label>
      </form>

    )
  }

  export default Form