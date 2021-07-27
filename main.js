



// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(value => value.json())
//     .then(value => {
//         let postdiv = document.getElementsByClassName('post1')[0]
//         for (let post of value){
//             // console.log(post)
//             let upost = document.createElement('div')
//             upost.innerText = post.id + '-'+ post.title
//             postdiv.appendChild(upost)
//
//             let but = document.createElement('button')
//             but.innerText = 'Get'
//             upost.appendChild(but)
//             but.onclick = function (){
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         let comentbox = document.getElementsByClassName('comment')[0]
//                         comentbox.innerHTML = ''
//                         for (let coment of value){
//                             // console.log(coment)
//                             let comentdiv = document.createElement('div')
//                             comentdiv.innerText = coment.id + '-' +coment.body
//                             comentbox.appendChild(comentdiv)
//
//
//                         }
//                     })
//
//             }
//
//
//         }
//     })






fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(value => {
       let users = document.getElementsByClassName('wrap')[0]
        for (let user of value){
            let userdiv = document.createElement('div')
            userdiv.innerText = user.id + '-' + user.name
            users.appendChild(userdiv)

            let but = document.createElement('button')
            but.innerText = 'detail'
            userdiv.appendChild(but)
            but.onclick=function (){
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        let userpost = document.getElementsByClassName('userpost')[0]
                        userpost.innerHTML = ''
                        for (let post of value){
                            let Upost = document.createElement('div')
                            Upost.innerText = post.title
                            userpost.appendChild(Upost)

                            let bnt = document.createElement('button')
                            bnt.innerText = 'get'
                            Upost.appendChild(bnt)
                            bnt.onclick = function (){
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {
                                        let postcoment = document.getElementsByClassName('post-coment')[0]
                                        postcoment.innerHTML = ''
                                        for (let coment of value){
                                            // console.log(coment)
                                            let Ucoment = document.createElement('div')
                                            Ucoment.innerText = coment.id +'-'+coment.name
                                            postcoment.appendChild(Ucoment)
                                        }
                                    })


                            }
                        }

                    })
            }
        }
    })






