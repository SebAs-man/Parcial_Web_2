import {Row} from "./Row.jsx";

// eslint-disable-next-line react/prop-types
export function Table({nameCols = [], content=[{}]}) {
    return (
        <div className='overflow-y-auto w-full max-h-[65vh] p-1'>
            <table className='table table-pin-rows table-pin-cols table-lg min-w-full border-collapse'>
                <thead className='text-base text-slate-300'>
                <tr>
                    {
                        nameCols.map((name, index) => (
                            <th className='text-base text-center text-slate-200' scope='col' key={index}>{name}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, index) => (
                            <Row key={index} content={item}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
