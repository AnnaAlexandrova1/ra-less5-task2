import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import Search from './components/Search/Search';
import WidgetItems from './components/WidgetItems/WidgetItems';
import './App.css';

function App() {
   return (
    <div className='container'>
      <Header />
      <main className={'main-decom'}>
         <Search />
         <Promo />
         <WidgetItems />
      </main>
    </div>
  )
}

export default App;
