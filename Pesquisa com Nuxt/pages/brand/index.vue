<template>
  <div>
    <v-row>
      <v-col cols="auto">
        <h1>Pesquisa de marcas</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto">
        <v-text-field
          v-model="searchParameters.Description"
          outlined
          :label="headers[1].text"
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-text-field
          v-model="searchParameters.MainSupplier"
          outlined
          :label="headers[2].text"
        ></v-text-field>
      </v-col>
      <v-col cols="auto">
        <v-switch
          v-model="searchParameters.Active"
          outlined
          label="Status"
        ></v-switch>
      </v-col>
      <v-spacer></v-spacer>
      <v-btn outlined rounded @click="fetchSearch">Pesquisar</v-btn>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-data-table
          :headers="headers"
          :items="responseData"
          :items-per-page="itemsPerPage"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { DataTableHeader } from 'vuetify/types'
interface ISearchReponse<T> {
  data: Array<T>
  recordCount: number
}
interface IBrandSearchItem {
  id: number
  description: string
  mainSupplier: string | null
}
interface ISearchParams {
  Active?: boolean
  Description?: string
  MainSupplier?: string
  PageNumber?: number
  PageSize?: number
}
export default Vue.extend({
  data() {
    return {
      headers: [
        { text: 'Código', value: 'id', width: 130 },
        { text: 'Descrição', value: 'description', width: '50%' },
        { text: 'Fornecedor', value: 'mainSupplier' },
      ] as DataTableHeader[],
      responseData: [] as IBrandSearchItem[],
      itemsPerPage: 0,
      searchParameters: {
        Active: true,
        PageSize: 10,
        PageNumber: 1,
      } as ISearchParams,
      apiRoute:"https://localhost:7271"
    }
  },
  methods: {
    async fetchSearch() {
      const reponse = await this.$axios.$get<ISearchReponse<IBrandSearchItem>>(
        this.apiRoute + '/Brand/search',
        { params: this.searchParameters }
      )
      this.responseData = reponse.data
      this.itemsPerPage = reponse.recordCount
    },
  },
})
</script>
