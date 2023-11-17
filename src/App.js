import './index.css';
import Panel from './components/Panel';

function App() {
  return (
    <div className="App" class="flex h-screen justify-center items-center">
     <Panel color="border-red-600"/>
     <Panel color="border-green-600"/>
     <Panel color="border-purple-600"/>
     <Panel color="border-blue-600"/>
     <Panel color="border-pink-600"/>
    </div>
  );
}

export default App;
