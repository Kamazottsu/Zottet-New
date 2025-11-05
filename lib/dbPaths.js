
const { join } = require('path');
module.exports = {
  POSTS_JSON: join(process.cwd(), 'data', 'posts.json'),
  USERS_JSON: join(process.cwd(), 'data', 'users.json'),
  BOOKINGS_JSON: join(process.cwd(), 'data', 'bookings.json'),
  THREADS_JSON: join(process.cwd(), 'data', 'threads.json'),
  FRIENDS_JSON: join(process.cwd(), 'data', 'friends.json')
}
