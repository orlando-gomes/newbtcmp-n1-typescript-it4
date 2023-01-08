
// Um service deve exportar apenas uma função. Pra efeito de resumo, vamos exportar mais de uma.



export default function createUser1( name = 'inicial', email: string, password: string  ) {
  return { name, email, password }
}

interface CreateUserData2 {
  name?: string;
  email: string;
  password: string;
}

export function createUser2({name = 'Inicial', email, password}: CreateUserData2) {
  return {
    name,
    email,
    password,
  }
}

interface CreateUserData3 {
  name?: string;
  email: string;
  password: string;
  techs: string[];
}

export function createUser3({ name = 'Inicial', email, password, techs}: CreateUserData3) {
  return {
    name,
    email,
    password,
    techs,
  }
}

interface Experience {
  tech: string;
  score: number;
}

interface CreateUserData4 {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | Experience >
}

export function createUser4({name = 'Inicial', email, password, techs}: CreateUserData4) {
  return {
    name,
    email,
    password,
    techs,
  }
}