interface IOptions {
  [ key: number ]: string
}

export const randomHandOptions = (): string => {
  const options: IOptions = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
  }
  return options[ Math.floor(Math.random() * 3) ]
}