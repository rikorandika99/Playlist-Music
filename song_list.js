//song list
let All_song = [
    {
      name: "Tapi Tahukah Kamu",
      path: "music/1.mp3",
      img: "images/1.jpg",
      singer: "Dygta Feat Kamasean"
    },
    {
      name: "Sampai Jadi Debu",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Banda Neira"
    },
    {
      name: "Bukan Cinta Biasa",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Afgan"
    },
    {
      name: "Penjaga Hati",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Nadhif Basalamah"
    },
    {
      name: "Bersamamu",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Jaz"
    },
    {
     name: "Lebih Indah",
     path: "music/6.mp3",
     img: "images/6.jpg",
     singer: "Andera"
    },
    {
      name: "Jiwa Yang Bersedih",
      path: "music/7.mp3",
      img: "images/7.jpg",
      singer: "Ghea Indrawari"
     },
     {
      name: "Terlukis Indah",
      path: "music/8.mp3",
      img: "images/8.jpg",
      singer: "Rizky Febian Feat Ziva Magnolya"
     },
     {
      name: "Nanti Kita Seperti Ini",
      path: "music/9.mp3",
      img: "images/9.jpg",
      singer: "Batas Senja"
     },
     {
      name: "Kau Rumahku",
      path: "music/10.mp3",
      img: "images/10.jpg",
      singer: "Raisa Anggiani"
     },
     {
      name: "Untuk Mencintaimu",
      path: "music/11.mp3",
      img: "images/11.jpg",
      singer: "Seventeen"
     },
     {
      name: "Cintanya Aku",
      path: "music/12.mp3",
      img: "images/12.jpg",
      singer: "Tiara andini Feat Arsy Widianto"
     },
     {
      name: "Memiliki Dirinya",
      path: "music/13.mp3",
      img: "images/13.jpg",
      singer: "Gustixa Feat Adila Fitriani"
     },
     {
      name: "Abadi",
      path: "music/14.mp3",
      img: "images/14.jpg",
      singer: "Dendi Nata"
     },
     {
      name: "Menemukanmu",
      path: "music/15.mp3",
      img: "images/15.jpg",
      singer: "Seventeen"
     },
     {
      name: "Karena Aku T'lah Denganmu",
      path: "music/16.mp3",
      img: "images/16.jpg",
      singer: "Ari Lasso Feat Ariel Tatum"
     },
     {
      name: "Cinta Sejati",
      path: "music/17.mp3",
      img: "images/17.jpg",
      singer: "Bunga Citra Lestari"
     },
     {
      name: "Katakan Saja",
      path: "music/18.mp3",
      img: "images/18.jpg",
      singer: "Khifnu"
     },     
     {
      name: "Bawalah Cintaku",
      path: "music/19.mp3",
      img: "images/19.jpg",
      singer: "Afgan"
     },     
     {
      name: "Tak Segampang Itu",
      path: "music/20.mp3",
      img: "images/20.jpg",
      singer: "Anggi Marito"
     },     
     {
      name: "Semata Karenamu",
      path: "music/21.mp3",
      img: "images/21.jpg",
      singer: "Mario G Klau"
     } 
 ];
 /*you can add more song & images from you computer*/
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/