
const getImage = async() => {
    const apiKey = 'seElqJTab8zGdVKqBbrCb36wNjNWNnZj';
    const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const img = document.createElement('img');
    img.src = data.images.original.url;
    document.body.appendChild(img);
}

getImage();



