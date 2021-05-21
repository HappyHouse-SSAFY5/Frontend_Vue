<template>
  <div class="container">
    <div class="item1">최고의 지역을 추천해드립니다!!!!</div>
    <div class="item2">공지사항</div>
    <div class="item3">아파트 매매 정보</div>
    <div class="item4">QNA</div>
  </div>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style scoped>
.container {
  display: grid;
  margin-top: 3%;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns: 300px 1fr 300px;
  grid-template-rows: 300px 250px;
  grid-template-areas:
    'item1 item1 item1'
    'item2 item3 item4';
}
.item1, .item2, .item3, .item4 {
  border-radius: 2em;
  background-color: antiquewhite;
  border: 0px;
  font-family: 'nanum';
  padding: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
}
.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
}
.item3 {
  grid-area: item3;
}
.item4 {
  grid-area: item4;
}
</style>
