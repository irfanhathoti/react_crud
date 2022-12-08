import './App.css';
import DataList from './Componrnts/CrudApplication/DataList';
import StudentList from './crud/StudentList';

function App() {
  return (
    <div>
      <DataList />
      {/* <Validation/> */}

      

      {/* <Router>
        <Switch>
          <Route path="/" exact component={
            () => {
              return (<AddDetails />)
            }} />
            <Route path="/ShowData" exact component={
            () => {
              return (<ShowData />)
            }} />
        </Switch>

      </Router> */}
    </div>
  );
}

export default App;
