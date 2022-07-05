enum Jobs {
  Atriz,
  Ator,
  Padeira,
  Padeiro,
  Professor,
  Professora
}

interface Person {
  name: string,
  age: number,
  profissao?: Jobs
}

let pessoa01: Person = {
  name: `Maria`,
  age: 29,
  profissao: Jobs.Atriz
}

let pessoa02: Person = {
  name: `Roberto`,
  age: 19,
  profissao: Jobs.Padeiro
}

let pessoa03: Person = {
  name: `Laura`,
  age: 32,
  profissao: Jobs.Atriz
}

let pessoa04: Person = {
  name: `Carlos`,
  age: 19,
  profissao: Jobs.Padeiro
}