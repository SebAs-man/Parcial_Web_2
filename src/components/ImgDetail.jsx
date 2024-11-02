// eslint-disable-next-line react/prop-types
export function ImgDetail({content = {}, src=''}) {
    return (
        <>
            <img alt='Imagen de marte...' src={src}/>
            <div className='flex gap-2'>
                {
                    Object.entries(content).map(([key, value], index) => (
                        <span className='text-slate-100' key={index}>
                        <strong className='text-slate-100'>{key + ': '}</strong>
                            {value}
                    </span>
                    ))
                }
            </div>
        </>
    )
}
