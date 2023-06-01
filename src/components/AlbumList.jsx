import React from "react";
import {
    useFetchAlbumsQuery,
    useAddAlbumMutation,
} from "../store/apis/albumApi";
import { Button } from "react-bootstrap";
import AlbumListItem from "./AlbumListItem";

export default function AlbumList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    let content;

    if (isFetching) {
        content = <h4>Loading...</h4>;
    } else if (error) {
        content = <div>Error loading...</div>;
    } else {
        content = data?.map((album) => {
            return <AlbumListItem key={album.id} album={album} />
        });
    }

    const handleAddAlbum = () => {
        addAlbum(user);
    };

    return (
        <>
            <div>
                <h4 style={{ color: "#888a89" }}>
                    Album for <span style={{ color: "red" }}>{user.name}</span>
                    <Button
                        variant="outline-primary"
                        style={{ marginLeft: "25px" }}
                        onClick={handleAddAlbum}
                    >
                        + Add
                    </Button>
                </h4>
            </div>
            <div>{content}</div>
        </>
    );
}
