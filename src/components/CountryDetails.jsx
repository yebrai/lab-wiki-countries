import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countriesList } = props;

  const { id } = useParams();

  const filteredCountry = countriesList.filter((eachCountry) => {
    return eachCountry.alpha3Code === id;
  });

  return (
    <div className="col-7">
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${filteredCountry[0].alpha2Code.toLowerCase()}.png`}
        alt=""
        width="200px"
      />
      <h1>{filteredCountry[0].name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{filteredCountry[0].capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {filteredCountry[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {filteredCountry[0].borders.map((eachBorder, index) => {
                  console.log(eachBorder);
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      to={`/${eachBorder}`}
                      key={index}
                      style={{ color: 'blue' }}
                    >
                      {countriesList.map((eachCountry) => {
                        return (
                          eachCountry.alpha3Code === eachBorder &&
                          eachCountry.name.common
                        );
                      })}
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
