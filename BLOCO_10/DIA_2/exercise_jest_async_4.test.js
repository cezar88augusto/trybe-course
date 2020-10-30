const fetch = require('node-fetch');

const getRepos = (url) => {
    return fetch(url)
        .then(response => response.json())
        .then((data) => {
            return data.map((repo) => repo.name)
        });
}

const endpoint = getRepos('https://api.github.com/users/tryber/repos');

describe('It tests if a url passed as parameter return two specificalies names', () => {
    it('returns a string in upper case', async() => {
        expect.assertions(2);
        const array = await expect(getRepos('https://api.github.com/users/tryber/repos'));
        expect(array).toContain('sd-01-week4-5-project-todo-list');
        expect(array).toContain('sd-01-week4-5-project-meme-generator');
    })
})


