<template>
    <div>
        <h4> <v-icon large color="indigo">mdi-folder-heart</v-icon> 저장한 매매 기록</h4>
        <v-card
            elevation="24"
            max-width="444"
            class="mx-auto"
            v-if="picks"
        >
        <v-system-bar lights-out>
        </v-system-bar>
        <v-carousel
            :continuous="false"
            :cycle="false"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="650"
        >
            <v-carousel-item
            v-for="(pick, i) in picks"
            :key="i"
            >
            <v-sheet
                color="indigo darken-4"
                height="100%"
                tile
            >
                <v-row
                class="fill-height bold-text-white"
                >
                <v-col cols="12">
                    <google-map :apt="pick"></google-map>
                </v-col>
                <v-col cols="12" class="padding-between-text"></v-col>
                <v-col cols="12" class="padding-between-text">{{pick.dealYear}}년 {{pick.dealMonth}}월 {{pick.dealDay}}일 매매</v-col>
                <v-col cols="12" class="padding-between-text">{{pick.floor}} 층, 전용면적 {{pick.area}} ㎡</v-col>
                <v-col cols="12" class="padding-between-text">{{pick.dealAmount}} (단위: 만)</v-col>
                <v-col cols="12" class="padding-between-text" style="font-size: 20px;">{{pick.dong}} {{pick.aptName}}</v-col>
                <v-col cols="12" class="padding-between-text"></v-col>
                <v-col cols="12" class="padding-between-text"></v-col>
                </v-row>
            </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <v-list two-line>
            <v-list-item>
            <v-list-item-content>
                <v-list-item-title style="font-size: 24px;">{{username}}님이 찜하신 매물입니다 👀</v-list-item-title>
                <v-list-item-subtitle>저장한 기록을 한 눈에 살펴보세요!</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-card>
        <!-- 저장한 것 없을 때 -->
        <div v-else style="display: flex; align-items: center; height: 400px;">
            <v-alert
                border="left"
                color="indigo"
                style="margin:auto;"
                dark
            >
                아직 저장한 매물이 없네요!
            </v-alert>
        </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GoogleMap from '@/components/apt/GoogleMap.vue'
export default {
    name: "PickupHouse",
    components:{
        GoogleMap,
    },
    computed: {
        ...mapGetters({
            picks:'getPick',
            userid:'getUserid',
            username: 'getUsername',
        })
    },
    methods:{
        ...mapActions(['getMyPicks']),
        async getPicks(){
            await this.getMyPicks(this.userid);
        }
    },
    created(){
        this.getPicks();
    },
}
</script>

<style>
.bold-text-white{
    font-family: 'Roboto';
    font-weight: 800;
    font-size: 16px;
    color: white;
    text-align: right;
}
.padding-between-text{
    padding: 0px 20px !important;
}
</style>
