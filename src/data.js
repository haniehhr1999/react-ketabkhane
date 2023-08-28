
const books = [
    {
        name: 'کتاب اثر مرکب',
        id: 20 ,
        amount: '110,000' ,
        due: '1402/05/01'
    },
    {
        name: 'کتاب آیین زندگی',
        id: 21 ,
        amount: '85,000' ,
        due: '1402/04/07'
    },
    {
        name: 'کتاب هفت عادت مردمان موثر',
        id: 22 ,
        amount: '99,000' ,
        due: '1401/05/23'
    },
    {
        name: 'کتاب خرده عادت ها',
        id: 23 ,
        amount: '155,000' ,
        due: '1402/01/12'
    },
    {
        name: 'کتاب هنر ظریف رهایی از دغدغه ها',
        id: 24 ,
        amount: '120,000' ,
        due: '1402/05/18'
    },
    {
        name: 'کتاب خودت را به فنا نده',
        id: 25 ,
        amount: '65,000' ,
        due: '1402/05/23'
    }
]

export function getBooks(){
    return books
}
export const getBook = (id)=> {
    return books.find(book => book.id === id)
}