import React from 'react'
import {Button} from 'react-bootstrap';
import PropTypes from "prop-types";
import Figure from 'react-bootstrap/Figure';

const styleButton= { backgroundColor:"hsla(330, 59%, 58%, 0.726)" , borderColor: "hsla(330, 59%, 58%, 0.726)"}
const ProfileComponent = ({ data,handelName,children}) => {
    
    return (
    <div>
        <Figure>
        {children}
        <Figure.Caption >
            <h1>{data.fullName}</h1> <br/>
            <h2>{data.profession}</h2><br/>
            <p>{data.bio}</p><br/>
            <Button style={styleButton} variant="primary" onClick={() => handelName(data.fullName)}>Say Hi</Button>
        </Figure.Caption>
        </Figure>
    </div>
    )}

ProfileComponent.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
  }),

  handelName: PropTypes.func.isRequired,
};

ProfileComponent.defaultProps = {
  profession: "No Data Description",
};



export default ProfileComponent