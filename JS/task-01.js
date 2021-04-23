const listCategories = document.querySelector('#categories')
const categories = document.querySelectorAll('.item')

const categoriesLength = listCategories.children.length
const quantityCategories = length => {
      if (length < 2) {
        return `В списке ${length} категория`
    }
    if (length < 5) {
        return `В списке ${length} категории`
    }
        return `В списке ${length} категорий`      
}
console.log(quantityCategories(categoriesLength))

categories.forEach(function(category) {
    const categoryName = textContent => `Категория: ${textContent}`
    const categoryLength = category.querySelector('ul').children.length
    const quantityCategory = length => `Количество элементов: ${length}`

    console.log(categoryName(category.firstElementChild.textContent))
    console.log(quantityCategory(categoryLength))
})