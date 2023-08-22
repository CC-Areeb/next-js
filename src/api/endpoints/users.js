const USER_API = process.env.API_URL;

const usersApi = {
    users: USER_API + '/users',
    store: USER_API + '/users',
    editUsers: (id) => USER_API + '/users/' + id,
};

export default usersApi;