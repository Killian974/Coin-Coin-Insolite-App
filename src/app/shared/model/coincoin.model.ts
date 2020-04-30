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
    longitude: -1.54771,
    latitude: 47.201755,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae erat id mi semper varius. Vivamus vel ultricies leo, ut pharetra urna. Maecenas nisi mauris, porttitor et sapien ut, lobortis ultricies quam. Integer vitae tempus tortor. Nullam euismod blandit augue vel convallis. Quisque interdum est rhoncus vulputate feugiat.",
    author: "John Doe",
    picture: "https://www.plantes-et-sante.fr/images/photo-8.jpg",
  },
  {
    id: 2,
    name: "Lorem Ipsum",
    longitude: -1.547563,
    latitude: 47.205341,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae erat id mi semper varius. Vivamus vel ultricies leo, ut pharetra urna.",
    author: "John Doe",
    picture: "https://static.passeportsante.net/680x357/i93408-.jpeg",
  },
  {
    id: 3,
    name: "Lorem Ipsum",
    longitude: -1.532794,
    latitude: 47.247868,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae erat id mi semper varius.",
    author: "John Doe",
    picture:
      "https://assets.afcdn.com/story/20190822/2020759_w980h638c1cx2250cy1514cxt0cyt0cxb4500cyb3027.jpg",
  },
];
