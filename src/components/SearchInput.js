import { useState } from 'react';
import {  FaSearch   } from 'react-icons/fa';
import styled from 'styled-components'

const InputContainer = styled.form`
display: flex;
align-items : center;
width : 40%;
// background-color: white;


@media (max-width: 900px) {
  margin: auto;
  width : 100%;
}
`

const Input = styled.input `
height: 45px;
flex: 1;
// background-color: transparent;
color: black;
border: none;
padding-left: 8px;

&::placeholder {
  font-weight: bold;
  // color: rgba(0, 0, 0, 0.8);
}

&:focus{
  outline: none;
}

`

function SearchInput({ onSearch }) {

  const [searchTerm, setSearchTerm] = useState('');


  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      onSearch(''); // Load all data when the input is cleared
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    onSearch(searchTerm); // Call the onSearch function with the searchTerm
   
  };

    return (

      <InputContainer className='InputContainer' onSubmit={handleSubmit}>
        <FaSearch style={{
            fontWeight: '400',
            marginLeft: '15px',
            marginRight: '15px'
        }}/>
        <Input 
        className='input' id="username" 
        type="text" 
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleChange}/>
      </InputContainer>
    );
  }
  

export default SearchInput