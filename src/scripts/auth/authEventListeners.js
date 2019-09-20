const createUserObj = (name, username, password) => {
    const newUser = {
        name: name,
        userName: username,
        password: password
    }
    return newUser
}
export default createUserObj