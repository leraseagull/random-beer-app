<template>
  <Nav @getDataUsers="getDataUsers" />
  <Main @getDataBeer="getDataBeer" @getDataColor="getDataColor" :users="users" :beer="beer" ></Main>
  <FooterNav/>
</template>

<script>

import Nav from "@/components/Nav";
import Main from "@/components/Main";
import FooterNav from "@/components/FooterNav";
import axios from 'axios';
import BeerRandom from "@/components/Main.vue";

export default {
  components: {
    Nav,
    Main,
    FooterNav,
    axios,
    BeerRandom,
  },

  data() {
    return {
      beer: [],
      users: [],
      colors: [
        {}
      ]
    }
  },

  methods: {
    async getDataUsers() {
      try {
        const response = await axios.get('https://random-data-api.com/api/users/random_user');
        const dataRes = response.data;
        this.users.pop();
        this.users.push(dataRes);
        await this.getDataColor();
      } catch (err) {
        alert('Упс! Ошибка')
      }
    },
    async getDataBeer() {
      try {
        const response = await axios.get('https://random-data-api.com/api/beer/random_beer');
        const dataRes = response.data;
        this.beer.pop();
        this.beer.push(dataRes);
      } catch (err) {
        alert('Упс! Ошибка')
      }
    },
    async getDataColor() {
      try {
        const response = await axios.get('https://random-data-api.com/api/color/random_color');
        const color = response.data;
        const card = document.getElementsByClassName('card__change');
        const cardArr = Array.from(card);
        cardArr.forEach((el) => {
          el.style.backgroundColor = color.hex_value;
        })
      } catch (err) {
        alert('Упс! Ошибка')
        console.log(err)
      }
    }
  },
  mounted() {
    // this.showPreloader = true;
    this.getDataColor();
    this.getDataUsers();
    this.getDataBeer();
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}
body {
  height: 100%;
  width: 100%;
  background: blueviolet;
}

#app {
  font-family: 'Poppins', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-items: center;
  color: white;
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 1024px) {
  #app {
    padding: 1rem;

  }
}

</style>