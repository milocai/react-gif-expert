const API_KEY = '6yrXNo7gmTZ1kLYKBDlyStJHG1LOUT3K'

export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;
    const resp = await fetch(url)
    const {data} = await resp.json();

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))
    
    return gifs;
}