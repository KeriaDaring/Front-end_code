let person = {
    _id: 11,
    _name: '',
    _class: {
        classNumber: 0,
        major: '英语'
    },
    get id() {
        return this._id;
    },
    get name() {
        return this._name;
    },
    set name(value) {
        const arr = /^[a-zA-Z]{4,}$/;
        if (!(arr.test(value))) {
            return;
        }
        this._name = value;
    },
    get class() {
        return this._class;
    },
    set class(value) {
        if (typeof value === 'object' && 'major' in value && 'classNumber' in value) {
            if (typeof value.major === 'string'
            && /^[\u4e00-\u9fa5]+$/.test(value.major)
            && typeof value.classNumber === 'number') {
                this._class = value;
            }
        }
    }
};
alert(typeof 'hello')

person.study = function() {
    console.log("正在学习");
};

person.study();
person.name = 'Ali';

alert("name: " + JSON.stringify(person.name));

person.name = 'Keria';
alert("name: " + JSON.stringify(person.name));

person.class = {
    classNumber: '23',
    major: 'nihao'
};
alert("class: " + JSON.stringify(person.class));


person.class = {
    classNumber: 30,
    major: 'nihao'
};
alert("class: " + JSON.stringify(person.class));


person.class = {
    classNumber: '4',
    major: '你好'
};
alert("class: " + JSON.stringify(person.class));

person.class = {
    classNumber: 30,
    major: '你好'
};
alert("class: " + JSON.stringify(person.class));
