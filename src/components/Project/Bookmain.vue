<script setup>
  import { ref, onMounted } from 'vue';
  import {useRouter} from 'vue-router'
  const book = ref(null);
  const showFullDesc = ref(false);
  const da = ref(false); 
  const ratingValue = ref(5);
  const router = useRouter();
  onMounted(() => {
    const found = localStorage.getItem('bookuser');
    if (found) {
      book.value = JSON.parse(found);
    } else {
      console.warn('No booking data found');
    }
  });
  function opened(){
    router.push('/theater');
  }
  function open() {
    da.value = true;
  }

  function close() {
    da.value = false;
  }
</script>

<template>
  <div v-if="book" class="container1">
    <div class="content">
      <div class="top">
        <button @click="$router.push('/main/home')">
          <i class="bi bi-arrow-left-circle fs-4"></i>
        </button>
        <p><strong>{{ book.movie }}</strong></p>
      </div>

      <div class="innercont">
        <div class="left">
          <img :src="book.image" class="imger" />
          <div class="rater">
            <div class="rating-info">
              <span><i class="bi bi-star-fill text-danger"></i> {{ book.rating }}/10 </span>
              <span>&nbsp;({{ book.likes }} Votes)</span>
            </div>
            <button class="rating" @click="open">Rate Now</button>
          </div>
          <div class="lbot">
            <span>IMAX</span>
            <span>2D</span>
            <span>3D</span>
            <span>4DX</span>
            <span>DOLBY CINEMA</span>
            <span>ENGLISH,HINDI,TELUGU,TAMIL</span>
            <p>{{book.runtime}}&nbsp; <strong>.</strong>&nbsp; {{book.genere}}&nbsp;  <strong>.</strong>&nbsp; {{book.certified}}&nbsp;  <strong>.</strong>&nbsp;{{book.release}} </p>
          </div>
          <div class="trending">
            <p><button><i class="bi bi-graph-up-arrow"></i> Trending</button><strong>&nbsp;{{book.booked}}</strong> booked in 1 hour</p>
          </div>
        </div>

        <div class="right">
          <div class="right">
            <div v-for="(para, index) in (showFullDesc ? book.desc.split('\n') : book.desc.split('\n').slice(0, 1))"
                 :key="index"
                 class="right-top">
              <p>{{ para.trim() }}</p>
            </div>

            <button v-if="book.desc.split('\n').length > 2"
                    @click="showFullDesc = !showFullDesc"
                    class="toggle-btn">
              {{ showFullDesc ? 'Show Less' : 'Show More' }}
            </button>
          </div>
          <div>
            <h3>CAST</h3>
          </div>
          <div>
            <h3>CREW</h3>
          </div>
        </div>
      </div>

      <div class="last">
        <button @click="opened">Book tickets</button>
      </div>
    </div>
  </div>

  
  <div v-if="da" class="modaler" @click.self="close">
   
    <div class="modal-content">
      <img :src="book.image">
      <h3>Rate this movie</h3>
      <div class="range-value">Your rating: {{ ratingValue }}</div>
      <input type="range" min="1" max="10" step="1" v-model="ratingValue" />
      
      <button @click="close" class="close-btn">Submit</button>
    </div>
  </div>

  <p v-else>Loading...</p>
</template>

<style scoped>
  .container1 {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    position: relative;
    transition: filter 0.3s ease;
  }

  .blurred {
    filter: blur(5px);
  }

  .content {
    padding-bottom: 70px;
  }

  .top {
    position: relative;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0px -2px 10px #d5d1d1;
    padding: 20px;
  }

    .top button {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border: none;
      background: none;
      margin-left: 10px;
    }

    .top i {
      color: red;
    }

    .top p {
      margin: 0;
      font-weight: bold;
      font-size: 1.2rem;
    }

  .left {
    padding: 20px;
  }
  .lbot{
      margin-top:10px;
      display:flex;
      flex-wrap:wrap;
      box-sizing:border-box;
  }
  .lbot span{
      background-color:gainsboro;
      flex-direction:column;
      color:black;
      padding:5px;
      margin:5px;
      font-size:smaller;
      box-sizing:border-box;
      border-radius:6px;
  }
  .innercont {
    display: flex;
  }

  .right {
    padding: 10px;
  }

  .imger {
    width:400px;
    height: 400px;
   
    border-radius: 10px;
  }

  .rater {
    background-color: aliceblue;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rating-info {
    display: flex;
  }

  .rating {
    border: 1px solid red;
    background-color: white;
    color: red;
    border-radius: 15px;
    padding: 6px 12px;
    font-weight:bold;
  }

    .rating:hover {
      background-color: red;
      color: white;
    }

  .toggle-btn {
    border: none;
    background-color: transparent;
    color: #fa6a6a;
    font-weight: bold;
    cursor: pointer;
    padding: 0;
  }

    .toggle-btn:hover {
      text-decoration: underline;
    }

  .last {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    padding: 10px;
    box-shadow: 0px -2px 10px #d5d1d1;
    z-index: 1000;
  }
   .last button {
      border: none;
      padding: 10px;
      border-radius: 10px;
      color: white;
      background-color: #fa6a6a;
      width: 100%;
      font-weight: bold;
    }
    .last button:hover {
        background-color: red;
    }
  .trending {
    margin-top: 10px;
    box-shadow: 0px -2px 10px #d5d1d1;
    border-radius: 10px;
    box-sizing: border-box;
  }
  .trending p{
      box-sizing:border-box;
      padding:6px;
      
  }
    .trending button{
        color:white;
        background-color:#467cff;
        border:none;
        padding:6px;
        border-radius:6px;
    }
  .modaler {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
  }

  .modal-content {
    background-color: white;
    padding: 20px 30px;
    border-radius: 10px;
    text-align: center;
    width: 300px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  .modal-content img{
      border-radius:10px;
  }
    .modal-content h3 {
      margin-bottom: 15px;
    }

    .modal-content input[type='range'] {
      width: 100%;
      margin: 10px 0;
    }
  .range-value {
    font-weight: bold;
    margin-bottom: 10px;
  }

 


  .close-btn {
    background-color: #fa6a6a;
    border: none;
    color: white;
    padding: 8px 20px;
    border-radius: 8px;
    cursor: pointer;
  }

    .close-btn:hover {
      background-color: red;
    }
</style>
