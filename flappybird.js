let move_speed =3, gravity = 0.5;
let bird = dcoument.querySelector(".bird");
let img = document.getElementById("bird-1");

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector(".background").getBoundingClientRect();
let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");
let score_title = document.querySelector(".score_title");

let game_state = "Start";
img.style.display = "none";
message.classList.add("messageStyle");

document.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && game_state != "Play"){
        document.querySelectorAll(".pipe_sprite").forEach((e) => {
            e.remove();
        });
        img.style.display = "block";
        bird.style.top = "40vh";
        game_state = "Play";
        message.innerHTML = "";
        score_title.innerHTML = "Score: ";
        score_val.innerHTML = "0";
        message.classList.remove("messageStyle");
        play();
    }
});

function play(){
    function move(){
        if(game_state != "Play") return;

        let pipe_sprite = document.querySelectorAll(".pipe_sprite");
        pipe_sprite.forEach((element) => {
            let pip_sprite_props = element.getBoundingClientRect();
            bird_props = bird.getBoundingClientRect();

            if(pip_sprite_props.right <= 0) {
                element.remove();
            }else {
                if(bird_props.left < pip_sprite_props.left + pip_sprite_props.width && bird_props.left + bird_props.width > pip_sprite_props.left && bird_props.top < pip_sprite_props.top + pip_sprite_props.height && bird_props.top + bird_props.height > pip_sprite_props.top){
                    game_state = "End";
                    message.innerHTML = "Game Over".fontcolor("red") + "<br>Press Enter to Restart";
                }
            }
        })
    }
}