// Your code goes here
addEventListener("DOMContentLoaded", (e) => {
    document.getElementById('text').textContent = "This is really cool!"
});

document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded");
})

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered")