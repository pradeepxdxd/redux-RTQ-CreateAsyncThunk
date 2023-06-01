import React from 'react'
import ExpandablePanel from './ExpandablePanel';
import { Button } from 'react-bootstrap';
import {useRemoveAlbumMutation} from '../store/apis/albumApi'
import PhotoList from './PhotoList';

export default function AlbumListItem({ album }) {

    const [ removeAlbum, result ] = useRemoveAlbumMutation();

    const handleDeleteAlbum = () => {
        removeAlbum(album);
    }

    const header = <div>
        <Button variant='outline-danger' onClick={handleDeleteAlbum}>X</Button>
        <span className='mx-2'>

        {album.title}
        </span>
    </div>;
    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotoList album={album} />
        </ExpandablePanel>
    );
}
