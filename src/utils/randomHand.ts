interface IOptions {
  [ key: number ]: string
}

export const randomHandOptions = (): string => {
  const options: IOptions = {
    0: 'Rock',
    1: 'Paper',
    2: 'Scissors'
  }
  return options[ Math.floor(Math.random() * 3) ]
}