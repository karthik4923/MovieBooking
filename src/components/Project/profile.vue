<script setup>
  
import { ref } from 'vue'

  const users = localStorage.getItem('user')
  const payment = localStorage.getItem('booked')
  const movies = localStorage.getItem('moviesbuyed')

  const user = ref({})
  const paied = ref([])
  const movie = ref([])

 
  if (users) {
    try {
      user.value = JSON.parse(users)
    } catch {
      user.value = {}
    }
  }

  console.log(payment);
  if (payment) {
    try {
      paied.value = JSON.parse(payment)

      if (!Array.isArray(paied.value)) paied.value = []
      //paied.value = paied[user.value.name].value;
      paied.value = paied.value.filter(b => b.user?.user?.toLowerCase() === user.value.name?.toLowerCase());

    } catch {
      paied.value = []
    }
  }
 /* if (payment) {
    try {
      const paymentObj = JSON.parse(payment)  // Object with usernames as keys
      const userKey = user.value.name?.toLowerCase()  // e.g. "karthik"

      if (paymentObj && typeof paymentObj === 'object' && !Array.isArray(paymentObj)) {
        paied.value = paymentObj[userKey] || []  // bookings for logged-in user or empty array
      } else {
        paied.value = []
      }
    } catch {
      paied.value = []
    }
  }*/

  if (movies) {
    try {
      const moviesObj = JSON.parse(movies);
      const userKey = user.value.name?.toLowerCase();
      if (typeof moviesObj === 'object' && !Array.isArray(moviesObj)) {
        movie.value = moviesObj[userKey] || [];
      } else {
        movie.value = [];
      }
    } catch {
      movie.value = [];
    }
  }


  const op = ref(null)

  function opener(id) {
    op.value = op.value === id ? null : id
  }

  function cancelBooking(index) {
    if (confirm('Are you sure you want to cancel this booking?')) {
      paied.value.splice(index, 1)
      localStorage.setItem('booked', JSON.stringify(paied.value))
    }
  }
</script>




<template>
  <div class="outter">
    <h3>Hi! {{ user.name }}</h3>
    <div class="liner"></div>

    <div class="innercontent">

      <div class="clickers" @click="opener(1)">
        <p class="clickbut"><i class="bi bi-person-circle"></i> Account</p>
        <p class="matter">Edit your Details</p>
      </div>
      <div v-if="op === 1" class="details">
        <p><strong><i class="bi bi-person"></i> Name : </strong>{{ user.name }}</p>
        <p><strong><i class="bi bi-envelope"></i> Mail : </strong>{{ user.email }}</p>
        <p><strong><i class="bi bi-crosshair"></i> Location : </strong>Hyderabad</p>
      </div>
      <div class="clickers" @click="opener(2)">
        <p class="clickbut"><i class="bi bi-cart-dash"></i> Your Orders</p>
        <p class="matter">View all your bookings & purchases</p>
      </div>
      <div v-if="op === 2" class="details2">
        <div v-if="paied.length === 0">
          <p>No bookings found.</p>
        </div>
        <div v-else>
          <div v-for="(booking, index) in paied"
               :key="index"
               class="booking-item">

            <p><strong>Booking #{{ index + 1 }}</strong></p>
            <img :src="booking.user.image" alt="Booking Image" style="max-width: 100px; border-radius: 6px;" />
            <p><strong>Theater:</strong> {{ booking.theatername }}, {{ booking.tplace }}</p>
            <p><strong>Date:</strong> {{ booking.date }}</p>
            <p><strong>Time:</strong> {{ booking.time }}</p>
            <p><strong>Seats:</strong> {{ booking.seats?.join(', ') }}</p>
            <p><strong>Total Amount:</strong> ₹{{ booking.totalAmount }}</p>
            <p><strong>Status:</strong> {{ booking.status }}</p>
            <p><strong>Booked At:</strong> {{ new Date(booking.bookedAt).toLocaleString() }}</p>
            <button @click="cancelBooking(index)" style="background: #e74c3c; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">
              Cancel
            </button>
            <hr />
          </div>
        </div>
      </div>

      <div class="clickers" @click="opener(3)">
        <p class="clickbut"><i class="bi bi-tv"></i> Stream Library</p>
        <p class="matter">Rented or purchased Movies</p>
      </div>
      <div v-if="op===3" class="details3">
        <div class="detailer3">
          <div v-for="(data,index) in movie" :key="index" class="d3">
            <img :src="data.image" alt="Movie Image" style="max-width: 150px; border-radius: 6px;" />
            <p>{{data.name}}</p>
            <div v-if="data.buyed===true">
              <p>Purchased for ₹{{data.buy}}</p>
            </div>
            <div v-else>
              <p>Rented for ₹{{data.rent}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="clickers">
        <p class="clickbut"><i class="bi bi-question-circle"></i> Help center</p>
        <p class="matter">Need help or have Questions?</p>
      </div>
      <div class="clickers">
        <p class="clickbut"><i class="bi bi-gear"></i> Settings</p>
        <p class="matter">Location, Payments, Permissions & More...</p>
      </div>
    </div>
  </div>
 
</template>

<style scoped>
  .outter h3 {
    margin-top: 10px;
    margin-left: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  .liner {
    border-bottom: 2px solid #ccc;
  }

  .innercontent {
    margin-top: 20px;
  }

  .clickers {
    background-color: aliceblue;
    width: 100%;
    box-shadow: 2px 3px 5px #ccc;
    margin-bottom: 10px;
  }

    .clickers .clickbut {
      font-size: large;
      cursor: pointer;
      margin-bottom: 0px;
      padding-left: 5px;
    }

  .matter {
    margin-top: 0px;
    margin-left: 25px;
    font-size: small;
  }

  .details {
    padding: 10px;
  }

  .booking-item {
    background: #f9f9f9;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
  }

  .details3 {
    padding: 10px;
  }

  .detailer3 {
    display: flex;
    gap: 10px;
    padding: 5px;
  }

    .detailer3 img {
      height: 200px;
      width: 200px;
    }

  .d3 {
    background-color: azure;
    padding: 15px;
  }
</style>
