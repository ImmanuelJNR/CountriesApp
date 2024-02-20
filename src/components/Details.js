import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft, faArrowLeft } from 'react-icons/fa';

const FullDetailContainer = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100vh;
padding-right: 5%;
padding-left: 5%;
// background-color: white;

@media (max-width: 900px){
    align-items: center;
    height: 100%;
}

& .firstContainer{

    button{
        padding: 5px 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: bold;
        @media (max-width: 900px){
            margin-top: 30px;
        }
    }
}

`
const Subcontainer = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 70px;
margin-bottom: 150px;
// border: 1px solid red;
width: none;




& img{
    width: 45%;
    height: 400px;
    // min-width: 200px;
}

@media (max-width: 900px) {
    flex-direction: column;
    // width: 95%;

    & img{
        width: 100%;
        height: 100%;
    }
}
`;

const DetailsWrapper = styled.div`
width: 45%;    
display: flex; 
flex-direction: column;
// border: 1px solid blue;

& h1{
    margin-bottom: 10px;

    @media (max-width: 900px){
        margin-top: 20px;
        // margin-bottom: 0px;
    }
}

& .wrap{
    display: flex; 
    justify-content: space-between;
    margin-top: 30px; 

    @media (max-width: 900px){
        flex-direction: column; 
        margin-top: 5px; 
    }

    .detail1{

 

        p{
    
            margin-top: 10px;
            margin-bottom: 10px;
    
            span{
                font-weight: bold;
            }
        }
        
        button{
            padding: 5px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-weight: bold;
            

            a{
                text-decoration: none;
                color: inherit;
            }
        }

        @media (max-width: 900px){
            margin-top: 0px;
        }
    }
    
    .detail2 {

        @media (max-width: 900px){
            margin-top: 30px;
        }
        h1{
            margin-bottom: 10px;
        }
      p{
        margin-top: 10px;
        margin-bottom: 10px;
    
        span{
            font-weight: bold;
        }
      }
    
    }
}


& .borderCountries{
    // border: 1px solid red;
    display: flex;
    
    align-items: center;
    justify-content: left;
    margin-top: 60px;
    font-weight: bold;
    @media (max-width: 900px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        
    }
    

    .borderCountriesSubcontainer{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-left: 10px;
        // border: 1px solid blue;
        @media (max-width: 900px){
            margin-top: 10px;
            margin-left: 0;
        }

        span{
            font-weight: normal;
            padding: 5px 15px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add box shadow */
        }
    }
}



@media (max-width: 900px){
  width: 100%;
  flex-direction: column; 
}
`





function CountriesFullDetail() {
    const { state } = useLocation();
    const country = state?.country;
    const navigate = useNavigate();
    console.log('State received in CountriesFullDetail:', state);


    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const { name, capital, population, flags ,borders} = country;

    const currencies = country?.currencies || [];
    const currencyArray = Object.keys(currencies).map(currencyCode => (
      `${currencies[currencyCode].name}`
    ));

    const nativeNames = country?.name?.nativeName || {};
    const nativeNamesArray = Object.keys(nativeNames).map(languageCode => nativeNames[languageCode].common);
    // Pick the first native name from the array (if available)
    const selectedNativeName = nativeNamesArray.length > 0 ? nativeNamesArray[0] : null;
    


    const languages = country?.languages || {};
    const languageArray = Object.keys(languages).map(languageCode => languages[languageCode]);

    // Construct the map link based on latitude and longitude
  const mapLink = `https://www.google.com/maps/place/${country.latlng.join(',')}`;


    
    return(
        <>
        <FullDetailContainer>
            <div className='firstContainer'>

                <button className='redirectBtn' onClick={handleGoBack}><FaArrowLeft style={{marginRight: '4px'}}/>Back</button>
                <Subcontainer>
                    <img src={flags.svg} alt='flag' />

                    <DetailsWrapper>


                        <h1>{name.common}</h1>
                        <div className='wrap'>  

                            <div className='detail1'>
                            {selectedNativeName && (
                                <p>
                                    <span>Native Name:</span> {selectedNativeName}
                                </p>
                                )}
                                <p><span>population:</span> {country.population.toLocaleString()}</p>
                                <p><span>Region:</span> {country.region}</p>
                                <p><span>Sub-region:</span> {country.subregion}</p>
                                <p><span>Capital:</span> {country.capital}</p>
                                <button className='mapbutton'><a href={mapLink} target="_blank" rel="noopener noreferrer">Map</a></button>
                            </div>

                            <div className='detail2'>
                                    {/* <h1 style={{visibility: 'hidden'}}>{name.common}</h1> */}
                                    <p><span>Top Level Domain:</span> {country.tld}</p>
                                    {currencyArray.length > 0 && (
                                        <p>
                                            <span>Currencies:</span> {currencyArray}
                                        </p>
                                        )}

                                    {languageArray.length > 0 && (
                                    <p>
                                        <span>Languages:</span> {languageArray.join(', ')}
                                    </p>
                                    )}

                                    <p><span>Time-Zone:</span> {country.timezones}</p>
                                    <p><span>Start-of-week:</span> {country.startOfWeek}</p>
                            </div>
                        </div>

                            {borders && borders.length > 0 && (
                                <div className='borderCountries'> <p>Border Countries:</p> <div className='borderCountriesSubcontainer'>{borders.map((border, index) => <span key={index}>{border}</span>)}</div></div>
                                )}
                            
                    </DetailsWrapper>
                </Subcontainer>
            </div>

        </FullDetailContainer>
        </>
    )
}
export default CountriesFullDetail
