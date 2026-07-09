<script setup>
  import { useRouter } from 'vue-router'
  import { users } from './user'
  import { ref } from 'vue'

  const router = useRouter()
  const user = ref('')
  const pass = ref('')
  const msg = ref('')

  function login() {
    const found = users.find((t) => t.email === user.value)
    if (found && found.password === pass.value) {
      localStorage.setItem('user', JSON.stringify(found))
      router.push('/main/home')
    } else {
      msg.value = 'wrong credentials!'
    }
  }
</script>

<template>
  <div class="container">
    <div class="form">

      <label>Username</label>
      <div class="input-wrapper">
        <i class="bi bi-person-circle"></i>
        <input type="text" v-model="user" required placeholder="Username" />
      </div>

      <label>Password</label>
      <div class="input-wrapper">
        <i class="bi bi-lock-fill"></i>
        <input type="password" v-model="pass" required placeholder="Password" />
      </div>

      <button class="but" @click="login">Login</button>

      <p>Don't have account? <span><strong>Sign up</strong></span></p>

      <p v-if="msg" class="error">{{ msg }}</p>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px #d5d1d1;
  }

    .form label {
      margin: 10px 5px 5px 5px;
      font-weight: 600;
    }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    border: 1px solid #e0d6d6;
    border-radius: 10px;
    padding-left: 35px; 
    background: white;
    transition: border-color 0.3s ease;
  }

    
    .input-wrapper i {
      position: absolute;
      left: 10px;
      font-size: 20px;
      color: #888;
      pointer-events: none; 
    }

    
    .input-wrapper input {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px 10px 10px 0;
      font-size: 1rem;
      background: transparent;
    }
    .input-wrapper input:focus{
        border-color: red;
        outline: none;
      }
    .input-wrapper:focus-within {
      border: 1.5px solid red;
    }


  .form .but {
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: large;
    background-color: red;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

    .form .but:hover {
      background-color: crimson;
      color: wheat;
    }

  .form p {
    margin-top: 5px;
    text-align: center;
  }

  .form span {
    cursor: pointer;
    color: blue;
    user-select: none;
  }

  .error {
    color: red;
    font-weight: 600;
    text-align: center;
    margin-top: 10px;
  }
</style>
