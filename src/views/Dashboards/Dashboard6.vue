<template>
  <b-container fluid>
    <b-row>
      <b-col sm="6" md="4" lg="2" v-for="(item,index) in cardData1" :key="index">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <div class="text-center">
              <h6>{{ item.title }}</h6>
              <h2 class="mt-2">
                <b>{{ item.amount }}</b>
              </h2>
              <p class="mb-0 text-muted mt-3">
                <b-badge pill :variant="item.color" class="mr-2">
                  <i :class="item.arrowClass"></i>
                  {{ item.percentage }}
                </b-badge>
              </p>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="8">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Profit/Loss</h4>
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
            <ApexChart element="iq-chart-profitndloss" :chartOption="chart1" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card
          class-name="iq-card-block iq-card-stretch iq-card-height banner-image-block-bg position-relative"
          :style="'background: transparent url('+bgImageURL+') no-repeat scroll center bottom; background-size: contain; height: 455px; box-shadow: none;'"
        ></iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" class="row m-0 p-0">
        <b-col md="4" lg="12" v-for="(item,index) in cardData2" :key="index">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height rounded">
            <template v-slot:body>
              <h6>{{ item.title }}</h6>
              <div class="text-center">
                <h2>{{ item.amount }}</h2>
                <p class="mb-0">{{ item.description }}</p>
              </div>
            </template>
          </iq-card>
        </b-col>
      </b-col>
      <b-col lg="6">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Money Structure</h4>
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
            <ApexChart element="iq-chart-money" :chartOption="chart2" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:body>
            <p class="mb-0">Accounts Payable</p>
            <h4>5,124,000</h4>
            <hr />
            <ApexChart element="iq-chart-payble" :chartOption="chart3" />
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title">Cash Management</h4>
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
            <b-row>
              <b-col md="6">
                <b-table
                  :items="cashItems"
                  thead-class="d-none"
                  class="mb-0"
                  :borderless="borderless"
                >
                  <template v-slot:cell(imgpath)="data">
                    <b-img
                      :src="data.value"
                      rounded
                      alt="img-flaf"
                      class="img-fluid mr-1"
                      style="height: 16px; width: 16px;"
                    />
                  </template>
                </b-table>
              </b-col>
              <b-col md="6">
                <AmChart
                  element="chartdiv"
                  type="dashboard-map"
                  style="height: 300px; width: 100%;"
                />
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
import bgImage from '../../assets/images/page-img/36.png'
export default {
  name: 'dashboard6',
  mounted () {
    findash.index()
  },
  data () {
    return {
      cardData1: [
        {
          title: 'Revenue',
          amount: '19.8',
          color: 'primary',
          arrowClass: 'ri-arrow-up-fill',
          percentage: '3.48%'
        },
        {
          title: 'Gross Margin',
          amount: '12.6',
          color: 'primary',
          arrowClass: 'ri-arrow-up-fill',
          percentage: '3.48%'
        },
        {
          title: 'Ebitda',
          amount: '18.5',
          color: 'primary',
          arrowClass: 'ri-arrow-up-fill',
          percentage: '3.48%'
        },
        {
          title: 'Working Capital',
          amount: '25.6',
          color: 'primary',
          arrowClass: 'ri-arrow-up-fill',
          percentage: '3.48%'
        },
        {
          title: 'Capex',
          amount: '20.0',
          color: 'danger',
          arrowClass: 'ri-arrow-down-fill',
          percentage: '3.48%'
        },
        {
          title: 'Free Cash Flow',
          amount: '30.0',
          color: 'danger',
          arrowClass: 'ri-arrow-down-fill',
          percentage: '3.48%'
        }
      ],
      cardData2: [
        {
          title: 'Assets',
          amount: '-108.56K',
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Liabilities',
          amount: '-425.20K',
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          title: 'Working Capital',
          amount: '-380.40K',
          description: 'Lorem ipsum dolor sit amet'
        }
      ],
      cashItems: [
        {
          imgpath: require('../../assets/images/small/flag-01.png'),
          country: 'USA',
          number: '2.820',
          percentage: '45.50%'
        },
        {
          imgpath: require('../../assets/images/small/flag-02.png'),
          country: 'French',
          number: '1.690',
          percentage: '35.30%'
        },
        {
          imgpath: require('../../assets/images/small/flag-03.png'),
          country: 'Spanish',
          number: '5.213',
          percentage: '52.36%'
        },
        {
          imgpath: require('../../assets/images/small/flag-04.png'),
          country: 'Italian',
          number: '320',
          percentage: '5.50%'
        },
        {
          imgpath: require('../../assets/images/small/flag-05.png'),
          country: 'German',
          number: '560',
          percentage: '4.50%'
        },
        {
          imgpath: require('../../assets/images/small/flag-06.png'),
          country: 'Japanese',
          number: '450',
          percentage: '4.34%'
        }
      ],
      chart1: {
        series: [
          {
            name: 'Cash Flow',
            data: [
              1.45,
              5.42,
              5.9,
              -0.42,
              -12.6,
              -18.1,
              -18.2,
              -14.16,
              -11.1,
              -6.09,
              0.34,
              3.88,
              13.07,
              5.8,
              2,
              7.37,
              8.1,
              13.57,
              15.75,
              17.1,
              19.8,
              -27.03,
              -54.4,
              -47.2,
              -43.3
            ]
          }
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: '#fe517e'
                },
                {
                  from: -45,
                  to: 0,
                  color: '#fe517e'
                }
              ]
            },
            columnWidth: '80%'
          }
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          title: {
            text: 'Growth'
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + '%'
            }
          }
        },
        colors: ['#99f6ca'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01',
            '2011-02-01',
            '2011-03-01',
            '2011-04-01',
            '2011-05-01',
            '2011-06-01',
            '2011-07-01',
            '2011-08-01',
            '2011-09-01',
            '2011-10-01',
            '2011-11-01',
            '2011-12-01',
            '2012-01-01',
            '2012-02-01',
            '2012-03-01',
            '2012-04-01',
            '2012-05-01',
            '2012-06-01',
            '2012-07-01',
            '2012-08-01',
            '2012-09-01',
            '2012-10-01',
            '2012-11-01',
            '2012-12-01',
            '2013-01-01',
            '2013-02-01',
            '2013-03-01'
          ],
          labels: {
            rotate: -90
          }
        }
      },
      chart2: {
        series: [
          {
            name: 'Income',
            data: [44, 55, 41, 67, 22, 43]
          },
          {
            name: 'Outcome',
            data: [13, 23, 20, 8, 13, 27]
          }
        ],
        chart: {
          type: 'bar',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        colors: ['#1e3d73', '#99f6ca'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '01/01/2011 GMT',
            '01/02/2011 GMT',
            '01/03/2011 GMT',
            '01/04/2011 GMT',
            '01/05/2011 GMT',
            '01/06/2011 GMT'
          ]
        },
        legend: {
          position: 'bottom',
          offsetY: 5
        },
        fill: {
          opacity: 1
        }
      },
      chart3: {
        series: [70],
        chart: {
          height: 350,
          type: 'radialBar'
        },
        colors: ['#1e3d73'],
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%'
            }
          }
        },
        labels: ['Paid']
      },
      bgImageURL: bgImage,
      borderless: true
    }
  }
}
</script>
