<style lang="scss">
.layout-class {
  background-color: $bg-color;
}
</style>
<template>
  <v-layout class="layout-class" column justify-center align-center>
    <v-flex xs12 sm8 md6>
      سلام
      <v-data-table
        :headers="headers"
        :items="items"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      ></v-data-table>
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "First Name",
          value: "name"
        },
        {
          text: "Last Name",
          value: "family"
        }
      ],
      items: [
        {
          name: "narges",
          family: "momenyan"
        },
        {
          name: "sahar",
          family: "abdolmaleki"
        }
      ]
    };
  }
};
</script>
