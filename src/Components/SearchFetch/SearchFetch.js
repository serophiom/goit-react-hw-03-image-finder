

const ApiKey = '21951044-669b58be8946ea9fe70fb579e';

function searcFetch (query, pageNumber) {
        return fetch(`https://pixabay.com/api/?q=${query}&page=&{pageNumber}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12
`).then(response => response.json());
}

export default searcFetch;