

// URL :  'https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=thor&key=[YOUR_API_KEY]';

const apiKey = "AIzaSyBkKLYVGQQmD5HJAgBZoOk4-1c3LhHloCM";

let search = async () => {
 
   try {

           let query = document.getElementById("query").value;

              let url =  `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${query}&key=${apiKey}`;

              let res = await fetch(url);

              let data =  await res.json();

            append(data.items);

   // console.log(data);
         } catch (err) {
    console.log(err);
         }
}

// Append the data on DOM 

let append = (data) => {

    let container = document.getElementById("results");
    document.getElementById("results").innerHTML = null;

        console.log(data);
    data.forEach(({ id: { videoId } }) => {
        
       let div = document.createElement("div");
       let iframe = document.createElement("iframe");
       iframe.src = `https://www.youtube.com/embed/${videoId}`;
       let h3 = document.createElement("h3");
      // h3.innetText = title;

       div.append(iframe, h3);

       container.append(div);
    })
}


/*

<iframe width="560" height="315" src="https://www.youtube.com/embed/uULy2rc6YDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*/