<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { upcomingdata, ongoingdata } from './homedata'
  import {useRouter } from 'vue-router'
  const currentIndex = ref(0)
  let pn = ref('')
  let array = ref([])
  const router = useRouter()
  function nextImage() {
    if (currentIndex.value < upcomingdata.length - 1) {
      currentIndex.value++
    } else {
      currentIndex.value = 0 
    }
  }

  function prevImage() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    } else {
      currentIndex.value = upcomingdata.length - 1 
    }
  }
 
  function booking(id) {
    let found = ongoingdata.find((t) => t.movieid === id);
    if (!found) {
      console.warn('Movie not found');
      return;
    }
    let names = localStorage.getItem('user');
    if (!names) {
      console.warn('User not found in localStorage');
      return;
    }
    let name1 = JSON.parse(names).name;
    const a = {
      user: name1,
      movieid: id,
      movie: found.movie,
      image: found.image,
      rating: found.rating,
      likes: found.likes,
      booked: found.booked,
      runtime: found.runtime,
      genere:found.genere,
      certified:found.certified,
      desc: found.desc,
      release:found.releasedate,
    };
    localStorage.setItem('bookuser', JSON.stringify(a));
    //console.log('bookuser saved:', a)
    array.value.push(a);
    router.push('/bookmain');
  }
  onMounted(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      pn.value = JSON.parse(userData).name
    }
  })
  const hovered = ref(false);
  let vall = null;
  onMounted(() => {
    vall = setInterval(() => {
      if (!hovered.value) { nextImage()}
    },2000)
  })
  onUnmounted(() => {
    clearInterval(vall)
  })
</script>

<template>
  <div class="container1">
    <div class="upmovies">
      <p class="pp">Upcoming Movies</p>
      <div class="image-slider" @mouseenter="hovered = true" @mouseleave="hovered = false">
        <button class="nav-btn left" @click="prevImage"><i class="bi bi-caret-left-fill"></i></button>

        <div class="images">
          <img :src="upcomingdata[currentIndex].image" alt="Upcoming Movie" class="slider-image" />
        </div>

        <button class="nav-btn right" @click="nextImage"><i class="bi bi-caret-right-fill"></i></button>
      </div>
    </div>
    <p class="pp">Recommended Movies</p>
    <div class="ongoingcont">
      <div class="ongoing" v-for="movie in ongoingdata" :key="movie.id">
        <div class="innerong">
          <img :src='movie.image' />
            <span class='rat' v-if="movie.rating" style="margin-top:10px;">Rating <i class="bi bi-star-fill"></i> {{movie.rating}}/10</span>
            <span v-else style="margin-top:10px;">Likes <i class="bi bi-hand-thumbs-up-fill text-success"></i> {{movie.likes}}</span>
         
        </div>
        <span style="text-align:center;display:block;"><strong>{{movie.movie}}</strong></span>
        <button @click="booking(movie.movieid)">Book</button>
      </div>
    </div>
    <p class="pp">Hi {{pn}}</p>
  </div>
</template>

<style scoped>
  .container1 {
    margin-top:10px;
    width: 100%;
    height: 100%;
  }
  .pp{
    margin:15px;
    font-size:24px;
    font-weight:bold;
  }

  .image-slider {
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: 0px 2px 5px #eed1d1
  }
  .slider-image {
    width: 100%;
    height: 400px;
    display: block;
    border-radius:5px;
   
  }
  .nav-btn {
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    border: none;
    font-size: 3rem;
    padding: 10px;
    cursor: pointer;
    color:red;
    z-index: 50;
    transition: background 0.3s;
    background:none;
  }

    .nav-btn:hover {
      color:white;
    }

    .nav-btn.left {
      left: 10px;
    }

    .nav-btn.right {
      right: 10px;
    }
    .rat i{
      color:red;

    }
  .ongoingcont {
    display: flex;
    gap: 10px;
    padding: 20px;
    overflow-x: auto;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px #d5d1d1;
   
  }
   
  .ongoing {
    box-shadow: 0px 2px 3px #d5d1d1;
    padding:10px;
  }
    .innerong{
      display:flex;
      flex-direction:column;
      text-align:center;

    }
    .innerong img{
      width:200px;
      height:200px;
    }
    .innerong img:hover{
      transform:scale(1.03);
      border-radius:10px;
    }
    .ongoing button{
      width:100%;
      padding:5px;
      border:none;
      color:white;
      font-weight:bold;
      background-color:red;
      border-radius:10px;
    }
     .ongoing button:hover{
       background-color:crimson;
     }
    @media (max-width:700px) {
      .slider-image {
      width: 100%;
      height: 200px;
      display: block;
      border-radius: 5px;
    }
    .nav-btn{
      font-size:25px;
    }
  }
</style>
