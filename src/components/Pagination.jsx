// eslint-disable-next-line react/prop-types
export function Pagination({currentPage, setPage}) {
    const buttonMinDisabled = currentPage <= 1;

    const handleChangePage = (increment = false) => {
        increment ? setPage(currentPage+1) : setPage(currentPage-1);
    }

    return (
        <div className='join'>
            <button disabled={buttonMinDisabled} onClick={() => handleChangePage()}
                    className='join-item btn btn-outline btn-ghost text-slate-300'>«</button>
            <button className='join-item btn btn-outline btn-ghost text-slate-300'>
                <span>Página {currentPage}</span>
            </button>
            <button onClick={() => handleChangePage(true)}
                    className='join-item btn btn-outline btn-ghost text-slate-300'>»</button>
        </div>
    )
}
