"use strict";
var Profession;
(function (Profession) {
    Profession[Profession["Actress"] = 0] = "Actress";
    Profession[Profession["Baker"] = 1] = "Baker";
})(Profession || (Profession = {}));
const Maria = {
    firstName: 'Maria',
    age: 29,
    profession: Profession.Actress,
};
const Roberto = {
    firstName: 'Roberto',
    age: 19,
    profession: Profession.Baker,
};
const Laura = {
    firstName: 'Laura',
    age: 32,
    profession: Profession.Actress,
};
const Carlos = {
    firstName: 'Carlos',
    age: 19,
    profession: Profession.Baker,
};
