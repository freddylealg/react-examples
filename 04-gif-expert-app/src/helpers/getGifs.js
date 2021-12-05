
export const getGifts = async( category ) => {
    const apiKey = 'seElqJTab8zGdVKqBbrCb36wNjNWNnZj';
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
    const response = await fetch( url );
    const {data} = await response.json()
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;
};