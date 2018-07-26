//https://jsonplaceholder.typicode.com/
const jsonurls = [
  'https://jsonplaceholder.typicode.com/posts/',
  'https://jsonplaceholder.typicode.com/comments/',
  'https://jsonplaceholder.typicode.com/albums/',
  'https://jsonplaceholder.typicode.com/photos/',
  'https://jsonplaceholder.typicode.com/todos/',
  'https://jsonplaceholder.typicode.com/users/'
]

const getData = async function() {
  const [ posts, comments, albums, photos, todos, users] = await Promise.all(jsonurls.map(url =>
  fetch(url).then(resp => resp.json())
))
console.log('posts', posts)
console.log('comments', comments)
console.log('albums', albums)
console.log('photos', photos)
console.log('todos', todos)
console.log('users', users)
}

getData();
