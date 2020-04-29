export class coincoinModel {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  description: string;
  //TODO author should be of 'user' type
  author: string;
  picture: string;

  constructor(coincoin: any) {
    this.id = coincoin.id;
    this.name = coincoin.name;
    this.longitude = coincoin.longitude;
    this.latitude = coincoin.latitude;
    this.description = coincoin.description;
    this.author = coincoin.author;
    this.picture = coincoin.picture;
  }
}

export const coincoinList: Array<coincoinModel> = [
  {
    id: 1,
    name: "Lorem Ipsum",
    longitude: 1.7191,
    latitude: 46.8111,
    description: "loremp ipsum",
    author: "John Doe",
    picture: "https://www.plantes-et-sante.fr/images/photo-8.jpg",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    longitude: 1.7191,
    latitude: 46.7111,
    description: "loremp ipsum",
    author: "John Doe",
    picture: "https://www.plantes-et-sante.fr/images/photo-8.jpg",
  },
];
