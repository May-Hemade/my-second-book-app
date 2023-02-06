// {
//     "_id": "60e965d65486fe001504b771",
//     "comment": "more testing",
//     "rate": 3,
//     "elementId": "tt0415947",
//     "author": "drdverzola@gmail.com",
//     "createdAt": "2021-07-10T09:18:14.052Z",
//     "updatedAt": "2021-07-10T09:18:14.052Z",
//     "__v": 0
// }

export interface Comment {
  _id?: string
  comment: string
  rate: number
  elementId: string
  author?: string
}
