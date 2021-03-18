// Variables
function Person(image, name, review) {
    this.imageLink = image;
    this.firstName = name;
    this.userReview = review;
}
let buttonLeft = document.querySelector(".buttonleft");
let buttonRight = document.querySelector(".buttonright");
let imageLinks = ["https://lh3.googleusercontent.com/a-/AOh14GiEQn6NsgS9ytBLW7rPfcpUdOXt4QS3psjsmV8H=s64-w32-h32-cc",
"https://lh3.googleusercontent.com/a-/AOh14GjSu8yK0zQN0xOcf0isLqXKcPV4a8xccuCiZCAh7w=s64-w32-h32-cc",
"https://lh3.googleusercontent.com/a-/AOh14GiEzBdeBnHazRRkYpfigbKuepjrBACrDOI4nfBS=s64-w32-h32-cc",
"https://lh3.googleusercontent.com/a-/AOh14Gios3Um8cDT-8eKrINTTuQSIPKgDhhyBj7aD_qH=s64-w32-h32-cc",
"https://lh3.googleusercontent.com/a-/AOh14Gi0pvGDBwDtGIpnZTGJCD47yTNc_7BXxxAm-_Lb=s64-w32-h32-cc"];
let reviews = ["Favourite game has been for years, still brings back memories beating the game several times. Still fun today played remastered yesterday and their is still other players waiting to help you with whatever may come your way.",
"This game is amazing. I knew a lot about dark souls before going into it, and actually played sekiro and bloodborne first. I am glad a knew a lot about it as well, since I was so skittish because of the way the game has been portrayed as being way too difficult. The truth is, the game is hard, but more than that, it is engaging.",
"The game is hard and can naturally get your heart pumping with adrenaline due to almost slaying a boss u have been stuck on etc. when slain the accomplishment felt is great... sometimes things will seem unfair but that’s just darksouls it’s all a learning curve",
"I 100% the game just a few days ago and I loved the challenge. the only problem I had with it was the 4 kings fight as you get farther into ng+ and ng++ the 4 kings become the greatest impacts because the fight is all about your DPS. other than that though I love the idea.",
"The dark souls of darks souls souls game certainly took the industry by storm and changed everyone's perspective on difficulty. This masterpiece really came out of nowhere."];
let names = ["Henry", "Bridge", "Legion", "Cox", "Jerez"]
let i = 0;
let imageLocation;
let nameLocation;
let reviewLocation;

// Event listeners
buttonLeft.addEventListener("click", switchLeft);
buttonRight.addEventListener("click", switchRight);


// Functions
function switchRight() {
    let reviewer = new Person(imageLinks[i], names[i], reviews[i])
    i++;
    
    imageLocation = document.querySelector(".img").src = `${reviewer.imageLink}`;
    nameLocation = document.querySelector(".username").innerText = `${reviewer.firstName}`;
    reviewLocation = document.querySelector(".review").innerText = `${reviewer.userReview}`;
    
    
    
    if (i >=5) {
        i = 0;
    }
}

function switchLeft() {
    let reviewer = new Person(imageLinks[i], names[i], reviews[i])
    i--;
    imageLocation = document.querySelector(".img").src = `${reviewer.imageLink}`;
    nameLocation = document.querySelector(".username").innerText = `${reviewer.firstName}`;
    reviewLocation = document.querySelector(".review").innerText = `${reviewer.userReview}`;
    
    if (i == -1) {
        i = 4;
    }
}



