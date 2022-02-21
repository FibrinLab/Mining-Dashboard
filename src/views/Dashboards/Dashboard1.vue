<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-primary">
              <i class="ri-focus-2-line"></i>
            </div>
            <p class="text-secondary">Total Terahash</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                {{ teraHash }}
              </h4>
              <ApexChart element="iq-chart-box1" :chartOption="chartBox1" />
              <span class="text-primary">
                <b>
                  #%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-danger">
              <i class="ri-pantone-line"></i>
            </div>
            <p class="text-secondary">Total Mined (btc)</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                {{ totalMined }}
              </h4>
              <ApexChart element="iq-chart-box2" :chartOption="chartBox2" />
              <span class="text-danger">
                <b>
                  #%
                  <i class="ri-arrow-down-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-success">
              <i class="ri-database-2-line"></i>
            </div>
            <p class="text-secondary">Total Rewards (btc)</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                {{ totalRewards }}
              </h4>
              <ApexChart element="iq-chart-box3" :chartOption="chartBox3" />
              <span class="text-success">
                <b>
                  #%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Active Workers</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                {{ activeWorkers }}
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Current Block</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                {{ blockData }}
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Total Profit</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>60</b>
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Total Profit</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>60</b>
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" sm="6">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="iq-box-relative"
        >
          <template v-slot:body>
            <div class="iq-box-absolute icon iq-icon-box rounded-circle iq-bg-warning">
              <i class="ri-pie-chart-2-line"></i>
            </div>
            <p class="text-secondary">Total Profit</p>
            <div class="d-flex align-items-center justify-content-between">
              <h4>
                <b>60</b>
              </h4>
              <ApexChart element="iq-chart-box4" :chartOption="chartBox4" />
              <span class="text-warning">
                <b>
                  +0.45%
                  <i class="ri-arrow-up-fill"></i>
                </b>
              </span>
            </div>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="8">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height"
          body-class="row m-0 align-items-center pb-0"
        >
          <template v-slot:headerTitle>
            <h4 class="card-title">Power Used</h4>
          </template>
          <template v-slot:headerAction>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a href="#" class="nav-link active">Personal</a>
              </li>
            </ul>
          </template>
          <template v-slot:body>
            <b-col md="8">
              <ApexChart element="iq-income-chart" :chartOption="incomeChart" />
            </b-col>
            <b-col md="4">
              <div id="chart-data-block">
                <h4>
                  <b>Total</b>
                </h4>
                <h2>
                  <b>1000 kWh</b>
                </h2>
                <p>Week History</p>
              </div>
              <div class="chart-box d-flex align-items-center justify-content-between mt-5 mb-5">
                <ApexChart element="iq-chart-boxleft" :chartOption="boxleftChart" />
                <ApexChart element="iq-chart-boxright" :chartOption="boxrightChart" />
              </div>
            </b-col>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="12">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Miners</h4>
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
            <b-table responsive :items="items" class="mb-0" thead-class="thead-light">
              <template v-slot:cell(state)="data">
                <b-badge pill :variant="data.value.color">{{ data.value.name }}</b-badge>
              </template>
              <template v-slot:cell(amount)="data1">${{ data1.value }}</template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class-name="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <div v-for="(list,index) in expenses" :key="index">
              <div class="d-flex align-items-center" :class="{ 'mb-3': index === 0 }">
                <div :class="'icon iq-icon-box rounded mr-3 iq-bg-' + list.color">
                  <i :class="list.icon"></i>
                </div>
                <div class="iq-details col-sm-9 p-0">
                  <div class="d-flex align-items-center justify-content-between">
                    <span class="title text-dark">{{ list.title }}</span>
                    <div class="percentage">
                      <b>
                        <span>$</span>
                        {{list.amount }}
                      </b>
                    </div>
                  </div>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <b-progress
                      :value="list.percentage"
                      :variant="list.color"
                      max="100"
                      class="iq-progress-bar"
                    ></b-progress>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <span class>{{ list.transaction_count }} Transaction</span>
                    <div class="percentage">
                      {{ list.percentage }}
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>
              <hr v-if="index != list.length-1" class="mt-4 mb-4" />
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
// import bgImage from '../../assets/images/page-img/45.png'
import axios from 'axios'
import UserService from '../../services/user.service'
// import MorrisChart from '../../components/findash/charts/MorrisChart'
export default {
  name: 'Dashboard1',
  // components: { MorrisChart },
  mounted () {
    UserService.getUserBoard().then(
      response => {
        this.content = findash.index()
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
      }
    )
  },
  methods: {
    async fetchProfile () {
      const res = axios.get('https://api.qarmining.com/api/user_profile')
      return res
    },
    async fetchReports () {
      const res = axios.get('https://api.qarmining.com/api/daily_report')
      return res
    },
    async fetchPools () {
      const res = axios.get('https://api.qarmining.com/api/pool_stats')
      return res
    }
  },
  data () {
    return {
      teraHash: null,
      totalMined: null,
      totalRewards: null,
      activeWorkers: null,
      blockData: null,
      items: [
        {
          Name: 'Ira Membrit',
          Terahash: '18/10/2019',
          Total: '20156',
          state: { name: 'paid', color: 'success' },
          action: 'Edit'
        }
      ]
    }
  },
  async created () {
    // const profile = setInterval(await this.fetchProfile(), 30000)
    const profile = await this.fetchProfile()
    const reports = await this.fetchReports()
    const pools = await this.fetchPools()
    // const reports = setInterval(await this.fetchReports(), 30000)

    this.teraHash = profile.data.btc.hash_rate_24h
    this.totalMined = profile.data.btc.all_time_reward
    this.activeWorkers = profile.data.btc.ok_workers

    this.blockData = pools.data.btc.blocks[0]

    this.totalRewards = reports.data.btc.daily_rewards[0].total_reward
  }
  // data () {
  //   return {
  //     homeProfitChart: {
  //       series: [
  //         {
  //           name: 'series1',
  //           data: [31, 40, 28, 51, 42, 109, 100]
  //         },
  //         {
  //           name: 'series2',
  //           data: [11, 32, 45, 32, 34, 52, 41]
  //         }
  //       ],
  //       colors: ['#1e3d73', '#99f6ca'],
  //       chart: {
  //         height: 100,
  //         type: 'area',
  //         sparkline: {
  //           enabled: true
  //         }
  //       },
  //       dataLabels: {
  //         enabled: false
  //       },
  //       stroke: {
  //         curve: 'smooth'
  //       },
  //       xaxis: {
  //         type: 'datetime',
  //         categories: [
  //           '2018-09-19T00:00:00.000Z',
  //           '2018-09-19T01:30:00.000Z',
  //           '2018-09-19T02:30:00.000Z',
  //           '2018-09-19T03:30:00.000Z',
  //           '2018-09-19T04:30:00.000Z',
  //           '2018-09-19T05:30:00.000Z',
  //           '2018-09-19T06:30:00.000Z'
  //         ]
  //       },
  //       tooltip: {
  //         x: {
  //           format: 'dd/MM/yy HH:mm'
  //         }
  //       }
  //     },
  //     homeLossChart: {
  //       series: [
  //         {
  //           name: 'series1',
  //           data: [80, 90, 110, 60, 42, 109, 100]
  //         },
  //         {
  //           name: 'series2',
  //           data: [50, 60, 70, 30, 20, 85, 80]
  //         }
  //       ],
  //       colors: ['#1e3d73', '#99f6ca'],
  //       chart: {
  //         height: 100,
  //         type: 'area',
  //         sparkline: {
  //           enabled: true
  //         }
  //       },
  //       dataLabels: {
  //         enabled: false
  //       },
  //       stroke: {
  //         curve: 'smooth'
  //       },
  //       xaxis: {
  //         type: 'datetime',
  //         categories: [
  //           '2018-09-19T00:00:00.000Z',
  //           '2018-09-19T01:30:00.000Z',
  //           '2018-09-19T02:30:00.000Z',
  //           '2018-09-19T03:30:00.000Z',
  //           '2018-09-19T04:30:00.000Z',
  //           '2018-09-19T05:30:00.000Z',
  //           '2018-09-19T06:30:00.000Z'
  //         ]
  //       },
  //       tooltip: {
  //         x: {
  //           format: 'dd/MM/yy HH:mm'
  //         }
  //       }
  //     },
  //     boxleftChart: {
  //       series: [
  //         {
  //           name: 'Success',
  //           data: [10, 10, 35, 10]
  //         }
  //       ],
  //       colors: ['#1e3d73'],
  //       chart: {
  //         height: 50,
  //         width: 100,
  //         type: 'line',
  //         sparkline: {
  //           enabled: true
  //         },
  //         zoom: {
  //           enabled: false
  //         }
  //       },
  //       dataLabels: {
  //         enabled: false
  //       },
  //       stroke: {
  //         curve: 'straight'
  //       },
  //       title: {
  //         text: '',
  //         align: 'left'
  //       },
  //       grid: {
  //         row: {
  //           colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //           opacity: 0.5
  //         }
  //       },
  //       xaxis: {
  //         categories: ['Jan', 'Feb', 'Mar']
  //       }
  //     },
  //     boxrightChart: {
  //       series: [
  //         {
  //           name: 'Failed',
  //           data: [10, 10, 35]
  //         }
  //       ],
  //       colors: ['#fe517e'],
  //       chart: {
  //         height: 50,
  //         width: 100,
  //         type: 'line',
  //         sparkline: {
  //           enabled: true
  //         },
  //         zoom: {
  //           enabled: false
  //         }
  //       },
  //       dataLabels: {
  //         enabled: false
  //       },
  //       stroke: {
  //         curve: 'straight'
  //       },
  //       title: {
  //         text: '',
  //         align: 'left'
  //       },
  //       grid: {
  //         row: {
  //           colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  //           opacity: 0.5
  //         }
  //       },
  //       xaxis: {
  //         categories: ['Jan', 'Feb', 'Mar']
  //       }
  //     },
  //     homeChart: {
  //       type: 'donut',
  //       colors: ['#1e3d73', '#fe517e', '#99f6ca'],
  //       bodyData: [
  //         { label: 'Download Sales', value: 12 },
  //         { label: 'In-Store Sales', value: 30 },
  //         { label: 'Mail-Order Sales', value: 20 }
  //       ],
  //       labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
  //       hideHover: 'auto'
  //     },
  //     bgImageURL: bgImage
  //   }
  // }
}
</script>

<style>
.iq-card-body {
  flex: unset;
}
</style>
