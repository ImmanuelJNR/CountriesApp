import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../App';


const H1 = styled.h1 `
// color: black;
font-size: 1.5rem;
`
const Div1 = styled.div `
width: 100%;
padding: 20px 5%;
// background-color: #ffff;
display: flex;
justify-content: space-between;
position: sticky;
top: 0;
z-index: 100;
`

const Subdiv =  styled.div `
display: flex;
align-items: center;
cursor: pointer;
`
const Span = styled.div`
// color: black;
@media (max-width: 900px) {
    display: none; 
}
`
function Header({toggleTheme}) {

  const { theme } = useContext(ThemeContext);
  
  // const headerStyle = {
  //   backgroundColor: theme === 'dark' ? '#000080' : '#f4f4f4',
  //   color: theme === 'dark' ? '#fff' : '#000080',
  //   padding: '10px',
  //   // Add other styles as needed
  // };

    return (
      <Div1 className='header-container'>
        <H1>Where in the World ?</H1>

        <Subdiv onClick={toggleTheme} checked={theme === 'dark'}>
        <FaMoon/>
            <Span>Dark Mode</Span>
        </Subdiv>
      </Div1>
    );
 }
  

export default Header