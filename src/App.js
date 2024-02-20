import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation} from "react-router-dom";
import DropdownMenu from "./components/Dropdown.js";
import SearchInput from "./components/SearchInput.js";
import Header from "./components/Header.js";
import styled from 'styled-components';
import Fetch from "./components/Fetch.js";
import CountriesFullDetail from "./components/Details.js";

import {createContext} from "react";

export const ThemeContext = createContext(null)

const Group1 = styled.div `
display: flex;
justify-content: space-between;
flex-direction: row;
width: 90%;
margin-top: 50px;



@media (max-width: 900px) {
  margin-top: 30px;
  flex-direction: column;
}
`

const AppContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: normal;
align-items: center;
height: 100%;
`

const Div = styled.div `
width: 100%; 
display: flex;
flex-direction: column;
justify-content: normal;
align-items: center;
height: 100vh;
overflow: auto;
scrollbar-width: none;

&::-webkit-scrollbar {
  width: 0; /* Hide the scrollbar */
}


`


function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  // const navigate = useNavigate();
  // const location = useLocation(); // Get current location using useLocation hook
  // const isCountryDetailRoute = location.pathname.startsWith('/country');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // You can perform your search action here, like fetching data based on the search term
    console.log('Searching for:', term);
  };

  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }


  

  return (
    <Router>
      <ThemeContext.Provider value={{theme, toggleTheme}}>

            <AppContainer className="app" id={theme}>
          
                <Header toggleTheme={toggleTheme} />
          <Routes>
              <Route    path="/"
              
              element={
                <>
                
                <Div className="div">
                  <Group1>
                    <SearchInput onSearch={handleSearch} />
                    <DropdownMenu setSelectedCategory={setSelectedCategory} />
                  </Group1>
                  <Fetch category={selectedCategory} searchTerm={searchTerm}/>
                </Div>
                </>
                
              }
            />
        
              
      
                  <Route
                    path="/country/:id"
                    element={
                      <>
                          <Header toggleTheme={toggleTheme} />
                          <CountriesFullDetail/>
                      </>
                    }
                  />

                {/* <Route    path="/"
          
                  element={
                    
                    <Div className="div">
                      <Group1>
                        <SearchInput onSearch={handleSearch} />
                        <DropdownMenu setSelectedCategory={setSelectedCategory} />
                      </Group1>
                      <Fetch category={selectedCategory} searchTerm={searchTerm}/>
                    </Div>
                    
                  }
                /> */}

              </Routes>
            </AppContainer>
      </ThemeContext.Provider>
    </Router>
    

    
  );
}

export default App;
