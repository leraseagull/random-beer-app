<template>
  <nav class="header">
    <a href="#" >
      <img class="header__img" src="../image/gorilla-3.svg" alt="icon">
      <img class="header__icon" src="../image/logo.svg" alt="icon">
    </a>
    <button class="header__btn" @click="changeUser">Сменить пользователя</button>

  </nav>
</template>

<script>

export default {
  components: {
},
  data() {
    return {
      users: []
    }
  },
methods: {
  changeUser() {
    this.$emit("getDataUsers", this.users);
  }
},

}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: orange;
  border-radius: 10px;
  position: relative;
}

.header__img {
  height: 70px;
  margin-left: 15px;
}
.header__icon {
  height: 105px;
  position: absolute;
  left: 15px;
  top: 45px;
  z-index: 100;
}

.header__btn {
  cursor: pointer;
  margin: auto 0 auto 0;
  width: 95px;
  height: 50px;
  background: inherit;
  border: 1px solid black;
  padding: 1px;
  box-shadow: 5px 5px 5px darkorange;
}

@media screen and (max-width: 1024px) {
  .header__btn {
    width: 55px;
    height: 35px;
    font-size: 7px;
  }
}

</style>
