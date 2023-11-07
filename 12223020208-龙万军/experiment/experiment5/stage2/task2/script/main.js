function Hamster() {
    this.run = function () {
        alert("跑得慢");
    };
}

Hamster.prototype.run = function () {
    alert("跑得快");
};





let lazy = new Hamster();
lazy._proto_ = Hamster.prototype;

let speedy = lazy.constructor;

speedy.run = function () {
    alert("跑得很快");
};

speedy.run();
lazy.run();
lazy._proto_.run();






