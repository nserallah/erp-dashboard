export default (to, from, next) => {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo != null && userInfo.length > 0) {
        let userObject = JSON.parse(userInfo);
        let currentTime = Math.floor((Date.now() != undefined ? Date.now() : new Date().getTime()) / 60000);
        console.log("time ", userObject.expires_in > currentTime, userObject.expires_in, currentTime)
        if (userObject.expires_in > currentTime) {
            next();
        } else {
            // localStorage.removeItem("userInfo");
            next("super/login");
        }
    } else {
        localStorage.removeItem("userInfo");
        next("super/login");
    }
};
