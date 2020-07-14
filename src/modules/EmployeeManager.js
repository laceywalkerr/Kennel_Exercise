const remoteURL = "http://localhost:5002";
//[2]
// export default {
//   getAll() {
//         return fetch(`${remoteURL}/employees/`).then(result => result.json())
//     },
//    getWithAnimals(id) {
//         return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
//                 .then(result => result.json())
//     }
// }

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}