import axios from 'axios'
export {};

let profile: [string, number] = ['ham', 43];
axios.get('https://udemy-utils.herokuapp.com/api/v1/articles?token=token123').then((res) => {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = res.data;
  data = [
    {
      title: 'hoge',
      id: 1,
      description: 'as',
    }
  ]
})