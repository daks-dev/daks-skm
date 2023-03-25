// const rand = (min: number, max: number) => Math.round(Math.random() * (max - min) + min);
//`https://picsum.photos/seed/${rand(0,200)}/800/800`

export const sources = async () => [
  (await import(`./00.jpg?webp`)).default,
  (await import(`./01.jpg?webp`)).default,
  (await import(`./02.jpg?webp`)).default,
  (await import(`./03.jpg?webp`)).default,
  (await import(`./04.jpg?webp`)).default,
  (await import(`./05.jpg?webp`)).default,
  (await import(`./06.jpg?webp`)).default,
  (await import(`./07.jpg?webp`)).default,
  (await import(`./08.jpg?webp`)).default,
  (await import(`./09.jpg?webp`)).default,
  (await import(`./10.jpg?webp`)).default,
  (await import(`./11.jpg?webp`)).default,
  (await import(`./12.jpg?webp`)).default,
  (await import(`./13.jpg?webp`)).default,
  (await import(`./14.jpg?webp`)).default,
  (await import(`./15.jpg?webp`)).default,
  (await import(`./16.jpg?webp`)).default,
  (await import(`./17.jpg?webp`)).default,
  (await import(`./18.jpg?webp`)).default
];

export const screens = async () => [
  (await import(`./00.jpg?w=320&h=180&webp`)).default,
  (await import(`./01.jpg?w=320&h=180&webp`)).default,
  (await import(`./02.jpg?w=320&h=180&webp`)).default,
  (await import(`./03.jpg?w=320&h=180&webp`)).default,
  (await import(`./04.jpg?w=320&h=180&webp`)).default,
  (await import(`./05.jpg?w=320&h=180&webp`)).default,
  (await import(`./06.jpg?w=320&h=180&webp`)).default,
  (await import(`./07.jpg?w=320&h=180&webp`)).default,
  (await import(`./08.jpg?w=320&h=180&webp`)).default,
  (await import(`./09.jpg?w=320&h=180&webp`)).default,
  (await import(`./10.jpg?w=320&h=180&webp`)).default,
  (await import(`./11.jpg?w=320&h=180&webp`)).default,
  (await import(`./12.jpg?w=320&h=180&webp`)).default,
  (await import(`./13.jpg?w=320&h=180&webp`)).default,
  (await import(`./14.jpg?w=320&h=180&webp`)).default,
  (await import(`./15.jpg?w=320&h=180&webp`)).default,
  (await import(`./16.jpg?w=320&h=180&webp`)).default,
  (await import(`./17.jpg?w=320&h=180&webp`)).default,
  (await import(`./18.jpg?w=320&h=180&webp`)).default
];

export const squares = async () => [
  (await import(`./00.jpg?w=320&h=320&webp`)).default,
  (await import(`./01.jpg?w=320&h=320&webp`)).default,
  (await import(`./02.jpg?w=320&h=320&webp`)).default,
  (await import(`./03.jpg?w=320&h=320&webp`)).default,
  (await import(`./04.jpg?w=320&h=320&webp`)).default,
  (await import(`./05.jpg?w=320&h=320&webp`)).default,
  (await import(`./06.jpg?w=320&h=320&webp`)).default,
  (await import(`./07.jpg?w=320&h=320&webp`)).default,
  (await import(`./08.jpg?w=320&h=320&webp`)).default,
  (await import(`./09.jpg?w=320&h=320&webp`)).default,
  (await import(`./10.jpg?w=320&h=320&webp`)).default,
  (await import(`./11.jpg?w=320&h=320&webp`)).default,
  (await import(`./12.jpg?w=320&h=320&webp`)).default,
  (await import(`./13.jpg?w=320&h=320&webp`)).default,
  (await import(`./14.jpg?w=320&h=320&webp`)).default,
  (await import(`./15.jpg?w=320&h=320&webp`)).default,
  (await import(`./16.jpg?w=320&h=320&webp`)).default,
  (await import(`./17.jpg?w=320&h=320&webp`)).default,
  (await import(`./18.jpg?w=320&h=320&webp`)).default
];

export const captions = [];

export default async () => ({
  sources: await sources(),
  thumbnails: await squares()
});
