import React from "react";
import User from "./User";
import { NUMBER_OF_USERS_PER_PAGE } from "../Utils/constants";

const UserList = ({ users, page}) => {
    const startIndex = (page - 1) * NUMBER_OF_USERS_PER_PAGE;
    const selectedUsers = users.slice(startIndex, startIndex + NUMBER_OF_USERS_PER_PAGE);

    return(
        <div>
             <React.Fragment>
            {selectedUsers.map(user => (
                <User key = {user.login.uuid} {...user} />
            ))}
        </React.Fragment>
        </div>
       
    )
}

export default UserList;