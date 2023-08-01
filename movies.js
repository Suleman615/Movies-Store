


document.addEventListener("DOMContentLoaded", function () {
    Movies("1");
});
function Movies(sorc) {



    $.ajax({
        url: "https://movieto-api.vercel.app/movie/all?page=".concat(sorc),
        method: "GET",
        datatype: "json",
        success: function (data) {

            const element = document.getElementById('movies');
            if (element) {
                element.innerHTML = " ";
            }
            for (i = 0; i < 20; i++) {



                const el = `<div class="my-md-5  mx-2 p-3 border border-2 border-gray-400 d-none d-md-block bg-secondary bg-opacity-50  rounded-3" style="width: fit-content; min-height: 600px;font-family: Georgia, 'Times New Roman', Times, serif;">
                  
              <section style="min-height:330px"><img  class="rounded-3  w-100  "   src="${data[i].img_url}" alt="LOADING..." ></section>
              <div style=" min-height: 180px; width: 250px;" class="d-flex flex-column justify-content-between    ">
                  <h4 class="p-1 mt-2 text-center text-white  text-wrap"><b>${data[i].name}</b></h4>
                  <h4 class="text-center text-white  py-sm"><b><i>Rating : ${data[i].rating}%</i></b></h4>
                  <a class="align-self-center w-70 " href="${data[i].url}"><button class=" mb-2 px-4 py-1 btn-secondary border-0   rounded-pill  " >Watch Now</button></a>
              </div>
            
              </div>

              <div class=" my-2 mx-2 p-2 d-flex flex-column justify-content-center d-md-none border border-3 border-secondary    rounded-3" style=" font-family: Georgia, 'Times New Roman', Times, serif;">
                  
              <img  class="rounded-3 "   src="${data[i].img_url}" alt="LOADING..." >
              <div style=" height: min-180px; width:170px; " class="d-flex flex-column m-auto justify-content-between    ">
                  <h4 class="p-1 mt-2 text-center   text-wrap"><b>${data[i].name}</b></h4>
                  <h4 class="text-center   py-sm"><b><i>Rating : ${data[i].rating}%</i></b></h4>
                  <a class="align-self-center w-70 " href="${data[i].url}"><button class=" mb-2 px-4 py-1 btn-secondary border-0   rounded-pill  " >Watch Now</button></a>
              </div>
            

            
              </div>
              `;

                createelement(el, "movies");

            }
            window.scroll({
                top: 0,
                left: 0,
                behavior: "auto",
            });
        },
        error: function (error) {
            console.log("error is = " + error)
        }
    })

}



function createelement(src, id) {
    const node = document.createElement("div");
    $(document).ready(function () {
        const element = document.getElementById(id);

        if (element) {
            node.innerHTML = src;
            element.appendChild(node);
        }
    })
}



