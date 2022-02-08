<template>
  <b-container fluid>
    <b-row>
      <b-col lg="12">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title"> Rented Profiles </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown  id="dropdownMenuButton5" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <span class="text-primary"><i class="ri-more-fill"></i></span>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>Add</b-dropdown-item>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>View</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>Delete</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>Edit</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>Print</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>Download</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table responsive :borderless="borderless" :items="marketingItems" :fields="marketingFields">
              <template v-slot:cell(profil)="data2">
                <b-img :src="data2.value" rounded alt="profile" class="img-fluid rounded avatar-40 text-center" />
              </template>
              <template v-slot:cell(done)="data">
                <b-badge pill v-if="data.value" variant="primary"><i class="ri-check-fill"></i></b-badge>
                <b-badge pill v-else variant="danger"><i class="ri-close-fill"></i></b-badge>
              </template>
              <template v-slot:cell(attachment)="data1">
                <b-badge v-if="data1.value" variant="success">Pdf</b-badge>
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
// import { Arabic } from 'flatpickr/dist/l10n/ar'
// import { english } from 'flatpickr/dist/l10n/default'
import { mapGetters } from 'vuex'
import bgImage from '../../assets/images/page-img/44.png'
export default {
  name: 'Dashboard2',
  components: {},
  mounted () {
    findash.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
  },
  data () {
    return {
      marketingFields: ['Name', 'Contact', 'Wallet', 'Terahash', 'Service_Fee', 'Power_Cost', 'Notes', 'Status', 'Reports'],
      marketingItems: [{
        Name: 'Anna Doe',
        Contact: 'anna@email.com',
        Wallet: '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX',
        Terahash: '223kWh',
        Service_Fee: '$1000.00',
        Power_Cost: 'High',
        Notes: true,
        Status: true,
        Reports: 'Generate'
      }
      ],
      borderless: true,
      bgImageURL: bgImage
    }
  }
}
</script>
