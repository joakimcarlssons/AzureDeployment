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

  return error ? (
    <div className="App">
      <table>
        <thead>
          <th>
            <tr>Date</tr>
            <tr>Temperature C</tr>
            <tr>Temperature F</tr>
            <tr>Summary</tr>
          </th>
        </thead>
        <tbody>
          {data?.map(d => {
            return <td>
              <tr>d.date</tr>
              <tr>d.temperatureC</tr>
              <tr>d.temperatureF</tr>
              <tr>d.summary</tr>
            </td>
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
