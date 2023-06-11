import './App.css';
import Header from './components/Header';
import UseFetch from './components/UseFetch';

function App() {
 
  const data = UseFetch("https://hub.dummyapis.com/employee?noofRecords=5&idStarts=1001")

  return (
    <div className="App">
     <Header />
     {
      data.map((el,i)=>{
         return(
         <div key={i} className='employee'>
          <button>{el.id}</button>
          <br/>
          <img src={el.imageUrl} />
          <h2>{el.firstName} {el.lastName}</h2>
         </div>
         )
      })
     }
    </div>
  );
}

export default App;
