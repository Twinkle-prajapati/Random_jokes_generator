let content = document.getElementById('content')



async function fetchJoke(){
    let res = await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single",{
        method: "GET",
        headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        res = await res.json()

    if(res)
        {
            content.textContent = res.joke
        }
}

fetchJoke()


function listenJokes()
{
    let speech = new SpeechSynthesisUtterance(content.textContent)
    window.speechSynthesis.speak(speech)
}

function copyJokes()
{
   let copy = content.textContent
   navigator.clipboard.writeText(copy)
   alert(copy)

}