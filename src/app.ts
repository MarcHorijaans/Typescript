const  startButton = () => {
    let element = document.querySelector("#maintext");
    element!.innerHTML = "dit is een test welkom";
}

document.querySelector("button")!.addEventListener("click",startButton);
