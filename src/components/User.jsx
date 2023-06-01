import React from "react";
import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store/thunk/removeUser";
import ExpandablePanel from "./ExpandablePanel";
import { Button } from "react-bootstrap";
import AlbumList from "./AlbumList";

export default function User({ user }) {
    const [doRemoveUser, error] = useThunk(removeUser);

    const handleRemoveUser = () => {
        doRemoveUser(user);
    }

    const header = <>
        <h3><span><Button variant="outline-danger" onClick={handleRemoveUser}> X </Button></span><span style={{ marginLeft: '15px' }}>{user.name} </span></h3>
        {error && <h3>Something went wrong, while deleting user</h3>}
    </>

    return (
        <>
        <div className="m-5" style={{width:"1200px"}}>
            <ExpandablePanel header={header}>
                <AlbumList user={user} />
            </ExpandablePanel>
        </div>
        </>
    );
}
