const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
};

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
            return resolve(users[id]);
        }

        return reject({ error: 'User with ' + id + ' not found.' });
    });
}

const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
}

describe('Test if the id passed as parameter is finded in the users object', () => {
    it('the returned result is expect', () => {
        expect.assertions(1);
        return getUserName(4).then(user => {
            expect(user).toEqual('Mark');
        })
    });
    it('the id was not localizated in the object', () => {
        expect.assertions(1);
        return getUserName(7).catch(error => expect(error).toEqual({ error: 'User with ' + 7 + ' not found.' }));
    });
})
