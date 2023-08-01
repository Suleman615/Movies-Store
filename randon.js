document.addEventListener("DOMContentLoaded", function () {
    random()
});


function random() {

    $.ajax({
        url: "https://movieto-api.vercel.app/movie",
        method: "GET",
        datatype: "json",
        success: function (data) {
            const element = document.getElementById('anymovie');
            if (element) {
                element.innerHTML = "";
            }





            const movie = ` 
            <div class="bg-secondary bg-opacity-50  m-lg-3  d-block mt-md-2  border border-2 border-gray-400   d-md-flex mx-2 py-2 py-lg-5 p-0 pe-md-5 ps-md-2 rounded-3" style="width: fit-content; font-family: Georgia, 'Times New Roman', Times, serif;">
                <img class="d-block d-md-none border border-2 border-secondary  rounded-3 p-2  m-auto" style=" min-width: 180px; height:300px"  src="${data.img_url}" alt="" >

                <div style="width:250px;"  class="d-none d-md-flex text-white m-auto  flex-column justify-content-center    ">
                    <h4  class=" p-3 py-md-0 m-0 text-center text-wrap "><b>${data.name}</b></h4>
                    <h4 class="p-3 py-md-0 text-center "><b><i>Rating : ${data.rating}%</i></b></h4>
                   
                        <a class="align-self-center " href="${data.url}"><button class=" my-2 mx-2 px-4 py-2 btn-info text-black border-0   rounded-pill  " > Watch Now</button></a>
                        <a class="align-self-center " onclick="random()" ><button class=" my-3 px-5 mx-2 py-2 btn-primary text-black border-0  rounded-pill  " >Refresh</button></a>
                    
                </div>  
                
                <div style="width:250px;"  class="d-flex d-md-none m-auto flex-column justify-content-center    ">
                <h4  class=" p-3 m-0 text-center text-wrap "><b>${data.name}</b></h4>
                <h4 class="p-3 text-center "><b><i>Rating : ${data.rating}%</i></b></h4>
               
                    <a class="align-self-center " href="${data.url}"><button class=" my-2 mx-2 px-4 py-2 btn-info text-black border-0   rounded-pill  " > Watch Now</button></a>
                    <a class="align-self-center " onclick="random()" ><button class=" my-3 px-5 mx-2 py-2 btn-info text-black border-0  rounded-pill  " >Refresh</button></a>
                
                </div> 
                <img class="d-none d-lg-block rounded-3" style="height: 420px; min-width: 220px;" class="rounded-3" src="${data.img_url}" alt="" >
                <img class="d-none d-md-block d-lg-none  rounded-3" style=" min-width: 100px; height:250px;" class="rounded-3" src="${data.img_url}" alt="" >
               
            </div>`;

            createelement(movie, "anymovie");
        },
        error: function (errmsg) {
            console.log(errmsg)
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