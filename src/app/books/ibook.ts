export interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  cover: string;
  publisher: {
    name: string;
    url: string;
  };
}
