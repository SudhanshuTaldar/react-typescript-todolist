export interface Data {
  task: string,
  deadline: number,
  id: number 
}
export interface inputF {
  name: string,
  value: number | string
}
export interface actionType {
  type: string,
  payload?: number | string
}

export interface initialtype {
  task: {
      task: string,
      deadline: number,
      id: number
  }[]
}