"use strict";
var Jobs;
(function (Jobs) {
    Jobs[Jobs["Atriz"] = 0] = "Atriz";
    Jobs[Jobs["Ator"] = 1] = "Ator";
    Jobs[Jobs["Padeira"] = 2] = "Padeira";
    Jobs[Jobs["Padeiro"] = 3] = "Padeiro";
    Jobs[Jobs["Professor"] = 4] = "Professor";
    Jobs[Jobs["Professora"] = 5] = "Professora";
})(Jobs || (Jobs = {}));
let pessoa01 = {
    name: `Maria`,
    age: 29,
    profissao: Jobs.Atriz
};
let pessoa02 = {
    name: `Roberto`,
    age: 19,
    profissao: Jobs.Padeiro
};
let pessoa03 = {
    name: `Laura`,
    age: 32,
    profissao: Jobs.Atriz
};
let pessoa04 = {
    name: `Carlos`,
    age: 19,
    profissao: Jobs.Padeiro
};
