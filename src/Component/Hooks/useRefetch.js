/* eslint-disable react-hooks/exhaustive-deps */

/** documentation of the hook
 * INPUT PARAMETER:
 * => (an url, the initial value for the state befor fetched data,a call back function).
 * => useRefetch hook pass fetched data as a perameter to the call back funtion.
 * => callback function will be called just after fetching the data.
 * => initial value and the callback funtion has the default value, thats why there is an option to pass no value for initialValue and callback funtion in case of calling useRefetch function.
 * 
 * OUTPUT PARAMETER:
 * => return an array => [fetched data, loading state, refetch function].
 * => fetched data = gotten data after fetching from the url.
 * => loading state = value will be true while fetching process will go on otherwise value will be false.
 * => refetch funciton = get the function to any name and just call the function when refetching is needed.
 */

import axios from "axios";
import { useEffect, useState } from "react"

const useRefetch = (url, initialValue = [], callback = () => 0) => {
    const [data, setData] = useState(initialValue);
    const [refetch, setRefetch] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setData(data);
            callback(data);
            setLoading(false);
        })
    }, [refetch, url]);

    return [data, loading, () => { setLoading(true); setRefetch(previous => !previous) }]
}

export default useRefetch;