// eslint-disable-next-line react/prop-types
export function Row({content = {}}) {
    return (
        <tr className='hover'>
            {
                Object.values(content).map((value, index) => (
                    <td className='text-base text-center text-slate-300' key={index}>{value}</td>
                ))
            }
        </tr>
    )
}
