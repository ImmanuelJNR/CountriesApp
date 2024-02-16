import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import styled from 'styled-components';

const DropDownContainer = styled.div`
width: 60%;
max-width: 250px;
position: relative;
z-index: 1;
@media (max-width: 900px) {
  // margin-left: auto; 
  margin-top: 30px
}
`
const Drop = styled.div`
display: flex;
justify-content: space-between;
padding: 15px;
margin-bottom: 8px;
border-radius: 10px;
`
const Dropdown = styled.ul`
// background-color: #ffff;
transition: all ease 3s;
width: 100%;
position: absolute;
border-radius: 8px;
font-weight: bold;
`
const Dropdownlist = styled.li`
padding-top: 10px ;
padding-bottom: 10px;
padding-left: 20px;
cursor: pointer;
list-style: none;

// &:hover {
//   border: 1px solid #FAFAFA;
// }
`


function DropdownMenu({setSelectedCategory}) {
  const [isOpen, setIsOpen] = useState(false);
  

  function dropMenuDown() {
    setIsOpen(!isOpen);
  }


  function handleCategorySelect(category) {
    setSelectedCategory(category);
    setIsOpen(false);
  }
    return (
      <DropDownContainer >
        <Drop className= 'drop'>
          <h4>Filter By Category</h4>
          <FaCaretDown onClick={dropMenuDown}/>
        </Drop>
        {isOpen && (
        <Dropdown className= 'drop'>
            <Dropdownlist onClick={() => handleCategorySelect('Africa')}>Africa</Dropdownlist>
            <Dropdownlist onClick={() => handleCategorySelect('Asia')}>Asia</Dropdownlist>
            <Dropdownlist onClick={() => handleCategorySelect('Europe')}>Europe</Dropdownlist>
            <Dropdownlist onClick={() => handleCategorySelect('America')}>America</Dropdownlist>
            <Dropdownlist onClick={() => handleCategorySelect('Oceania')}>Oceania</Dropdownlist>
            {/* <Dropdownlist onClick={() => handleCategorySelect('Australia')}>Australia</Dropdownlist>
            <Dropdownlist onClick={() => handleCategorySelect('Antarctica')}>Antarctica</Dropdownlist> */}
        </Dropdown>

        )}

      </DropDownContainer>
      
    );
  }
  

export default DropdownMenu