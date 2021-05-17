import './App.css';
import {data} from "./data";
import ProfileComponent from './profile/ProfileComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Figure from 'react-bootstrap/Figure';

const  App=()=> {
  const handelName = (fullName) => { alert(`I am ${fullName}`) };
  const styleObject= { backgroundColor:"black"}
  const styleImage= { borderRadius: "360%"}
  
  return (
  
    <div className="App" style={styleObject}>
      {data.map((data) => (
      <ProfileComponent data={data}  handelName={handelName}>
      <Figure.Image width={271} height={180} alt="271x180" style={styleImage}
        src="https://avatars.githubusercontent.com/u/82514715?v=4"/>
      </ProfileComponent>
        ))}
    </div>
  )}
  export default App;
