let user = {
    name: "John"
}

alert("user对象存在测试name：" + user?.name);

let id = Symbol("id");

user[id] = {
    studentId:2,
    courseId:1,
};

alert("user对象存在测试[id]：" + user?.[id]?.studentId);
alert("user对象存在测试id：" + user?.id?.studentId);
alert("user对象存在测试[id]：" + JSON.stringify(user));