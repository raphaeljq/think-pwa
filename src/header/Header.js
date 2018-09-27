import React from 'react'
import {Jumbotron, Container} from 'reactstrap'

const Header = (props) =>{
   
    return (
        <div>
        <Jumbotron data-css3 fluid>
          <Container data-centro fluid>
            
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </Container>
        </Jumbotron>
      </div>
    )
}
export default Header