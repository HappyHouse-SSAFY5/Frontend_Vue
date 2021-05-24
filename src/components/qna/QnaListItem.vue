<template>
  <b-row
    class="m-2"
    @click="chooseQna"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="10"> 글 번호 : {{ this.qna.id }} <br>
    글 제목 : {{ this.qna.title }} <br>
    작성자 : {{this.qna.userid}} <br>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'QnaListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    qna: Object,
  },
  methods: {
    ...mapActions(['selectQna']),
    chooseQna() {
      this.selectQna(this.qna);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style scoped>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: lightblue;
}
</style>
