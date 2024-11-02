import {Card} from "./Card.jsx";
import {Table} from "./Table.jsx";
import {ImgDetail} from "./ImgDetail.jsx";
import {Pagination} from "./Pagination.jsx";
import {getJson, getNameCols, getNameTags} from "../utils/const.jsx";
import {useEffect, useState} from "react";

export function App() {
    const [date, setDate] = useState('2015-07-02');
    const [data, setData] = useState([{}]);
    const [page, setPage] = useState(1);

    const getData = (pageOverride = page) => {
        const url_base = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
        const api_key = '?api_key=wwLNtSl7Oqz90ubKgOo7ZzoFbQC02NxZSwXXpdCZ';
        const earth_day = `&earth_date=${date}`;
        const page_base = `&page=${pageOverride}`

        const link = url_base + api_key + earth_day + page_base;
        fetch(link)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const temp = getJson(data.photos, handleDetailData);
                setData(temp);
            })
            .catch(error => console.error('Error en la solicitud:', error));
    }

    useEffect(() => {
        getData();
    },[page]);

    const handleSearch = (event) => {
        event.preventDefault();
        setPage(1);
        getData(1);
    }

    const handlePageChange = (newPage) => {
        setPage(newPage);
    }

    const [details, setDetails] = useState(getNameTags());
    const [src, setSrc] = useState('');

    const handleDetailData = (tags, imgURL) => {
        setDetails(tags);
        setSrc(imgURL);
    }

    return (
        <>
            <Card title='Fotos del expl. de Marte'>
                <form method='get' encType='multipart/form-data' onSubmit={handleSearch} className='flex w-full justify-evenly gap-1'>
                    <label className='input input-bordered flex items-center gap-2 text-slate-300'>
                        Fecha terrestre:
                        <input type='date' autoFocus name='date' value={date} className='grow'
                               onChange={(event) => setDate(event.target.value)}/>
                    </label>
                    <button type='submit' className='btn btn-primary self-center'>¡Buscar!</button>
                </form>
                <Table nameCols={getNameCols()} content={data}/>
                <Pagination currentPage={page} setPage={handlePageChange}/>
            </Card>
            <div className='divider divider-horizontal divider-neutral'></div>
            <Card title='Detalle de la imágen'>
                <ImgDetail content={details} src={src}/>
            </Card>
        </>
      )
}
