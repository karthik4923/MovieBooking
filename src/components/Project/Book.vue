<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // Fetch data from localStorage
  const bookingDetails = ref({
    theatername: '',
    time: '',
    date: ''
  })
  const userData = ref({})
  onMounted(() => {
    const user = localStorage.getItem('bookuser')
    if (user) {
      userData.value = JSON.parse(user)
    }
    const data = localStorage.getItem('theater')
    if (data) {
      bookingDetails.value = JSON.parse(data)
    } else {
      router.push('/main/home') 
    }
  })

  const seatPrice = 150

  const rows = ['A', 'B', 'C', 'D', 'E']
  const cols = [1, 2, 3, 4, 5, 6, 7, 8,9,10]

  const selectedSeats = ref([])
  const reservedSeats = ref(['A3', 'B5', 'C2']) 

  function toggleSeat(seatId) {
    if (reservedSeats.value.includes(seatId)) return

    const index = selectedSeats.value.indexOf(seatId)
    if (index === -1) {
      selectedSeats.value.push(seatId)
    } else {
      selectedSeats.value.splice(index, 1)
    }
  }

  function isReserved(seatId) {
    return reservedSeats.value.includes(seatId)
  }

  function isSelected(seatId) {
    return selectedSeats.value.includes(seatId)
  }

  const totalAmount = computed(() => selectedSeats.value.length * seatPrice)

  function confirmBooking() {
    const finalBooking = {
      ...bookingDetails.value,
      seats: selectedSeats.value,
      totalAmount: totalAmount.value
    }
    localStorage.setItem('finalBooking', JSON.stringify(finalBooking))
    alert('Booking Confirmed!')
    router.push('/payment')
  }
</script>

<template>
  <div class="container">
    <div class="header">
      <h2>Seat Selection</h2>
      <p>Movie: <strong>{{userData.movie}}</strong></p>
      <p>Theater : {{ bookingDetails.theatername }} | Time: {{ bookingDetails.time }} | Date: {{ bookingDetails.date }}</p>
      <p>Cost per seat: ₹{{ seatPrice }}</p>
    </div>

    
    <div class="seat-layout">
      <div v-for="row in rows" :key="row" class="seat-row">
        <div v-for="col in cols"
             :key="col"
             :class="[
            'seat',
            isReserved(row + col) ? 'reserved' : '',
            isSelected(row + col) ? 'selected' : ''
          ]"
             @click="toggleSeat(row + col)">
          {{ row + col }}
        </div>
      </div>
    </div>

    <!-- Bottom Info -->
    <div class="footer">
      <p>Selected Seats: {{ selectedSeats.join(', ') || 'None' }}</p>
      <p>Total Seats: {{ selectedSeats.length }}</p>
      <p>Total Amount: ₹{{ totalAmount }}</p>
      <button :disabled="selectedSeats.length === 0"
              class="confirm-btn"
              @click="confirmBooking">
        Confirm Booking
      </button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    padding: 20px;
  }

  .header {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .seat-layout {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    align-items:center;
  }

  .seat-row {
    display: flex;
    gap: 10px;
  }

  .seat {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
  }

    .seat:hover {
      background-color: #ccc;
    }

  .selected {
    background-color: green;
    color: white;
  }

  .reserved {
    background-color: red;
    color: white;
    cursor: not-allowed;
  }

  .footer {
    border-top: 1px solid #ccc;
    padding-top: 20px;
    font-size: 16px;
  }

  .confirm-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

    .confirm-btn:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
</style>
