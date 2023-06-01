import { Button } from 'react-bootstrap';
import {useFetchPhotoQuery, useAddPhotoMutation} from '../store/apis/photosApi'
import PhotoListItem from './PhotoListItem'

export default function PhotoList( { album } ){
    const {data, error, isFetching} = useFetchPhotoQuery(album);
    const [addPhoto, result] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if (isFetching) {
        content = <h4>Loading...</h4>
    }
    else if (error) {
        content = <h4>Error on fetching photo</h4>
    }
    else {
        content = data?.map(photo => {
            return <PhotoListItem key={photo.id} photo={photo}/>
        })
    }

    return (
        <>
            <div className='m-2 flex flex-row items-center justify-between'>
                <h3 className='text-lg font-bold'>Photo In {album.title}</h3>
                <Button variant='outline-success' onClick={handleAddPhoto}>+ Add Photo</Button>
            </div>
            <div>
                {content}
            </div>
        </>
    )
}