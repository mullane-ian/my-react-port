import React, {useState} from "react";
import Modal from 'react-modal'
Modal.setAppElement('#root')
export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [buttonLabel, setButtonLabel] = useState('Contact')
  return (
    <header>
      <div className='header-inner'>
        <a className='logo'>Ian M.</a>
        <nav>
          <ul>
            <li>
              <a href='/'>about</a>
            </li>
            <li>
              <a href='/about'>Work</a>
            </li>
            {/* <li className='btn'>
              <a href='/'>Contact</a>
            </li> */}
            <li>
            <button className="btn"onClick={()=>{
                if(buttonLabel==="Contact"){
                  setButtonLabel('Close')
                  setModalIsOpen(true)
                }else{
                  setModalIsOpen(false)
                  setButtonLabel('Contact')
                  
                }
                
              }
            }>{buttonLabel}</button>
            </li>
          </ul>
        </nav>
      </div>
      <Modal 
        closeTimeoutMS={2000}
        isOpen={modalIsOpen} 
        onRequestClose={()=>{
          setButtonLabel('Contact')
          setModalIsOpen(false)
        }}
        style={
          {
              overlay: {
              backgroundColor:'grey'
            },
          
            content: {
              display: 'flex',
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'column',
              top:'25%',
              left:'25%',
              width:'50vw',
              height:'50vh',


              
              color: 'orange'
            }
          
          }
        }  
      >
        <h1>Ian</h1>
        <h3></h3>
        <h3>mullane.ian@outlook.com</h3>
        <div>
         

        </div>
      </Modal>
    </header>
  );
}
