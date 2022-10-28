import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import UserList from "./UserList";
import { NUMBER_OF_USERS_PER_PAGE } from "../Utils/constants";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://randomuser.me/api/?page=1&results=80&nat=eng")
      .then((response) => {
        const result = response.data.results;
        setUsers(result);
        setTotalPages(Math.ceil(result.length / NUMBER_OF_USERS_PER_PAGE));
        setIsLoading(false);
      });
  }, []);

  const handleClick = (number) => {
    setPage(number);
  };

  const handlePrev = (page) => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = (page) => {
    if (page < 8) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <h1>Pagination Demo</h1>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <React.Fragment>
          <UserList users={users} page={page} />
          <Pagination
            totalPages={totalPages}
            handleClick={handleClick}
            handleNext={handleNext}
            handlePrev={handlePrev}
            page={page}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Users;
