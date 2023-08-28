import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js' 

import {Link , Outlet} from 'react-router-dom'
import {getBooks} from './data'
import Book from './Book';


function Books(){
    const books = getBooks()
    return(
        <div className='row'>
            <nav className='col-3' style={{borderLeft: "2px solid #000" , padding:"1rem"}}>
                <input className='d-block' type="text" placeholder='جستجوی کتاب...' />
                {
                    books.map( book => (
                        <Link className='d-block' to={`/books/${book.id}`} key={`${book.name}`} > {book.name} </Link>

                    ))
                }
            </nav>
            <Outlet />
            <div className="col-9">
                <Book />
            </div>
        </div>
    )
}
export default Books