import React, { useEffect, useState } from 'react';

const useAdmin = user => {
    // console.log(user);
    const [admin, setAdmin] = useState()
    // console.log(admin);
    // const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {

        const email = user[0]?.email
        // console.log(email);
        if (email) {
            fetch(`http://api.com.quickinun.com/server/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setAdmin(data.admin)
                    // setAdminLoading(false)
                })
        }

    }, [user])

    return [admin]
};

export default useAdmin;