// eslint-disable-next-line react/prop-types
export function Card({children, title='None'}) {
    return (
        <section className='flex flex-col gap-3 justify-between items-center'>
            <h1 className='text-white'>{title}</h1>
            {children}
        </section>
    )
}
