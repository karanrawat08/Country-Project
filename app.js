const header = document.querySelector('.header');
const body = document.querySelector('.body');
const inputt = document.querySelector('.inputt');
const Search = document.querySelector('.Search');
const wrapper = document.querySelector('.wrapper');
// const back=document.querySelector('.backclass');
// const backagain=document.querySelector('.backagain');
const option=document.querySelector('.option');

const loader = document.querySelector("#loading");
let moonelem = document.getElementById("moon");
function getdata() {
    loader.classList.add("display");

    url = 'https://restcountries.com/v3.1/all';
    fetch(url).then((response) => {

        return response.json();
    }).then((data) => {
        datastore = data;
        console.log(data);
        console.log(data[0]);
        console.log(data[0].flags.png);

        console.log(data[0].name.nativeName.isl);
        loader.classList.remove("display");
        for (let index = 1; index <= 250; index++) {

            document.getElementById(`container${index}`).innerHTML = `<img src="${data[index].flags.png}" class="imgall${index}" id=imgall><br>
    <p class="name${index}" id="pid" style="color:white;font-size: 2rem;font-weight:700";
    font-weight: 600;">${data[index].name.common}</p><br><br>
    <ul style="color:white;" class="list${index}"><li><strong>Population</strong>:${data[index].population}</li><li><strong>Region:</strong>${data[index].region}</li><li><strong>Capital:</strong>${data[index].capital}</li></ul>`
            document.getElementById(`container${index}`).onclick = function () {
document.getElementById('wrapper').style.visibility = 'hidden';

                document.getElementById(`container${index}`).setAttribute(
                    "style", " visibility:visible; position:absolute;margin-left:2rem;background-color:hsl(207,21%,28%");
                store = index;
                document.getElementById(`container${index}`).innerHTML = `<img src="${data[index].flags.png}" class="imgall${index}" id=imgall><br>
    <p class="name${index}" id="pid" style="color:white;font-size: 2rem;font-weight:700";
    font-weight: 600;">${data[index].name.common}</p><br><br>
    <ul style="color:white;" class="list${index}"><li><strong>Population</strong>:${data[index].population}</li><br><li><strong>Region</strong>: ${data[index].region}</li><br><li><strong >Capital</strong>: ${data[index].capital}</li><br>
      <li><strong>Independent</strong>: ${data[index].independent}</li>
      </ul><ul style="color:white;" class="more${index}"><li><strong>Subregion</strong>:${data[index].subregion}</li><br><li><strong>Continents</strong>:${data[index].continents}</li><br><li><strong>Landlocked</strong>:${data[index].landlocked}</li></ul>
      <button id='btn${index}' ><a style="color: inherit;text-decoration: none" href="${data[index].maps.googleMaps}" target="blank">Check in Map</button>
`        

       

                document.getElementById('wrapper').setAttribute(
                    "style", "height:20vh;width:30vw");
                document.querySelector(`.imgall${index}`).setAttribute(
                    "style", "    height: 50vh; width: 33vw;");
                document.querySelector(`.name${index}`).setAttribute(
                    "style", "margin-left: 36rem;color:white;font-size: -11rem;margin-top:-24rem;font-weight: 700;font-size: 2rem;");
                document.querySelector(`.list${index}`).setAttribute(
                    "style", "margin-left: 36rem;color: white;");
                document.querySelector(`.more${index}`).setAttribute(
                    "style", "margin-top: -7rem;margin-left: 52rem;color: white;");
                document.querySelector(`#btn${index}`).setAttribute(
                    "style", "height: 8vh;margin-left: 42rem;margin-top: 3rem;width: 15vw;font-size: 2rem;background-color: #0079c1;color: white;border-radius: 20px;font-weight: 600;");
                document.getElementById('input').style.display = "none";
                document.getElementById('Search').style.display = "none";
                document.getElementById("backagain").style.display = 'block';
                document.getElementById('back').style.display = 'none';

            };

        }
    })

}

function backagain() {
    document.getElementById(`container${store}`).innerHTML = `<img src="${datastore[store].flags.png}" class="imgall${store}" id=imgall><br>
    <p class="name${store}" id="pid" style="color:white;font-size: 2rem;font-weight:700";
    font-weight: 600;">${datastore[store].name.common}</p><br><br>
    <ul style="color:white;" class="list${store}"><li><b>Population:<b>${datastore[store].population}</li><li>Region:${datastore[store].region}</li><li>Capital:${datastore[store].capital}</li></ul>`
    document.getElementById('wrapper').removeAttribute(
        "style", "height:20vh;width:30vw");
    document.getElementById('wrapper').style.visibility = 'visible';
    document.getElementById(`container${store}`).removeAttribute("style", " visibility:visible; position:absolute;margin-left:2rem");
    document.getElementById('input').style.display = "block";
    document.getElementById('Search').setAttribute(
        "style", "display:block; position:absolute;margin-left:12rem;margin-top:-2rem");
    document.getElementById("backagain").style.display = 'none';
    document.querySelector(`.imgall${store}`).removeAttribute(
        "style", "height: 55vh; width: 33vw;");

    document.querySelector(`.name${store}`).removeAttribute(
        "style", "margin-left:36rem;font-size:-11rem;margin-top:-24rem;font-weight: 700;font-size: 2rem;");
    document.querySelector(`.name${store}`).setAttribute(
        "style", "color:white;font-size: 2rem;font-weight:700");
    document.querySelector(`.list${store}`).removeAttribute(
        "style", "margin-left: 36rem");
    document.querySelector(`.list${store}`).setAttribute(
        "style", "color:white");
    document.querySelector(`.more${index}`).removeAttribute(
        "style", "margin-top: -7rem;margin-left: 52rem;color: white;");
         
           
}
function filter() {
    let country = ["All Countries","Asia", 'Europe', 'Americas', 'Oceania', 'Africa'];
    let option = document.querySelector('.option');

    country.forEach(element => {
        let li = `<br><li style="list-style: none;overflow:hidden" onclick="update(this)" >${element}</li>`
        option.insertAdjacentHTML('beforeend', li);

    });
    let wrapper = document.querySelector(".wrapper");
    let selectbtn = document.querySelector('#region')
    selectbtn.addEventListener("click", () => {
        wrapper.classList.toggle('active');
    });
}
document.getElementById("back").style.display = 'none';
getdata();
filter();
 function search() {
//     const bckbtn=document.querySelector('.backclass');
//     bckbtn.classList.toggle('mactive');
    let input = document.getElementById('input');
    let container = document.querySelector('.container');
    for (let k = 1; k <= 250; k++) {
        if (input.value === `${datastore[k].name.common}`) {
            ka = k;
            document.getElementById('wrapper').style.visibility = 'hidden';

            document.getElementById(`container${k}`).style.visibility = 'visible';
            document.getElementById(`container${k}`).setAttribute(
                "style", " visibility:visible; position:absolute;margin-left:2rem");
            input.value = "";
            document.getElementById('input').style.display = "none";
            document.getElementById('Search').style.display = "none";
            document.getElementById("back").style.display = 'block';
            // back.classList.toggle('mactive');

        }

    }

}
function back() {
 
    document.getElementById('wrapper').style.visibility = 'visible';
    document.getElementById(`container${ka}`).removeAttribute("style", " visibility:visible; position:absolute;margin-left:2rem");
    document.getElementById('input').style.display = "block";
    document.getElementById('Search').setAttribute(
        "style", "display:block; position:absolute;margin-left:12rem;margin-top:-2rem");
    document.getElementById("back").style.display = 'none';

}

function moon() {
   let moon=document.getElementById('moon');
    let moonn = document.querySelector('#moon');

    moonn.classList.toggle('mactive');
    header.classList.toggle('mactive');
    body.classList.toggle('mactive');
document.body.classList.contains("mactive")
    ? (moon.innerHTML = `<p class="fas fa-sun">&nbsp;Light Mode</p>`)
    : (moon.innerHTML=`<p class="fas fa-moon">&nbsp;Dark Mode</p>`);
    inputt.classList.toggle('mactive');
    Search.classList.toggle('mactive');
    wrapper.classList.toggle('mactive');
    option.classList.toggle('mactive');
  
    for (let k = 1; k <= 212; k++) {
        const container = document.getElementById(`container${k}`);
        const name = document.querySelector(`.name${k}`);
        const list= document.querySelector(`.list${k}`);
        // const more= document.querySelector(`.more${k}`);

        container.classList.toggle('mactive');
        name.classList.toggle('mactive');
        list.classList.toggle('mactive');
        // more.classList.toggle('mactive');

}

const backclass=document.querySelector('.backclass');
backclass.classList.toggle('mactive');
const back=document.querySelector('.backagainclass');
back.classList.toggle('mactive');    

}


function update(selectedcou) {
    wrapper.classList.remove('active');
    let selectbtn = document.getElementById('para');
    console.log(selectedcou.innerText);
    selectbtn.innerText = selectedcou.innerText;
    if (`${selectedcou.innerText}` == 'All Countries') {
        for (let k = 1; k <= 250; k++) {
             document.getElementById(`container${k}`).style.display = 'block';
        }
        
    }
    else if (`${selectedcou.innerText}` == 'Asia') {
        for (let k = 1; k <= 250; k++) {
            if (`${datastore[k].region}` != 'Asia') {
                document.getElementById(`container${k}`).style.display = 'none';
            }
            else {
                document.getElementById(`container${k}`).style.display = 'block';
            }
        }
    }
    else if (`${selectedcou.innerText}` == 'Europe') {
        for (let k = 1; k <= 250; k++) {
            if (`${datastore[k].region}` != 'Europe') {
                document.getElementById(`container${k}`).style.display = 'none';
            }
            else {
                document.getElementById(`container${k}`).style.display = 'block';
            }

        }
    }
    else if (`${selectedcou.innerText}` == 'Africa') {
        for (let k = 1; k <= 250; k++) {
            if (`${datastore[k].region}` != 'Africa') {
                document.getElementById(`container${k}`).style.display = 'none';
            }
            else {
                document.getElementById(`container${k}`).style.display = 'block';
            }
        }
    }
    else if (`${selectedcou.innerText}` == 'Americas') {
        for (let k = 1; k <= 250; k++) {
            if (`${datastore[k].region}` != 'Americas') {
                document.getElementById(`container${k}`).style.display = 'none';
            }
            else {
                document.getElementById(`container${k}`).style.display = 'block';
            }
        }
    }
    else if (`${selectedcou.innerText}` == 'Oceania') {
        for (let k = 1; k <= 250; k++) {
            if (`${datastore[k].region}` != 'Oceania') {
                document.getElementById(`container${k}`).style.display = 'none';
            }
            else {
                document.getElementById(`container${k}`).style.display = 'block';
            }
        }
    }
}
function countryclick() {
    document.getElementById(`container${index2}`).style.backgroundColor = "red";
    alert('i am here');
    console.log(index2);
}