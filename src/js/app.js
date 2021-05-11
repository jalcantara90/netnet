import { paintCategory } from './PaintCategory.js';

const categories = [
  {
    title: 'Populares en NetNet',
    movies: [
      { id: 1, image:'/netnet/src/assets/covers/matrix.png' },
      { id: 2, image:'/netnet/src/assets/covers/spongebob.png' },
      { id:3, image: '/netnet/src/assets/covers/spiderman.png' },
      { id:4, image:'/netnet/src/assets/covers/httydragon.png' },
      { id:5, image:'/netnet/src/assets/covers/christmast.png' },
      { id:6, image:'/netnet/src/assets/covers/jhonwick.png' },
      { id:6, image:'/netnet/src/assets/covers/jhonwick.png' },
    ]
  },
  {
    title: 'Series japonesas anime',
    movies: [ 
      {id: 7, image:'assets/covers/naruto.png'},
      {id: 8, image:'assets/covers/pokemon.png'},
      {id: 9, image:'assets/covers/zodiac.png'},
      {id: 10, image:'assets/covers/onepiece.png'},
      {id: 11, image:'assets/covers/onepunch.png'},
      {id: 12, image:'assets/covers/nanatsu.png'}
    ]
  },
  {
    title: 'Series de EEUU sobre crimenes',
    movies: [
      { id: 13, image: '/netnet/src/assets/covers/breakingbad.png'},
      { id: 14, image: '/netnet/src/assets/covers/arrow.png'},
      { id: 15, image: '/netnet/src/assets/covers/chapo.png'},
      { id: 16, image: '/netnet/src/assets/covers/narcos.png'},
      { id: 17, image: '/netnet/src/assets/covers/gotham.png'},
      { id: 18, image: '/netnet/src/assets/covers/flash.png'}
    ]
  },
  {
    title: 'Patatas',
    movies: [
      { id: 13, image: '/netnet/src/assets/covers/breakingbad.png'},
      { id: 14, image: '/netnet/src/assets/covers/arrow.png'},
      { id: 15, image: '/netnet/src/assets/covers/chapo.png'},
      { id: 16, image: '/netnet/src/assets/covers/narcos.png'},
      { id: 17, image: '/netnet/src/assets/covers/gotham.png'},
      { id: 18, image: '/netnet/src/assets/covers/flash.png'}
    ]
  }
];

const $categoryList = document.getElementById('category-list');


categories.forEach((category) => paintCategory(category, $categoryList));


// for(let movie of categories[0].movies) {
//   const $anchor = document.createElement('a');
//   $anchor.classList.add('carousel_item');
//   $anchor.href = `/netnet/src/pages/detail.html?movieId=${movie.id}`;
  
//   const $image = document.createElement('img');
//   $image.src = movie.image;
  
//   $anchor.appendChild($image);
//   $carousel.appendChild($anchor);
// }

// for(let i = 0; i < categories[0].movies.length; i++) {
//   const $anchor = document.createElement('a');
//   $anchor.classList.add('carousel_item');
//   $anchor.href = `/netnet/src/pages/detail.html?movieId=${categories[0].movies[i].id}`;
  
//   const $image = document.createElement('img');
//   $image.src = categories[0].movies[i].image;
  
//   $anchor.appendChild($image);
//   $carousel.appendChild($anchor);
// }




// function addMovieToCarousel(movie) {
//   const $anchor = document.createElement('a');
//   $anchor.classList.add('carousel_item');
//   $anchor.href = `/netnet/src/pages/detail.html?movieId=${movie.id}`;
  
//   const $image = document.createElement('img');
//   $image.src = movie.image;
  
//   $anchor.appendChild($image);
//   $carousel.appendChild($anchor);
// }