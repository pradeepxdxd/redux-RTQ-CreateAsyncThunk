import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchUser } from "../store/thunk/fetchUsers";
import {addUser} from '../store/thunk/createUsers';
import {useThunk} from '../hooks/useThunk';
import User from "./User";
import { Button } from "react-bootstrap";

export default function UserList() {
    const [doFetchUser, isLoadingUsers, loadingUsererror] = useThunk(fetchUser);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data, isLoading, isError } = useSelector((state) => state.user);

    useEffect(() => {
        doFetchUser();
    }, [doFetchUser]);

    if (isLoading) return <center>Loading...</center>;
    if (isError) return <center>Error in user fetching</center>;

    const handleCreateUser = () => {
        doCreateUser();
    }

    return (
        <>
            <center>
                <h1 className="mt-5">Users :- <span> {isCreatingUser ? 'Creating User' : <Button variant="outline-primary" onClick={handleCreateUser}>Create User</Button>}</span></h1>
                {data?.map((user) => (
                    <User key={user.id} user={user} />
                ))}
                {creatingUserError && 'Error creating user'}
            </center>
        </>
    );
}
