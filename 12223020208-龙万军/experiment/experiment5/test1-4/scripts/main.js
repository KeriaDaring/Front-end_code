let user = {
    size: {
        height: 185,
        weight: 75
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    get fullName() {
        return '${this.firstname} ${this.lastName}';
    },
};

alert(JSON.stringify(user));

user.fullName = "Alice Cooper";
alert("设置后：" + JSON.stringify(user));

