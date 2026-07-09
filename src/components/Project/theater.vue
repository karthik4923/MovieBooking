<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const dates = ref([])
  const today = new Date()
  for (let i = 0; i < 4; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    dates.value.push(d)
  }

  const selectedDate = ref(today);

  function selectDate(date) {
    selectedDate.value = date
  }

  function backToHome() {
    try {
      router.push('/main/home');
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }

  const theaters = [
    {
      name: 'INOX',
      place: 'Begumpet',
      timings: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM']
    },
    {
      name: 'PVR',
      place: 'Ameerpet',
      timings: ['11:00 AM', '2:30 PM', '5:30 PM', '9:00 PM']
    }
  ]
  function goToSeatSelection(theaterName,place, time) {
    const a = {
      theatername: theaterName,
      tplace: place,
      time: time,
      date: selectedDate.value.toDateString(),
    }
    localStorage.setItem('theater', JSON.stringify(a));
    router.push('/book')
  }
</script>

<template>
  <div class="containerss">
    <button @click="backToHome" class="back-btn">← Back</button>

    <div class="date1">
      <div v-for="d in dates"
           :key="d"
           @click="selectDate(d)"
           :class="['dates2', { active1: selectedDate && d.toDateString() === selectedDate.toDateString() }]">
        <div class="day-number">{{ d.getDate() }}</div>
        <div class="day-name">{{ d.toLocaleDateString('en-US', { weekday: 'short' }) }}</div>
      </div>
    </div>
    <div v-if="selectedDate" class="theaters">
      <h3>Available Theaters:</h3>
      <div v-for="t in theaters" :key="t.name" class="theater-card">
        <h4>{{ t.name }} - {{ t.place }}</h4>
        <div class="timings">
          <button v-for="time in t.timings"
                  :key="time"
                  class="timing-btn"
                  @click="goToSeatSelection(t.name,t.place ,time)">
            {{ time }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .containerss {
    padding: 20px;
  }

  .back-btn {
    margin-bottom: 15px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: red;
  }

  .date1 {
    display: flex;
    gap: 20px;
    width: 100%;
    box-shadow: 2px 1px 5px gainsboro;
    border-radius: 10px;
    padding: 10px;
  }

  .dates2 {
    padding: 10px;
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
  }

    .dates2:hover {
      background-color: gainsboro;
      cursor: pointer;
    }
  .active1 {
    background-color: aliceblue;
    color: gray;
    border-left:5px solid red;
   
  }
  
  .day-number {
    font-size: 24px;
  }

  .day-name {
    font-size: 14px;
    color: gray;
  }
  .theaters {
    margin-top: 30px;
  }

  .theater-card {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.1);
  }

  .timings {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    flex-wrap: wrap;
  }

  .timing-btn {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

    .timing-btn:hover {
      background-color: #0056b3;
    }

</style>
