var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Person = {
    name: 'hgjjg',
    id: '123',
    role: Role.ADMIN
};
console.log(Person.role);
