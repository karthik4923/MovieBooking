<script setup>
  import standup from '../../assets/images/standupicon.jpg';
  import performance from '../../assets/images/performance.png';
  import adven from '../../assets/images/adventure.png';
  import cricket from '../../assets/images/cricket.png';
  import music from '../../assets/images/music.png';
  import sport from '../../assets/images/sport.png';
  import webseries from '../../assets/images/webseries.jpg';
  import { todaydata } from './live.js'
  import { musicEvents, standupComedians, adventureParks, sportsEvents, cricketEvents, performanceArts } from './live.js';
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const todind = ref(0)
  const n = todaydata.length;
  const hovered = ref(false);
  onMounted(() => {
    setInterval(() => {
      if (hovered.value===false) { moveright()}
    },2000);
  });
  onUnmounted(() => {
    clearInterval(hovered)
  })
  function moveleft() {
    todind.value = (todind.value - 1 + n) % n
  }

  function moveright() {
    todind.value = (todind.value + 1) % n
  }
  function booking(data) {
    localStorage.setItem('showbook', JSON.stringify({ ...data }));
    console.log(data);
    router.push('/show');
  }
</script>
<template>
  <div class="outercont">
    <div class="content">
      <div class="lister">
        <a href="#concert"><img :src="music" /></a>
        <p>Concerts</p>
      </div>

      <div class="lister">
        <a href="#standup"><img :src="standup" /></a>
        <p>Comedy</p>
      </div>
      <div class="lister">
        <a href="#adventure"><img :src="adven" /></a>
        <p>Adventure</p>
      </div>
      <div class="lister">
        <a href="#sport"><img :src="sport" /></a>
        <p>sports</p>
      </div>
      <div class="lister">
        <a href="#cricket"><img :src="cricket" /></a>
        <p>Cricket</p>
      </div>
      <div class="lister">
        <a href="#performance"><img :src="performance" /></a>
        <p>Performances</p>
      </div>

    </div>
    <div class="slider">
      <div class="heade">
        <h5>Things To Do in Your City</h5>
        <h5>Here's what everyone is booking</h5>
      </div>

      <div class="sliderr" @mouseenter="hovered = true" @mouseleave="hovered = false">
        <button class="nav-but leftnav" @click="moveleft"><i class="bi bi-caret-left-fill fs-2"></i></button>
        <div class="containing">

          <div class="leftside">
            <img :src="todaydata[todind].image" />
            <div class="dots">
              <span v-for="(item,index) in todaydata"
                    :key="index"
                    :class="['dot',{active:index===todind}]"></span>

            </div>
          </div>
          <div class="rightside">
            <p><h3>{{todaydata[todind].name}}</h3></p>
            <p>{{todaydata[todind].type}}</p>
            <p>{{todaydata[todind].desc}}</p>
            <p>&#8377;{{todaydata[todind].price}}</p>
            <button @click="booking(todaydata[todind])" class="booking">Book Now</button>
          </div>


        </div>
        <button class="nav-but rightnav" @click="moveright"><i class="bi bi-caret-right-fill fs-2"></i></button>
      </div>
    </div>
    <div class="marginer">
      <img :src="webseries" />
    </div>
    <h4 class="head">Music Concerts</h4>
    <div id="concert" class="eventer">

      <div v-for="(events,index) in musicEvents" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(musicEvents[index])">Book Now</button>
        </div>
      </div>
    </div>
    <h4 class="head">Stand-up Comedy shows</h4>
    <div id="standup" class="eventer">

      <div v-for="(events,index) in standupComedians" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(standupComedians[index])">Book Now</button>
        </div>
      </div>
    </div>
    <h4 class="head">Go for Adventures</h4>
    <div id="adventure" class="eventer">

      <div v-for="(events,index) in adventureParks" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(adventureParks[index])">Book Now</button>
        </div>
      </div>
    </div>
    <h4 class="head">Sports Today</h4>
    <div id="sport" class="eventer">

      <div v-for="(events,index) in sportsEvents" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(sportsEvents[index])">Book Now</button>
        </div>
      </div>
    </div>
    <h4 class="head">Live Cricket Match</h4>
    <div id="cricket" class="eventer">

      <div v-for="(events,index) in cricketEvents" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(cricketEvents[index])">Book Now</button>
        </div>
      </div>
    </div>
    <h4 class="head"> Performance Arts</h4>
    <div id="performance" class="eventer">

      <div v-for="(events,index) in performanceArts" :key="index" class="ineve">
        <div class="laber">
          <img :src="events.image" />
          <p><h5>{{events.name}}</h5></p>
          <p>{{events.desc}}</p>
          <p><strong>{{events.date}}</strong></p>
          <p><strong>Price: </strong>&#8377;{{events.price}}</p>
          <button @click="booking(performanceArts[index])">Book Now</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .outercont {
    margin-top: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .slider {
    color: white;
   
    position:relative;
    background: linear-gradient(270deg, #576f8d 10%, #2d406d 80%);
  }
  .heade{
    margin-left:10px;
    padding:10px;
  }
  .leftnav{
    left:10px;
  }
  .rightnav{
    right:10px;
  }
  .sliderr {
    display: flex;
    position:relative;
  }
  
  .booking {
   position:absolute;
    bottom: 20px;
    width:200px;
    background-color: deeppink;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight:bold;
   

  }
  .nav-but {
    color:white;
    border: none;
    position: absolute;
    font-size: large;
    background: none;
    padding: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .nav-but:hover{
    color:red;
  }

  .containing{
    display:flex;
  }
  .leftside {
    padding: 10px;
    box-sizing: border-box;
  }
    .leftside img {
      height: 200px;
      width: 200px;
      border-radius: 10px;
    }
   

  .rightside {
    position: relative;
    padding: 5px;
    box-sizing: border-box;
  }

    .rightside p {
      margin: 0;
    }
  .dots {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .dot {
    height: 10px;
    width: 10px;
    margin: 0 4px;
    background-color: #ccc;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

    .dot.active {
      background-color: white; 
      transform: scale(1.2);
    }
  .content {
    display: flex;
    gap: 15px;
    margin: 5px;
    overflow-x:auto;
  }

    .content img {
      border-radius: 20px;
      width: 70px;
      height: 70px;
      box-shadow: 0px 2px 5px #ccc;
    }
    .content img:hover{
      transform:scale(1.1);
      border:2px solid #42b9ff ;

    }
    .lister{
      padding:5px;
    }
    .lister img{
      padding:5px;
    }
      .lister p {
        word-break: break-word;
        overflow-wrap: break-word;
        text-align: center;
        font-weight: bold;
        max-width: 85px;
        white-space: normal;
        font-size: small;
        margin-top: 5px;
      }
      .marginer{
        margin-top:0;
        height:200px;
        padding:5px;
        width:100%;
        display:flex;
        flex-wrap:wrap;
        background-color:aliceblue;
        justify-content:center;
        align-items:center;
        box-shadow:0px 2px 5px #ccc;
        transition:transform all 0.5s ease;
      }
      .marginer img{
        height:150px;
        max-width:800px;
        width:70%;
        
      }
      .marginer img:hover{
        border-radius:10px;
      }
      .eventer{
        display:flex;
        gap:20px;
        overflow-y:auto;
        padding:10px;
        height:600px;
        background:linear-gradient(45deg,#000000 10%,#7c7878 90%);
       
      }
     .ineve {
        //box-shadow: 0px 3px 6px #d9d9d9;
        //padding:10px;
        position:relative;
        
        box-sizing:border-box;
        border-radius:20px;
        //background:linear-gradient(180deg, #649cff 30%,#19785e 100%);
    
      }
     .head{
       border-top:2px solid #ccc;
       border-bottom:2px solid #ccc;
       padding:10px;
       margin-top:8px;
       text-align:center;
     }
  .laber {
    background: white;
    padding: 10px;
    border-radius: 10px;
    height: 100%;
    border: 3px solid #ccc;
  }
     .laber:hover{
       border:3px solid red;
     }
      .eventer img{
        width:200px;
        height:200px;
        border-radius:10px;
      }
      .laber p {
          max-width: 200px;
          margin-top:10px;
        }
      .ineve button{
        position:absolute;
        bottom:20px;
        padding:5px;
        border:none;
        color:white;
        background-color:deeppink;
        border-radius:10px;
        font-weight:bold;
        width:200px;
      }
      .ineve button:hover{
        background-color:red;
      }
</style>
