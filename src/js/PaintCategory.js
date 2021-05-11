export function paintCategory(category, container) {
  const $category = document.createElement('section');
  $category.classList.add('category');

  container.appendChild($category);

  const $categoryTitle = document.createElement('p');
  $categoryTitle.classList.add('category_title');
  $categoryTitle.innerText = category.title;

  $category.appendChild($categoryTitle);

  const $carousel = document.createElement('div');
  $carousel.classList.add('carousel');

  category.movies.forEach((movie) => {
    const $anchor = document.createElement('a');
    $anchor.classList.add('carousel_item');
    $anchor.href = `/netnet/src/pages/detail.html?movieId=${movie.id}`;
    
    const $image = document.createElement('img');
    $image.src = movie.image;
    
    $anchor.appendChild($image);
    $carousel.appendChild($anchor);
  });

  $category.appendChild($carousel);
}
