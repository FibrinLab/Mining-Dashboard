<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Default Validation</h4>
          </template>
          <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate, ex ac venenatis mollis, diam nibh finibus leo</p>
            <form action="#">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01">First name</label>
                  <input type="text" class="form-control" id="validationDefault01" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Last name</label>
                  <input type="text" class="form-control" id="validationDefault02" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefaultUsername">Username</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault03">City</label>
                  <input type="text" class="form-control" id="validationDefault03" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault04">State</label>
                  <select class="form-control" id="validationDefault04" required>
                    <option selected disabled value>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault05">Zip</label>
                  <input type="text" class="form-control" id="validationDefault05" required />
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value id="invalidCheck2" required />
                  <label class="form-check-label" for="invalidCheck2">Agree to terms and conditions</label>
                </div>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </template>
        </iq-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Payout</h4>
          </template>
          <template v-slot:body>
            <p>Please fill the infromation correctly</p>
            <form action="#">
              <div class="form-row">
                <div class="col-md-6 mb-3">
                  <label for="validationDefault01">Wallet Address</label>
                  <input type="text" class="form-control" id="validationDefault01" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Service Fee</label>
                  <input type="text" class="form-control" id="validationDefault02" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="validationDefault02">Power Cost</label>
                  <input type="text" class="form-control" id="validationDefault02" required />
                </div>
                <div class="form-group">
                <select class="custom-select" required>
                  <option value>Payout Rate</option>
                  <option value="1">Daily</option>
                  <option value="2">Weekly</option>
                  <option value="3">Monthly</option>
                </select>
                <div class="invalid-feedback">Invalid input</div>
              </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit">Submit</button>
                  <button class="btn btn-secondary" type="submit">Pause</button>
                </div>
              </div>
            </form>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
export default {
  name: 'Dashboard4',
  mounted () {
    findash.index()
  },
  data () {
    var data = []
    let XAXISRANGE = 7776e5
    return {
      striped: true,
      chart1: {
        series: [
          {
            name: 'This Week',
            data: [31, 40, 28, 51, 42, 109, 100]
          },
          {
            name: 'Last Week',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ],
        chart: {
          height: 350,
          type: 'area'
        },
        colors: ['#1e3d73', '#fe517e'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart2: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 0.5,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [60, 15, 50, 30, 70]
          }
        ],
        colors: ['var(--iq-primary)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart3: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [70, 40, 60, 30, 60]
          }
        ],
        colors: ['var(--iq-success)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart4: {
        chart: {
          height: 80,
          type: 'area',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          width: 3,
          curve: 'smooth'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            name: 'series1',
            data: [60, 40, 60, 40, 70]
          }
        ],
        colors: ['var(--iq-warning)'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-08-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-10-19T02:30:00',
            '2018-11-19T01:30:00',
            '2018-12-19T01:30:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      chart5: {
        chart: {
          height: 112,
          type: 'area',
          animations: {
            enabled: !0,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1e3
            }
          },
          toolbar: {
            show: !1
          },
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0
          }
        },
        series: [
          {
            data: data
          }
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: XAXISRANGE
        },
        yaxis: {
          max: 100
        },
        legend: {
          show: !1
        },
        colors: ['var(--iq-primary)']
      },
      chart6: {
        chart: {
          height: 150,
          type: 'bar',
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'smooth',
          width: 15
        },
        series: [
          {
            name: 'series1',
            data: [70, 40, 60, 30, 60]
          }
        ],
        colors: ['#e7ecee'],
        xaxis: {
          type: 'datetime',
          categories: [
            '2019-08-19T00:00:00',
            '2019-09-19T00:00:00',
            '2019-10-19T00:00:00',
            '2019-11-19T00:00:00'
          ]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          }
        }
      },
      cardData1: [
        {
          bgColor: 'bg-primary',
          iClass: 'las la-users',
          cardTitle: 'Customer',
          counter: '60,586',
          badge: 'primary',
          percentage: '3.48%',
          counterStatus: true
        },
        {
          bgColor: 'bg-warning',
          iClass: 'las la-balance-scale',
          cardTitle: 'Sales',
          counter: '80,586',
          badge: 'warning',
          percentage: '3.48%',
          counterStatus: true
        },
        {
          bgColor: 'bg-info',
          iClass: 'las la-plus-circle',
          cardTitle: 'Profit',
          counter: '80',
          badge: 'info',
          percentage: '3.48%',
          counterStatus: false
        },
        {
          bgColor: 'bg-danger',
          iClass: 'las la-minus-circle',
          cardTitle: 'Loss',
          counter: '15',
          badge: 'danger',
          percentage: '3.48%',
          counterStatus: false
        }
      ],
      cardData2: [
        {
          title: 'Total Revenue',
          counter: '15200',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '2',
          chartName: 'chart2'
        },
        {
          title: 'Current Serverload',
          counter: '6300',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '3',
          chartName: 'chart3'
        },
        {
          title: 'Members Online',
          counter: '3520',
          description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          i: '4',
          chartName: 'chart4'
        }
      ],
      totalSalesUnit: [
        { bgColor: 'primary', width: '20', ariaValueNow: '15' },
        { bgColor: 'success', width: '30', ariaValueNow: '30' },
        { bgColor: 'info', width: '30', ariaValueNow: '20' },
        { bgColor: 'danger', width: '20', ariaValueNow: '20' }
      ],
      totalSalesList: [
        { title: 'Sales', value: '20%' },
        { title: 'Finance', value: '30%' },
        { title: 'Marketing', value: '30%' },
        { title: 'Manufacturing', value: '20%' }
      ],
      salesUnitChart: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        colors: ['#1e3d73', '#fe517e', '#99f6ca', '#ffbf43'],
        series: [
          {
            name: 'Brands',
            colorByPoint: true,
            data: [
              {
                name: 'Sales',
                y: 60,
                sliced: true,
                selected: true
              },
              {
                name: 'Profit',
                y: 30
              },
              {
                name: 'Growth',
                y: 10.85
              },
              {
                name: 'Loss',
                y: 20
              }
            ]
          }
        ]
      },
      countriesList: [
        {
          mtClass: 'mt-2',
          textColor: 'text-primary',
          title: 'United States',
          percentage: '95',
          bgColor: 'primary',
          dataPercentage: '95'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-warning',
          title: 'India',
          percentage: '75',
          bgColor: 'warning',
          dataPercentage: '75'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-success',
          title: 'Australia',
          percentage: '70',
          bgColor: 'success',
          dataPercentage: '70'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-danger',
          title: 'Brazil',
          percentage: '55',
          bgColor: 'danger',
          dataPercentage: '55'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-info',
          title: 'Africa',
          percentage: '45',
          bgColor: 'info',
          dataPercentage: '45'
        },
        {
          mtClass: 'mt-4',
          textColor: 'text-dark',
          title: 'Caneda',
          percentage: '25',
          bgColor: 'dark',
          dataPercentage: '25'
        }
      ],
      exclusiveFields: [
        'checkbox',
        'profile',
        'manage_by',
        'company',
        'date',
        'status',
        'action'
      ],
      exclusiveItems: [
        {
          profile: require('../../assets/images/user/01.jpg'),
          manage_by: 'Barb Ackue',
          company: 'IIFL Finance',
          date: '07 April 2020',
          status: { color: 'primary', title: 'Success' },
          action: true
        },
        {
          profile: require('../../assets/images/user/02.jpg'),
          manage_by: 'Ira Membrit',
          company: 'Shubham Housing',
          date: '10 April 2020',
          status: { color: 'success', title: 'Done' },
          action: true
        },
        {
          profile: require('../../assets/images/user/03.jpg'),
          manage_by: 'Pete Sariya',
          company: 'Achiva Nidhi Limited',
          date: '12 April 2020',
          status: { color: 'primary', title: 'Success' },
          action: true
        },
        {
          profile: require('../../assets/images/user/04.jpg'),
          manage_by: 'Anna Mull',
          company: 'Marwadi Shares',
          date: '17 April 2020',
          status: { color: 'info', title: 'Pending' },
          action: true
        },
        {
          profile: require('../../assets/images/user/05.jpg'),
          manage_by: 'Paul Molive',
          company: 'Gruh Finance Limited',
          date: '20 April 2020',
          status: { color: 'danger', title: 'Canceled' },
          action: true
        }
      ],
      borderless: true
    }
  }
}
</script>
