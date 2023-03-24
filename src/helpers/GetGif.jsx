const getGif=async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=TBuL3LMgtWrCJJhEkRI6Yk3zVu8VOh3U&q=${category}&limit=20`;
    const resp=await fetch(url);
    const {data}=await resp.json();
    
    const gifs=data.map((img)=>(
        {
            id:img.id,
            title:img.title,
            url: img.images.downsized.url,
        }
        ));
      
        return gifs;

}
export default getGif;