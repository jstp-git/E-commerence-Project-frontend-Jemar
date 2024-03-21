const apiurl= "http://localhost:3001"
export async function getproducts (DisplayInfo){
    const response = await fetch(
        apiURL + "DisplayInfo" );

    return response.json()
}



// const [countries, setCountries] = useState([]);

//   async function fetchCountries(){
//     const result = await getCountries("US");
//     setCountries(result.recordset);
//   }

//   useEffect(() => {
//     fetchCountries();
//   }, [])