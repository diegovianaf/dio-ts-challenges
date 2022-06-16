// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Employee {
  code: number,
  firstName: string,
}

const John: Employee = {
  code: 10,
  firstName: 'John',
}
