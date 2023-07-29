
const API_URL = process.env.API_URL;

const usersApi = {
    getUsers: API_URL + '/users',
    getUser: (id) => `/api/users/${id}`,
    createUser: '/api/users',
    updateUser: (id) => `/api/users/${id}`,
    deleteUser: (id) => `/api/users/${id}`,
};

export default usersApi;