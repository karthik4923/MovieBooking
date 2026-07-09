<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const data = ref({});
  const router = useRouter();
  const found = ref();

  const users = localStorage.getItem('user');
  let user = '';

  if (users) {
    try {
      const parsedUser = JSON.parse(users);
      user = parsedUser.name?.toLowerCase() || '';
    } catch {
      user = '';
    }
  }

  onMounted(() => {
    found.value = localStorage.getItem('buyed');
    if (found.value) {
      try {
        data.value = JSON.parse(found.value);
      } catch {
        data.value = {};
      }
    }
  });

  function back(boole) {
    if (boole === true) {
      let storedMovies = localStorage.getItem('moviesbuyed');
      let moviesByUser = {};

      

      if (!moviesByUser[user]) {
        moviesByUser[user] = [];
      }

      
      const alreadyAdded = moviesByUser[user].some(
        movie => movie.name === data.value.name
      )

      if (!alreadyAdded) {
        moviesByUser[user].push(data.value);
      }
      console.log()
      localStorage.setItem('moviesbuyed', JSON.stringify(moviesByUser));

      alert('Purchase successful!');
    }

    router.push('/main/movie');
  }
</script>

<template>
  <div class="containerser">
    <div v-if="Object.keys(data).length > 0" class="innerc">
      <img :src="data.image" alt="Movie Poster" />
      <p><strong>Movie:</strong> {{ data.name }}</p>
      <p><strong>Duration:</strong> {{ data.duration }}</p>

      <div v-if="data.rented === true">
        <p><strong>Rent: ₹{{ data.rent }}</strong></p>
      </div>
      <div v-else>
        <p><strong>Buy: ₹{{ data.buy }}</strong></p>
      </div>

      <div class="innerc1">
        <button @click="back(true)">Pay</button>
        <button @click="back(false)">Cancel</button>
      </div>
    </div>
    <div v-else>
      <p>Loading movie details...</p>
    </div>
  </div>
</template>

<style>
  .containerser {
    width: 100%;
    height: 100vh;
    padding: 20px;
    background: linear-gradient(270deg, #576f8d 10%, #2d406d 80%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .innerc {
    box-shadow: 0px 2px 5px #dbd9d9;
    padding: 20px;
    border-radius: 20px;
    width: 300px;
    text-align: center;
  }

    .innerc p {
      text-align: left;
      padding-left: 50px;
    }

  .innerc1 {
    display: flex;
    gap: 10px;
    padding-left: 50px;
  }

    .innerc1 button {
      background-color: red;
      border: 2px solid red;
      padding: 10px;
      border-radius: 10px;
      color: white;
    }

  .innerc button:hover {
    background-color: white;
    color: red;
  }
</style>
