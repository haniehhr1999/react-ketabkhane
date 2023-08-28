import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { Link , Outlet } from 'react-router-dom';

function App(){
    return(
       < >
        <h1 className='text-center'>کتابخانه من</h1>
        <nav style={{borderBottom: "2px solid #000"}} className='text-center'>
            <Link to="/books">کتاب ها</Link> <br />
            <Link to="/about">درباره ما</Link>
        </nav>
        <Outlet />
       </>
    )
}
export default App;