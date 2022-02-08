<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" lg="3">
        <iq-card :class-name="'iq-card-block iq-card-stretch iq-card-height'">
          <template v-slot:body>
            <div class="user-details-block">
              <div class="user-profile text-center">
                <b-img :src="profilImage" rounded alt="profile-img" class="avatar-100 img-fluid" />
              </div>
              <div class="text-center mt-3">
                <h4>
                  <b>Barry Tech</b>
                </h4>
                <p class="mb-0">Manager</p>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col md="6" lg="3" v-for="(item,index) in imgLink" :key="index">
        <iq-card
          :class-name="'iq-card-block iq-card-stretch iq-card-height'"
          style="background: transparent; box-shadow: none;"
          body-class="p-0"
        >
          <template v-slot:body>
            <b-img
              :src="require('../../assets/images/booking/'+item.imgName+'.png')"
              class="img-fluid w-100 rounded shadow"
              alt
            />
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="9">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Recent Transactions</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ApexChart element="home-chart-01" :chartOption="chart1" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Recent Transactions</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <ul class="tikit-lists m-0 p-0">
              <li
                class="d-flex mb-4 align-items-center justify-content-between"
                v-for="(item,index) in transactionData"
                :key="index"
              >
                <div class="d-flex align-items-center">
                  <div class="media-support-info">
                    <h6>{{ item.title }}</h6>
                    <p class="mb-0 font-size-12">{{ item.id }}</p>
                  </div>
                </div>
                <span>{{ item.date }}</span>
              </li>
              <li class="d-flex align-items-center justify-content-between">
                <a href="#" class="btn btn-primary w-100 text-white">View More</a>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" md="6" v-for="(item,index) in cardData" :key="index">
        <iq-card
          :class-name="'iq-card-block iq-card-stretch iq-card-height'"
          header-class="border-0"
        >
          <template v-slot:headerTitle>
            <div class="mb-0 font-size-32 text-dark">
              <i :class="item.icon+' font-weight-light'"></i>
            </div>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-2-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <h3>{{ item.title }}</h3>
            <p class="mb-0">{{ item.description }}</p>
          </template>
          <div class="card-action font-size-14 p-3">
            <span class="float-right">{{ item.days }}</span>
            <i class="ri-timer-2-line"></i>
            {{ item.time }}
          </div>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6">
        <iq-card
          :class-name="'dash-hover-blank d-flex align-items-center iq-card-block iq-card-stretch iq-card-height'"
        >
          <div class="iq-card-body text-center">
            <h5 class>Add New Account</h5>
          </div>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Open Invoices</h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-fill"></i>
              </template>
              <b-dropdown-item>
                <i class="ri-eye-fill mr-2"></i>
                {{ $t('dropdown.view') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-delete-bin-6-fill mr-2"></i>
                {{ $t('dropdown.delete') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-pencil-fill mr-2"></i>
                {{ $t('dropdown.edit') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-printer-fill mr-2"></i>
                {{ $t('dropdown.print') }}
              </b-dropdown-item>
              <b-dropdown-item>
                <i class="ri-file-download-fill mr-2"></i>
                {{ $t('dropdown.download') }}
              </b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-table :items="invoicesItems" striped :fields="invoicesFields">
              <template v-slot:cell(transaction)="data">
                <i :class="data.value.bgColor+' ri-briefcase-fill mr-2 p-2 rounded'"></i>
                {{ data.value.title }}
              </template>
              <template v-slot:cell(fileIcon)="data1">
                <i v-if="data1" class="ri-file-fill text-primary font-size-18"></i>
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
export default {
  name: 'dashboard5',
  mounted () {
    findash.index()
  },
  data () {
    return {
      profilImage: require('../../assets/images/user/11.png'),
      imgLink: [{ imgName: '03' }, { imgName: '04' }, { imgName: '05' }],
      chart1: {
        series: [
          {
            name: 'Account',
            data: [5, 10, 8, 15]
          }
        ],
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: !1
          }
        },
        colors: ['#1e3d73'],
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'straight'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr']
        }
      },
      transactionData: [
        { title: 'Paul Molive', id: '@paul001245689', date: '01-04-2020' },
        { title: 'Anna Sthesia', id: '@anna4586953', date: '05-04-2020' },
        { title: 'Paige Turner', id: '@paige001245698', date: '07-04-2020' },
        { title: 'Barb Ackue', id: '@barb0012356478', date: '10-04-2020' },
        { title: 'Greta Life', id: '@greta001245632', date: '10-04-2020' },
        { title: 'Ira Membrit', id: '@ira001245856', date: '12-04-2020' }
      ],
      cardData: [
        {
          icon: 'ri-bank-line',
          title: 'Banking',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          time: '2:30pm',
          days: 'Tommorow'
        },
        {
          icon: 'ri-timer-line',
          title: 'Loans',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          time: '2:30pm',
          days: 'Tommorow'
        },
        {
          icon: 'ri-account-box-line',
          title: 'Account',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          time: '2:30pm',
          days: 'Tommorow'
        }
      ],
      invoicesFields: [
        { key: 'date' },
        { key: 'transaction' },
        { key: 'paid_by' },
        { key: 'amount' },
        { key: 'fileIcon', label: '' }
      ],
      invoicesItems: [
        {
          date: '18/10/2019',
          transaction: { bgColor: 'iq-bg-success', title: 'Salary' },
          paid_by: '*4567',
          amount: '+$52,000.00',
          fileIcon: true
        },
        {
          date: '26/10/2019',
          transaction: { bgColor: 'iq-bg-warning', title: 'Taxes' },
          paid_by: '*5689',
          amount: '+$40,200.80',
          fileIcon: true
        },
        {
          date: '18/11/2019',
          transaction: { bgColor: 'iq-bg-info', title: 'I return your money' },
          paid_by: '*7845',
          amount: '+$6000.02',
          fileIcon: true
        },
        {
          date: '14/12/2019',
          transaction: { bgColor: 'iq-bg-danger', title: 'Grocery store' },
          paid_by: '*1761',
          amount: '+$7236.00',
          fileIcon: true
        },
        {
          date: '24/12/2019',
          transaction: { bgColor: 'iq-bg-primary', title: 'Debit by ATM' },
          paid_by: '*2494',
          amount: '+$50.00',
          fileIcon: true
        },
        {
          date: '18/10/2019',
          transaction: { bgColor: 'iq-bg-success', title: 'Credit Amount' },
          paid_by: '*4594',
          amount: '+$1000.00',
          fileIcon: true
        }
      ]
    }
  }
}
</script>
