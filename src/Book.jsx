import { useParams } from "react-router-dom"
import {getBook} from './data'




const Book = ()=>{
    const params = useParams();
    const book = getBook(parseInt(params.bookId))
    console.log(params.bookId);
    return(
        <div className="fw-bold">
            <p>{`کتاب با شناسه: ${book.id}`}</p>
            <h2>{`نام کتاب : ${book.name}`}</h2>
            <p>{`قیمت کتاب : ${book.amount} تومان`}</p>
            <p>{`تاریخ انتشار: ${book.due}`}</p>
        </div>
    )
}

export default Book