const user = {
    userName: 'Eugene',
    age: 18,
    admin: true,
    avatar: 'https://...',
}

console.log(user);
console.log(user.age);
user.isOnline = true;

delete user.admin;

console.log(user);
console.log(`<img src="${user.avatar}" alt="avatar">`);

for (let p in user) {
    console.log(`Свойство ${p} имеет значение ${user[p]}`)
}