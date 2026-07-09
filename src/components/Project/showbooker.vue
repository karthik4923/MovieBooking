<script setup>
  import { ref } from 'vue';
  import venue from '../../assets/images/vemue.jpg'
  import { useRoute, useRouter } from 'vue-router'
  const router = useRouter();
  const found = localStorage.getItem('showbook');
  const data = ref();
  if (found) {
    data.value = JSON.parse(found)
  }
  const show = ref(false);
  function showable() {
    show.value = !show.value;
  }
  function booker(){
    alert('!booked successfully!');
    router.push('/main/home');
  }
</script>
<template>

  <div class="otcontain">
    <div class="topsider">
      <h4>{{data.name}}</h4>
    </div>
    <div class="incontain">
      <div class="lefter">
        <img :src="data.image" />
        <p><button class="type">{{data.type}}</button></p>
        <p><i class="bi bi-calendar2"> </i> Date : {{data.date}}</p>
        <p><i class="bi bi-alarm"> </i> Time : {{data.Time}}</p>
        <p><i class="bi bi-hourglass-split"> </i> Duration : {{data.duration}} Hours</p>
        <p><i class="bi bi-people"> </i> Age limit : {{data.Agelimit}}</p>
        <p><i class="bi bi-geo-alt"> </i> Place : {{data.place}}</p>
      </div>
      <div class="righter">
        <h4>About The Event</h4>
        <p>{{data.desc}}</p>
        <div v-if="data.maindesc">
          <p v-for="(line, index) in show ? data.maindesc.split('\n') : data.maindesc.split('\n').slice(0, 1)" :key="index">
            {{ line.trim() }}
          </p>
        </div>
        <button v-if="data.maindesc.split('\n').length > 1"
                @click="showable" class="descp">
          {{ show? 'Show Less' : 'Show More' }}
        </button>
        <br />
        <img class='imger' :src="venue" />



      </div>

    </div>
  </div>
  <div class="booker">
    <button @click="booker">Book Now</button>
  </div>
</template>
<style scoped>
  .otcontain {
    padding: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .topsider {
    text-align: center;
    padding: 10px;
    border-bottom: 3px solid #ccc;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .incontain {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .lefter {
    flex: 1;
    min-width: 300px;
    max-width: 300px;
    padding: 10px;
  }

    .lefter img {
      border-radius: 10px;
      width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 10px;
    }

    .lefter p {
      margin: 8px 0;
      font-size: 15px;
      line-height: 1.4;
    }

  .righter {
    flex: 2;
    min-width: 200px;
    padding: 10px;
    max-width: 700px;
  }

    .righter h4 {
      margin-bottom: 10px;
      color: #333;
    }

    .righter p {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 1.5;
    }

    

  .type {
    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 5px 10px;
    border: none;
    font-weight: bold;
  }
  .descp{
    background:none;
    border:none;
    color:red;
    text-decoration:underline;
  }
  .booker{
    padding:20px;
    box-shadow:3px 2px 6px #808080;
  }
  .booker button{
    width:100%;
    border:none;
    background:linear-gradient(45deg,red 20%,#7c1515 90%);
    padding:10px;
    color:white;
    border-radius:10px;
    font-weight:bold;
  }
  .imger{
    padding:10px;
    align-items:center;
  }
</style>

