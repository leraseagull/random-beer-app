<template>
<footer class="footer">
  <div class="footer__container">
    <p class="footer__title">&#169; 2022 Валерия Чайка</p>
  </div>
</footer>
</template>

<script>
export default {
  name: "Footer.vue"
}
</script>

<style scoped>
.footer {
  background: orange;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
}
.footer__container {
  padding: 1rem;
}
@media screen and (max-width: 1024px) {
  .footer {
    justify-content: center;
    margin-bottom: 2rem;
  }
}
.footer__title {
  color: antiquewhite;
}
</style>