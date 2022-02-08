<template>
  <b-container fluid>
    <b-row>
      <b-col lg="9">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Hosted Profiles</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary">
                  <i class="ri-more-fill"></i>
                </span>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>View
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>Delete
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>Edit
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>Print
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>Download
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table
              responsive
              :borderless="borderless"
              :items="productItems"
              :fields="productFields"
            >
              <template v-slot:cell(status)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.text }}</b-badge>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
// import AmChart from '../../components/findash/charts/AmChart'
// import ApexChart from '../../components/findash/charts/ApexChart'
export default {
  name: 'Dashboard1',
  components: {},
  mounted () {
    findash.index()
  },
  data () {
    return {
      productFields: ['Name', 'Contact', 'Wallet', 'Terahash', 'Service_Fee', 'Power_Cost', 'Notes', 'Status', 'Reports'],
      productItems: [
        {
          Name: 'John Doe',
          Contact: 'Forest Hill Drive',
          Wallet: 'kskskss99s8s7s7s7',
          Terahash: '23kWh',
          status: { text: 'Available', color: 'primary' },
          Service_Fee: '$33',
          Power_Cost: '$33',
          Notes: '',
          Status: { text: 'Available', color: 'primary' },
          Reports: 'Generate'
        }
      ],
      marketFields: ['market', 'price', 'change'],
      borderless: true
    }
  }
}
</script>

<style>
.iq-card-body {
  flex: unset;
}
</style>
