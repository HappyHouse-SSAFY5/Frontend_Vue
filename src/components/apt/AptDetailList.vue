<template>
  <v-col cols="3" >
    <v-list dense>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">
                mdi-home
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>법정동</v-list-item-subtitle>
            <v-list-item-title>{{ apt.dong }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">
                mdi-elevator-passenger
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>층</v-list-item-subtitle>
            <v-list-item-title>{{ apt.floor }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">
                mdi-arrow-left-right
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>면적</v-list-item-subtitle>
            <v-list-item-title>{{ apt.area }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">
                mdi-cash-multiple
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>거래금액</v-list-item-subtitle>
            <v-list-item-title>{{ (apt.dealAmount.replace(',', '') * 10000) | price }}원</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>
        <v-list-item>
            <v-list-item-icon>
            <v-icon color="indigo">
                mdi-calendar-clock
            </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
            <v-list-item-subtitle>거래일</v-list-item-subtitle>
            <v-list-item-title>{{ apt.dealYear }}년 {{apt.dealMonth}}월 {{apt.dealDay}}일 </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        </v-list>
  </v-col>
</template>

<script>
export default {
    name: "DetailList",
    props:{
        apt: Object,
    },
    filters: {
        price(value) {
        if (!value) return value;
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
}
</script>