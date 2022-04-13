<template>
<main class="main">
  <h1 class="main__title">Random beer generator</h1>
  <div class="cards" >
    <div class="card card__change">
      <div class="card__container">
        <div v-for="item in users" style="display: flex; flex-direction: column; align-items: center; text-align: left">
          <img class="card__img" :src="item.avatar" alt="avatar"/>
          <div class="card__item-container card__item-container_height">
            <p style="text-align: left"><strong>Имя: </strong></p>
            <div class="card__name-container card__item-container_height" >
              <p class="card__name" style="margin-right: 5px">{{ item.first_name }}</p>
              <p class="card__name">{{ item.last_name }}</p>
            </div>
          </div>
          <div class="card__item-container">
            <p style="text-align: left"><strong>Возраст: </strong></p>
            <p class="card__name">{{getAge(item.date_of_birth)}}</p>
          </div>
          <div class="card__item-container">
            <p style="text-align: left"><strong>Должность: </strong></p>
            <p class="card__name card__item-container_height">{{ item.employment.title }}</p>
          </div>

        </div>
      </div>
    </div>
    <div class="card card__border">
      <BeerRandom :beerRandom="beer"/>
    </div>
  </div>
  <button class="card__btn" @getDataBeer="getDataBeer" @click="getDataBeer">Сгенерировать</button>
</main>
</template>

<script>

import BeerRandom from "@/components/BeerRandom";

export default {
  components: {
    BeerRandom,
  },
  props: {
    users: {
      type: Array,
      required: true
    },
    beer: {
      type: Array,
      required: true
    },
  },

  methods: {
    getAge(date) {
      return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    },
    getDataBeer() {
      this.$emit("getDataBeer");
    },
    getDataUsers() {
      this.$emit("getDataUsers");
      this.getDataColor();
    },
    getDataColor() {
      this.$emit("getDataColor")
    },
    mounted() {
      this.getDataBeer();
      this.getDataUsers();
    }
  },

}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blueviolet;
  width: 100%;

  border-radius: 10px;
  margin: 20px 0 20px 0;
}
.main__title {
  font-size: 46px;
  text-transform: uppercase;
}
.cards {
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 160px;
}

@media screen and (max-width: 1024px) {
  .cards {
    max-width: 400px;
    grid-template-columns: 280px;
    row-gap: 12px;

  }
}


.card {
  width: auto;
  max-height: 400px;
  margin-top: 20px;
  padding: 1rem;
  border-radius: 10px;
  font-size: 13px;
}

.card__border {
  border: 1px solid white;
}

.card__img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 50px;
}

.card__container {
  margin: auto;
  text-align: left;
}

.card__name-container {
  display: flex;
  justify-content: end;
}

.card__btn {
  cursor: pointer;
  margin-top: 50px;
  background: inherit;
  color: white;
  border: 1px solid white;
  padding: 1rem;
}

.card__item-container {
  display: grid;
  grid-template-columns: 80px 120px;
  gap: 60px;
  align-items: center;
  margin-bottom: 5px;
  text-align: end;

}
.card__item-container_height {
  max-height: 70px;
  text-align: end;
}
</style>