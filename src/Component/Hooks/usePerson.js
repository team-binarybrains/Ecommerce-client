import { useEffect, useState } from "react";

const usePerson = (user) => {
  // console.log(user);
  useEffect(() => {
    const email = user?.user?.email;
    const displayName = user?.user?.displayName;
    const currentUser = { email: email, displayName: displayName };
    // console.log(currentUser);
    if (email) {
      fetch(`http://localhost:5000/server/user/${email}`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // setUsers(data)
        });
    }
  }, [user]);

  return;
};

export default usePerson;
