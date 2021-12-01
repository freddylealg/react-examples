
const apiKey = 'seElqJTab8zGdVKqBbrCb36wNjNWNnZj';

const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const request = fetch(url);

request
    .then( resp => resp.json())
    .then( ({data}) => {
        console.log( data.images.original.url );
        const img = document.createElement('img');
        img.src = data.images.original.url;;
        document.body.appendChild(img);
    })
    .catch( console.warn );