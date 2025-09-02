        export const isAuthenticated = () => {
        return !!localStorage.getItem("token");
        };

        export const loginUser = (token, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        };

        export const logoutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        };

        export const getUser = () => {
        return JSON.parse(localStorage.getItem("user"));
        };