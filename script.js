//  FUNCTION DECLARATION

//  function ada (nama){
//     alert (`halo ${nama})
// }

// ada(`iqbal`)
    
//  FUNCTION EKSPRESI

// let ada = function(nama){
//     alert(`halo ${nama}`)
// }

// ada(`iqbal`)



// function arrow adalah bentuk lain dari function ekpresion -- MDN(mozila)



// FUNCTION ARROW

// jika parameter nya satu, tidak harus memakai buka kurung (),

// let ada = (nama) =>{
//     console.log(`Halo ${nama}`)
// }

// ada(`maliko`)

// impilisit return

// let ada = (nama,waktu) => `Halo ${nama} selamat ${waktu}`


// console.log(ada(`Riko`,`malam`))


// pengapilkasian arrow function di function map
// function map adalah pemetaan sebuah function pada array


// let mahasiswa = [`iqbal`,`riko`,`ryan`]

// // let jumblahHuruf = mahasiswa.map(function(nama){
// //     return nama.length
// // })

// // console.log(jumblahHuruf)

// //meggunakan function arrow

// // let jumblahHuruf = mahasiswa.map(nama=>nama.length)

// // console.log(jumblahHuruf)

// //untuk mengembalikan nilai nya menjadi object


// let jumblahHuruf = mahasiswa.map(nama=>({nama : nama, jmlhHrf:nama.length}))

// console.log(jumblahHuruf)




// KONSEP THIS PADA ARROW FUNCTION
