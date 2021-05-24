<!--<template>
  <b-row
    class="m-2"
    @click="chooseNotice"
    @mouseover="colorChange(true)"
    @mouseout="colorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <b-col cols="10">
      글 번호 : {{ this.notice.articleno }} <br />
      글 제목 : {{ this.notice.subject }} <br />
      작성자 : {{ this.notice.userid }} <br />
      작성 시간: {{ this.notice.regtime }} <br />
    </b-col>
  </b-row>
</template>

<script>
 import { mapActions } from 'vuex';

export default {
  name: 'NoticeListItem',
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    notice: Object,
  },
  methods: {
        ...mapActions(['selectNotice']),
    chooseNotice() {
      // console.log(this.notice.articleno);
      // this.$router.push(`/notice/list/${this.notice.articleno}`);
      this.selectNotice(this.notice);
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
</style> -->
