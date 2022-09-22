import News from './News/News';
import Rates from './Rates/Rates';
import PromoHeader from './PromoHeader/PromoHeader';


function Header() {
  return (
    <header className={'header-decom'}>
      <div className="main">
       <News />
       <Rates />
      </div>
      <div className="aside">
        <PromoHeader />
       </div> 
    </header>
  )
}

export default Header