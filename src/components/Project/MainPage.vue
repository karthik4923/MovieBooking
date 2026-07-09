<script setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function logout(){
    router.push('/')
  }
</script>
<template>
  <div class="cont">
    <div class="tope">
      <p class="m-0 fw-bold fs-4">BookMyShow</p>
      <button class="btn btn-outline-danger ms-auto d-flex align-items-center"
              @click="logout"
              title="Logout">
        <i class="bi bi-box-arrow-right me-1"></i>
        Logout
      </button>
      </div>
      <div class="topcon">
        <router-link to="home" class="link" active-class="act-link"><i style="padding:5px;" class="bi bi-house-fill"></i>Home</router-link>
        <router-link to="movie" class="link" active-class="act-link"><i style="padding:5px;" class="bi bi-camera-reels-fill"></i>Movies</router-link>
        <router-link to="live" class="link" active-class="act-link"><i style="padding:5px;"class="bi bi-ticket-perforated-fill"></i>Live</router-link>
        <router-link to="profile" class="link" active-class="act-link"><i style="padding:5px;" class="bi bi-person-fill"></i>Profile</router-link>
      </div>
      <div class="topmid">
        <router-view />
      </div>
    </div>
</template>
<style scoped>
  .cont{
    width:100%;
    height:100%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }
  .tope {
    display: flex;
    align-items:center;
    padding:10px;
    justify-content:space-between;
    
  }
   .tope p {
      font-weight: bold;
      font-size: 20px;
   }
  .logout-btn {
    margin-right: 5px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    transition: color 0.3s ease;
  }

    .logout-btn:hover {
      color: crimson;
    }
  .topcon {
    display: flex;
    background-color:#f26262;
    border-radius: 10px;
  }
  .topcon .link{
    color:white;
    font-weight:bold;
    text-decoration:none;
    padding:20px;
    transition:0.5s background-color ease;
  }
  
  .link:hover{
    background-color:crimson;
    color:whitesmoke;
    transform:scale(1.1);
    font-weight:bold;
    border-radius:5px;
  }
  .act-link {
    background-color: crimson;
    color: whitesmoke;
    border-radius:5px;
  }
 
</style>
