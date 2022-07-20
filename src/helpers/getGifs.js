export const getGifs  = async(category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=aBTK2JYTjbeQpFT2Q6Kz0caAxhacp8xk&q=${category}&limit=15`
    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

        
    }))
    console.log(gifs)
    return gifs;
}