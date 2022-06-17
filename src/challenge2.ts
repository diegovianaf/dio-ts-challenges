enum Profession {
  Actress,
  Baker,
}

interface Person {
  firstName: string,
  age: number,
  profession?: Profession,
}

const Maria: Person = {
  firstName: 'Maria',
  age: 29,
  profession: Profession.Actress,
}

const Roberto: Person = {
  firstName: 'Roberto',
  age: 19,
  profession: Profession.Baker,
}

const Laura: Person = {
  firstName: 'Laura',
  age: 32,
  profession: Profession.Actress,
}

const Carlos: Person = {
  firstName: 'Carlos',
  age: 19,
  profession: Profession.Baker,
}
