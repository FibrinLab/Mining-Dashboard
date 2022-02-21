// import { is } from 'ramda'

// export default class User {
//   constructor (user = {}) {
//     this.id = is(Number, user.id) ? user.id : 0
//     this.name = is(String, user.name) ? user.name : ''
//     this.image = is(String, user.image) ? user.image : ''
//     this.role = is(String, user.role) ? user.role : ''
//     this.about = is(String, user.about) ? user.about : ''
//     this.dob = is(String, user.dob) ? user.dob : ''
//     this.isActive = is(Boolean, user.isActive) ? user.isActive : false
//   }
// }

export default class User {
  constructor (email, password) {
    // this.username = username
    this.email = email
    this.password = password
  }
}
