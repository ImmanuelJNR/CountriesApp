import { useState, useEffect } from 'react';
import CountriesDetail from './Countries.js';
import styled from 'styled-components'



const Wrapper = styled.body `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: 50px;
  width: 90%;
  // background-color:  #FAFAFA;
  // border: 1px solid red;

  & > :nth-last-child(-n+auto-fill) {
    margin-bottom: 100px; /* Adjust the margin value as needed */
  }
`

const Fetch = ({category, searchTerm }) => {
  const [countriesData, setCountries] = useState([]);
  const [error, setError] = useState(null);

  // Use this effect to fetch initial data without dependencies
  useEffect(() => {
    const apiUrl = `https://restcountries.com/v3.1/all`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        // console.log(countriesDatadata);
        setCountries(data);
      });
  }, []);

  // Use this effect to fetch data when the category changes
  useEffect(() => {
    if (category) {
      const apiUrl = `https://restcountries.com/v3.1/region/${category.toLowerCase()}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCountries(data);
        });
    }
  }, [category]);
  
  // Use this effect to fetch data when the search term changes
  useEffect(() => {
    if (searchTerm) {
      const apiUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        });
    }
  }, [searchTerm]);

    // Use this effect to fetch data when the category or search term changes

  useEffect(() => {
    let apiUrl = `https://restcountries.com/v3.1/all`;

    if (category) {
      apiUrl = `https://restcountries.com/v3.1/region/${category.toLowerCase()}`;
    }

    if (searchTerm) {
      apiUrl = `https://restcountries.com/v3.1/name/${searchTerm}`;
    }

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Country does not exist');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Add this line to log the fetched data
        if (Array.isArray(data)) {
          setCountries(data);
          setError(null);
        } else {
          setError('Country does not exist');
          setCountries([]); // Set empty array to clear any previous data
        }
      })
      .catch((error) => {
        setError(error.message);
        setCountries([]);
      });
  }, [category, searchTerm]);
  

  return (

    // <Wrapper>
    //   {error ? (
    //     <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{error}</p>
    //   ) : (
    //     countriesData.map((country, index) => (
    //       <CountriesDetail key={index} country={country} index={index} />
    //     ))
    //   )}
    // </Wrapper>

      // <Wrapper>
      // {error ? (
      // <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{error}</p>
      // ) : (
      // Array.isArray(countriesData) ? (
      //   countriesData.map((country, index) => (
      //     <CountriesDetail key={index} country={country} index={index} />
      //   ))
      // ) : (
      //   <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No matching countries found</p>
      // )
      // )}
      // </Wrapper>
      
<Wrapper>
  {Array.isArray(countriesData) && countriesData.length > 0 ? (
    countriesData.map((country, index) => (
      <CountriesDetail key={index} country={country} index={index} />
    ))
  ) : (
    <p style={{ textAlign: 'center', fontWeight: 'bold' }}>No matching countries found</p>
  )}
</Wrapper>
 
  );
};
export default Fetch;
