import {useRemovePhotoMutation} from '../store/apis/photosApi'

export default function PhotoListItem({ photo }) {
    const [removePhoto, result] = useRemovePhotoMutation();

    const handleRemovePhoto = () => {
        removePhoto(photo);
    }

    return (
        <>
            <span>
                <img className="h-20 w-20 m-3" src={photo.url} alt="error" />
                <i onClick={handleRemovePhoto} class="fa fa-trash-o" style={{ fontSize: "36px", cursor:'pointer' }}></i>
            </span>
        </>
    )
}