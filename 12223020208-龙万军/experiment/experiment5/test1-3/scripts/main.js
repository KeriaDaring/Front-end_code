let user = {
    name: "John",
    size: {
        height: 185,
        weight: 75,
    }
};
let id = Symbol("id");

user[id] = 1;

let cloneUser = cloneDeep(user);

cloneUser.size.height = 190;
cloneUser.size.weight = 75;

cloneUser.name = "Jack";
cloneUser[id] = 2;

alert(user[id] + " " + JSON.stringify(user));
alert(cloneUser[id] + " " + JSON.stringify(cloneUser));


function cloneDeep(obj) {
    let newObj = obj.constructor === Array ? [] : {};

    if (typeof obj !== 'object') {
        return;
    } else {
        for (var i in obj) {
            if (typeof obj[i] === 'object') {
                newObj[i] = cloneDeep(obj[i]);
            } else {
                newObj[i] = obj[i];
            }
        }
    }

    return newObj;
};

