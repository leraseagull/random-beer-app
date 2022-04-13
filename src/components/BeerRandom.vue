<template>
  <div class="beer">
  <div class="beer__content" v-for="beerRandom in beerRandom" >
    <div class="beer__item-container beer__item-container_height">
      <p class="beer__item"><strong>Название: </strong></p>
      <p>{{ beerRandom.name }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Бренд: </strong></p>
      <p>{{ beerRandom.brand }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Стиль: </strong></p>
      <p>{{ beerRandom.style }}</p>
    </div>
    <div class="beer__item-container beer__item-container_height">
      <p class="beer__item"><strong>Дрожжи: </strong></p>
      <p>{{ beerRandom.yeast }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Солод: </strong></p>
      <p>{{ beerRandom.malts }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Хмель: </strong></p>
      <p>{{ beerRandom.hop }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Горечь: </strong></p>
      <p>{{ beerRandom.ibu }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Экстракт: </strong></p>
      <p>{{ beerRandom.blg }}</p>
    </div>
    <div class="beer__item-container">
      <p class="beer__item"><strong>Крепость: </strong></p>
      <p>{{ beerRandom.alcohol }}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    beerRandom: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped>
.beer {

}
.beer__content {

}
.beer__item-container {
  display: flex;
  justify-content: space-between;
}

.beer__item-container_height {
  max-height: 50px;
  text-align: end;
}

.beer__item {
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 1.5;
}
</style>