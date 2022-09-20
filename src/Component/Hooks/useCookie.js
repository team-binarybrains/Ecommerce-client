const getCookie = (phone) => {
    const myCookie = document.cookie.split('=');
    return myCookie[0] === phone;
}

const setCookie = (key)=> {
    const d = new Date();
    d.setTime(d.getTime() + (45 * 1000));
    // d.setTime(d.getTime() + (3 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = key + "=" + true + ";" + expires + ";path=/";
}

export {getCookie,setCookie};