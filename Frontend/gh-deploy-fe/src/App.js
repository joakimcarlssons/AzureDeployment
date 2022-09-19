import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://ghapi.azurewebsites.net/weatherforecast')
      .then(res => res.json()).then(e => setData(e))
      .catch(err => {
        setError('An error occured. See console.');
        console.log(err);
      })
  }, [])

  return !error ? (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Temperature C</td>
            <td>Temperature F</td>
            <td>Summary</td>
          </tr>
        </thead>
        <tbody>
          {data?.map(d => {
            return <tr>
              <td>{d.date}</td>
              <td>{d.temperatureC}</td>
              <td>{d.temperatureF}</td>
              <td>{d.summary}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="App">
      <p>Error: {error}</p>
    </div>
  );
}

export default App;
