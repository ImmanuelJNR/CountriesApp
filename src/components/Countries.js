
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const ApiDataContainer = styled.div `
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
transition: all 0.5s;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
border-top-left-radius: 5px;
border-top-right-radius: 5px;

& img {
width: 100%;
height: 30vh;
object-fit: cover;
cursor: Pointer;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
}

&:hover {
    transform: scale(1.04);
}

h4{
   margin-left: 10px;
   margin-top: 10px; 
   white-space: nowrap;
   text-overflow: ellipsis; 
   line-height: 2.5;
}

p {
    margin-left: 10px;
    line-height: 1.5;

    /* Apply styles to all span tags within a p tag */
    span {
      font-weight: bold;
      margin-right: 5px; /* Add some spacing between span and text */
    }
}

p:last-child {
    margin-bottom: 40px; 
   
}
`


function CountriesDetail({country, index}) {
    return (
      <>

        <ApiDataContainer className='countriesCard'>
            {/* <div></div> */}
            <Link key={index} to={`/country/${index}`} state={{ country }}>
            <img src={country.flags.svg} alt='flag'/>  
            </Link>  
            <h4>{country.name.common}</h4>
            <p><span>population:</span> {country.population.toLocaleString()}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital}</p>
        </ApiDataContainer>
      </>
    );
}

export default CountriesDetail