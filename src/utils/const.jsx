export const getNameCols = () => {
    return [
        'ID',
        'Nombre expl.',
        'Cámara',
        'Detalles'
    ]
}

export const getNameTags = () => {
   return {
       ID: '',
       SOL: '',
       DT: ''
   }
}

const setNameTags = (id='', sol='', dt='') => {
    return {
        ID: id,
        SOL: sol,
        DT: dt
    }
}

export const getJson = (data=[{}], handleDetails=null) => {
    return data.map((obj, index) => {
        try{
            const id = Object.hasOwn(obj, 'id') ? obj.id : 'null';
            const sol = Object.hasOwn(obj, 'sol') ? obj.sol : 'null';
            const earth_date = Object.hasOwn(obj, 'earth_date') ? obj.earth_date : 'null';
            const tags = setNameTags(id, sol, earth_date);

            const img_url = Object.hasOwn(obj, 'img_src') ? obj.img_src : '';
            let camera_name = 'null';
            if(Object.hasOwn(obj, 'camera') && Object.hasOwn(obj.camera, 'name')){
                camera_name = obj.camera.name;
            }
            let rover_name = 'null';
            if(Object.hasOwn(obj, 'rover') && Object.hasOwn(obj.rover, 'name')){
                rover_name = obj.rover.name;
            }
            const btn =
                <button onClick={() => handleDetails(tags, img_url)}
                        className='btn btn-info self-center'>
                    Más
                </button>

            if(index === 0){
                handleDetails(tags, img_url);
            }

            return {id, rover_name, camera_name, btn};
        } catch (error){
            console.error('Error al obtener datos del objeto: ', error);
            return {
                id: 'none',
                rover_name: 'none',
                camera_name: 'none',
                btn: null
            }
        }
    })
}