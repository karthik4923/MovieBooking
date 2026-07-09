<script setup>
  import { generedata, premdata,moviedata } from './Movies.js'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter();
  const actind = ref(null)
  function toggle(ind) {
    actind.value = actind.value === ind ? null : ind
  }
  const showFullList = ref({})

  function toggleShowMore(index) {
    showFullList.value[index] = !showFullList.value[index]
  }
  
  
  const rented = ref(false);
  const buyed = ref(false);
  function buy(id, rent, buy) {
    const selecte = premdata[id]
    const a = {
      ...selecte,
      rented : rent,
      buyed: buy,
    }
    localStorage.setItem('buyed', JSON.stringify(a));
    console.log(buyed);
    const selected = premdata[id];
   
    router.push('/buy');
  }
  const activated = ref(null);
  function selectgenere(id) {
    activated.value = activated.value === id ? null : id;
  }
</script>
<template>
  <div class="container1">
    <div class="inncontain">
      <div class="top">
        <h3>Premiere Movies</h3>


        <div class="premcont">
          <div v-for="(prem, index) in premdata"
               :key="index"
               class="thumbnail"
               @click="toggle(index)">
            <img :src="prem.image" />
          </div>
        </div>


        <div v-if="actind !== null" class="active-movie">
          <div class="active-left">
            <img :src="premdata[actind].image" />
          </div>
          <div class="active-right">
            <h3 style="color:white;"><strong>{{premdata[actind].name}}</strong></h3>

            <span style="color:aliceblue;font-size:small;justify-content:space-between;">
              {{premdata[actind].duration}}&nbsp;<strong>.</strong>&nbsp;
              {{premdata[actind].genere}}&nbsp;<strong>.</strong>&nbsp;
              {{premdata[actind].certified}}&nbsp;<strong>.</strong>&nbsp;
              {{premdata[actind].releasedate}}&nbsp;<strong>.</strong>&nbsp;
            </span>
            <p style="color: aliceblue; font-size: small">Languages: English, Hindi, Telugu, Tamil</p>
            <div class="desc-area">
              <div v-for="(para, i) in (showFullList[actind] ? premdata[actind].desc.split('\n') : premdata[actind].desc.split('\n').slice(0, 1))"
                   :key="i">
                <p>{{ para.trim() }}</p>
              </div>
            </div>
            <button v-if="premdata[actind].desc.split('\n').length > 1"
                    @click="toggleShowMore(actind)"
                    class="show">
              {{ showFullList[actind] ? 'Show Less' : 'Show More' }}
            </button>
            <div class="butter">
              <button @click="buy(actind,true,false)">Rent: ₹{{ premdata[actind].rent }}</button>
              <button @click="buy(actind,false,true)">Buy: ₹{{ premdata[actind].buy }}</button>
            </div>
          </div>
        </div>
      </div>

      <h3>Buy Or Rent</h3>
      <div class="middle">
        <p class="select-label">Select Genre</p>
        <div class="middletop">
          <div v-for="genere in generedata"
               :key="genere.name"
               class="genecont"
               @click="selectgenere(genere.id)"
               :class="{'actg':activated===genere.id}">
            <div class="image-wrapper">
              <img :src="genere.image" alt="Genre" />
              <p class="genre-name">{{ genere.name }}</p>
            </div>
          </div>
        </div>
      </div>



    </div>
    <div class="bottom">
      <div v-if="activated && moviedata[activated]"
           class="genre-movies-row">
        <div v-for="(movie, index) in moviedata[activated]" :key="index" class="movie-card">
          <img :src="movie.image" class="movie-thumb" />
          <p class="movie-name">{{ movie.name }}</p>
          <div class="butner">
            <button>Buy</button>
            <button class="ipp"><i class="bi bi-play-fill"> </i>Watch</button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>


<style scoped>
  .container1 {
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h3 {
    margin-left: 10px;
    color: black;
    margin-bottom:15px;
  }

  .premcont {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding: 10px;
    background: linear-gradient(45deg, #000000 30%, #440b0b 50%);
    border-radius: 10px;
    scroll-behavior: smooth;
    margin-bottom: 20px;
  }

    .premcont::-webkit-scrollbar {
      height: 6px;
     
    }

    .premcont::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 20px;
    }

      .premcont::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
      }
      .thumbnail{
        padding:20px;
      }
  .thumbnail img {
    height: 150px;
    width: 150px;
    border-radius: 15px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

    .thumbnail img:hover {
      transform: scale(1.05);
    }

  .active-movie {
    display: flex;
    gap: 30px;
    padding: 20px;
    background-color: #1c1c1c;
    border-radius: 10px;
    margin-top: 20px;
    color: white;
  }

  .active-left img {
    width: 250px;
    height: 300px;
    border-radius: 20px;
  }

  .desc-area {
    flex: 1;
    overflow-y: auto;
    max-height: 80px;
  }

    .desc-area::-webkit-scrollbar {
      width: 4px;
    }

  .desc-area::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  .show {
    background: none;
    border: none;
    color: orangered;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 10px;
  }

  .butter {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }

    .butter button {
      border: none;
      background-color: red;
      color: white;
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;
      transition: transform all 0.3s ease;
      border: 1px solid red;
    }
    .butter button:hover{
      background-color:white;
      border:1px solid red;
      color:red;
    }

  .premincont img {
    height: 200px;
    width: 200px;
    border-radius: 20px;
    transition: transform 0.3s ease;
  }

    .premincont img:hover {
      transform: scale(1.05);
    }

  .prname {
    color: white;
    font-weight: bold;
  }

  .show {
    background: none;
    border: none;
    color: orangered;
    text-decoration: underline;
  }

  .butter button {
    border: none;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 10px;
  }

  .butter {
    display: flex;
    gap: 20px;
  }

  .middle {
    background: linear-gradient(270deg, #576f8d 10%, #2d406d 80%);
    padding: 15px;
    border-radius: 5px;
    overflow-x: hidden;
  }


  .select-label {
    color: red;
    margin-left: 10px;
    font-weight: bold;
  }

  .middletop {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 10px 0;
    scroll-behavior: smooth;
  }

    .middletop::-webkit-scrollbar {
      height: 6px;
    }

    .middletop::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }

      .middletop::-webkit-scrollbar-thumb:hover {
        background: white;
      }

    .middletop::-webkit-scrollbar-track {
      background: transparent;
    }

  .genecont {
    min-width: 120px;
    flex-shrink: 0;
    text-align: center;
    transition: transform 0.3s ease;
    margin-left: 5px;
  }

    .genecont:hover {
      transform: scale(1.05);
    }

  .image-wrapper {
    position: relative;
    width: 100px;
    height: 130px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 6px;
    }

  .genre-name {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 6px 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s ease;
    text-shadow: 0 0 5px white;
  }

    .genre-name:hover {
      text-decoration: overline;
      text-decoration-thickness: 2px;
      text-underline-offset: 4px;
      background: rgba(255, 255, 255, 0.7);
      color: black;
      text-shadow: 0 0 10px black;
    }
    .actg .image-wrapper {
    outline: 2px solid red;
    transform: scale(1.05);
    box-shadow: 0 0 10px red;
  }
  .actg .genre-name {
    text-decoration: overline;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
    background: rgba(255, 255, 255, 0.7);
    color: black;
    text-shadow: 0 0 10px black;
  }

  .genre-movies-row {
    display: flex;
    gap: 20px;
    overflow-x: auto;
    padding: 15px;
    scroll-behavior: smooth;
  }

    .genre-movies-row::-webkit-scrollbar {
      height: 6px;
    }

    .genre-movies-row::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 20px;
    }

      .genre-movies-row::-webkit-scrollbar-thumb:hover {
        background-color: #aaa;
      }

  .movie-card {
    width: 200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    text-align: center;
    flex-shrink: 0;
  }
  .movie-card img{
      height:200px;
      width:150px;
  }
    .movie-card p {
      word-break: break-word;
      overflow-wrap: break-word;
      white-space: normal;
      text-align: center;
      font-weight: bold;
    }

  .movie-thumb {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
  }

  .movie-name {
    font-weight: bold;
    margin: 10px 0;
  }
      
  .butner {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

    .butner button {
      flex: 1;
      padding: 5px;
      border: none;
      background-color: red;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight:bold;
    }
    .butner .ipp{
        font-size:15px;
        font-weight:bold;
       
    }
      .butner button:hover {
        background-color: darkred;
      }

</style>
