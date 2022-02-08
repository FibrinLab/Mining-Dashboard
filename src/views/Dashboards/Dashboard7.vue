<template>
  <b-container fluid>
    <b-row>
      <b-col lg="8" class="row m-0 p-0">
        <b-col md="6" lg="4" v-for="(item,index) in cardData1" :key="index">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height" body-class="p-0">
            <template v-slot:body>
              <div class="manufacture-block d-flex align-items-center">
                <div :class="'iq-card-icon bg-primary mr-3 '+ item.colorClass"> <i :class="item.iconClass"></i></div>
                <div class="data-block">
                  <h4 class="line-height">{{ item.title }}</h4>
                  <p class="mb-0 line-height">{{ item.number }}</p>
                </div>
              </div>
            </template>
          </iq-card>
        </b-col>
        <b-col lg="12">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:headerTitle>
              <h4 class="card-title"> Total Performance Timeline </h4>
            </template>
            <template v-slot:headerAction>
              <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <i class="ri-more-fill"></i>
                </template>
                <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <template v-slot:body>
              <AmChart element="iq-chart-timeline" type="chart-timeline" style="height: 400px;" />
            </template>
          </iq-card>
        </b-col>
        <b-col md="6">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height" body-class="p-0">
            <template v-slot:headerTitle>
              <h4 class="card-title"> Cash Flow </h4>
            </template>
            <template v-slot:headerAction>
              <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <i class="ri-more-2-fill"></i>
                </template>
                <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <template v-slot:body>
              <ApexChart element="bar-chart-6" :chartOption="chart1" />
            </template>
          </iq-card>
        </b-col>
        <b-col md="6">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height" body-class="p-0">
            <template v-slot:headerTitle>
              <h4 class="card-title"> Load Distribution </h4>
            </template>
            <template v-slot:headerAction>
              <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <i class="ri-more-2-fill"></i>
                </template>
                <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <template v-slot:body>
              <ApexChart element="iq-card-body" :chartOption="chart2" style="margin-top: 70px;" />
            </template>
          </iq-card>
        </b-col>
      </b-col>
      <b-col lg="4" class="row m-0 p-0">
        <b-col md="12">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:headerTitle>
              <h4 class="card-title"> Total Performance Performance </h4>
            </template>
            <template v-slot:headerAction>
              <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <i class="ri-more-fill"></i>
                </template>
                <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <template v-slot:body>
              <AmChart element="iq-chart-performance" type="chart-performance" style="height: 400px;" />
            </template>
          </iq-card>
        </b-col>
        <b-col md="12">
          <iq-card class="iq-card-block iq-card-stretch iq-card-height">
            <template v-slot:headerTitle>
              <h4 class="card-title"> Recent Activities </h4>
            </template>
            <template v-slot:headerAction>
              <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                <template v-slot:button-content>
                  <span class="dropdown-toggle text-primary" id="dropdownMenuButton2" data-toggle="dropdown">
                    View All
                  </span>
                </template>
                <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
              </b-dropdown>
            </template>
            <template v-slot:body>
              <ul class="iq-timeline">
                <li>
                  <div class="timeline-dots border-primary text-primary"><i class="ri-login-circle-line"></i></div>
                  <h6 class="float-left mb-1">Client Login</h6>
                  <small class="float-right mt-1">24 November 2019</small>
                  <div class="d-inline-block w-100">
                    <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-dots border-success text-success"><i class="ri-shape-line"></i></div>
                  <h6 class="float-left mb-1">Scheduled Maintenance</h6>
                  <small class="float-right mt-1">23 November 2019</small>
                  <div class="d-inline-block w-100">
                    <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-dots border-danger text-danger"><i class="ri-clockwise-2-fill"></i></div>
                  <h6 class="float-left mb-1">Dev Meetup</h6>
                  <small class="float-right mt-1">20 November 2019</small>
                  <div class="d-inline-block w-100">
                    <p>Bonbon macaroon jelly beans <a href="#">gummi bears</a>gummi bears jelly lollipop apple</p>
                    <div class="iq-media-group">
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/05.jpg')" alt="">
                      </a>
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/06.jpg')" alt="">
                      </a>
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/07.jpg')" alt="">
                      </a>
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/08.jpg')" alt="">
                      </a>
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/09.jpg')" alt="">
                      </a>
                      <a href="#" class="iq-media">
                      <img class="img-fluid avatar-40 rounded" :src="require('../../assets/images/user/10.jpg')" alt="">
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="timeline-dots border-primary text-primary"><i class="ri-phone-fill"></i></div>
                  <h6 class="float-left mb-1">Client Call</h6>
                  <small class="float-right mt-1">19 November 2019</small>
                  <div class="d-inline-block w-100">
                    <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                  </div>
                </li>
                <li>
                  <div class="timeline-dots border-warning text-warning"><i class="ri-book-open-fill"></i></div>
                  <h6 class="float-left mb-1">Mega event</h6>
                  <small class="float-right mt-1">15 November 2019</small>
                  <div class="d-inline-block w-100">
                    <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                  </div>
                </li>
              </ul>
            </template>
          </iq-card>
        </b-col>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title"> Active Users </h4>
          </template>
          <template v-slot:headerAction>
            <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
              <template v-slot:button-content>
                <i class="ri-more-2-fill"></i>
              </template>
              <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
              <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
            </b-dropdown>
          </template>
          <template v-slot:body>
            <b-row>
              <b-col lg="12">
                <div class="iq-details">
                  <span class="title text-dark">New Customers</span>
                  <div class="percentage float-right text-primary">85 <span>%</span></div>
                  <div class="iq-progress-bar-linear d-inline-block w-100">
                    <div class="iq-progress-bar">
                      <span class="bg-primary" data-percent="85"></span>
                    </div>
                  </div>
                  <b-progress value="85" variant="primary" max="100" class="iq-progress-bar"></b-progress>
                </div>
                <div class="iq-details mt-4">
                  <span class="title text-dark">New Customers</span>
                  <div class="percentage float-right text-warning">85 <span>%</span></div>
                  <b-progress value="85" variant="warning" max="100" class="iq-progress-bar mt-4"></b-progress>
                </div>
                <div class="iq-details mt-4">
                  <span class="title text-dark">New Customers</span>
                  <div class="percentage float-right text-success">85 <span>%</span></div>
                  <b-progress value="85" variant="success" max="100" class="iq-progress-bar mt-4"></b-progress>
                </div>
                <div class="iq-details mt-4">
                  <span class="title text-dark">New Customers</span>
                  <div class="percentage float-right text-danger">85 <span>%</span></div>
                  <b-progress value="85" variant="danger" max="100" class="iq-progress-bar mt-4"></b-progress>
                </div>
              </b-col>
            </b-row>
          </template>
          <div id="chart-8"></div>
        </iq-card>
        <!-- <div id="chart-8"></div> -->
      </b-col>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title"> Customer Satisfactions </h4>
          </template>
          <template v-slot:body>
            <h2>3,897<span class="text-success font-size-14 ml-3 mr-3"><i class="ri-arrow-up-fill mr-2"></i>+3.3%</span><small class="text-secondary font-size-14">Generated by clients</small></h2>
            <b-progress :max="100">
              <b-progress-bar v-for="(item,index) in customerSatisfaction" :key="index" :variant="item.bgColor" role="progressbar" :value="item.width" :aria-valuenow="item.ariaValueNow"></b-progress-bar>
            </b-progress>
            <b-table responsive class="mb-0 mt-4" :borderless="borderless" :items="customerItems" thead-class="d-none">
              <template v-slot:cell(status)="data">
                <div :class="'iq-profile-avatar '+ data.value  +' mt-4'"> </div>
              </template>
              <template v-slot:cell(title)="data1">
                <h4>{{ data1.value }}</h4>
              </template>
              <template v-slot:cell(number)="data2">
                <span class="text-muted">{{ data2.value }}</span>
              </template>
            </b-table>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="4">
        <iq-card class="iq-card-block iq-card-stretch iq-card-height">
          <template v-slot:headerTitle>
            <h4 class="card-title"> Tasks </h4>
          </template>
          <template v-slot:headerAction>
            <ul class="nav nav-pills" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
              </li>
            </ul>
          </template>
          <template v-slot:body>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck11">
                    <label class="custom-control-label" for="customCheck11">You should check in some of below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck10">
                    <label class="custom-control-label" for="customCheck10">Get the address of customer</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck12">
                    <label class="custom-control-label" for="customCheck12">Contact Vendor for parcel</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck13">
                    <label class="custom-control-label" for="customCheck13">Refule delivery truck</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck14">
                    <label class="custom-control-label" for="customCheck14">Pick up for order no. 334</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck15">
                    <label class="custom-control-label" for="customCheck15">Pay taxes for every bill</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck16">
                    <label class="custom-control-label" for="customCheck16">I am designers & I have no life</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck17">
                    <label class="custom-control-label" for="customCheck17">This is a good product. Buy it :) </label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck18">
                    <label class="custom-control-label" for="customCheck18">You should check in on some of  below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck19">
                    <label class="custom-control-label" for="customCheck19">You should check in on some of  below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck110">
                    <label class="custom-control-label" for="customCheck110">You should check in on some of  below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck111">
                    <label class="custom-control-label" for="customCheck111">You should check in on some of  below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
                <div class="d-flex tasks-card" role="alert">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="customCheck112">
                    <label class="custom-control-label" for="customCheck112">You should check in on some of  below.</label>
                  </div>
                  <button type="button" class="close ml-auto" data-dismiss="alert" aria-label="Close">
                  <i class="ri-close-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'
export default {
  name: 'dashboard7',
  mounted () {
    findash.index()
  },
  data () {
    return {
      cardData1: [
        { colorClass: 'bg-primary', iconClass: 'ri-focus-2-line', title: 'Process', number: '2.5' },
        { colorClass: 'bg-warning', iconClass: 'ri-text-spacing', title: 'Cycle', number: '3.7' },
        { colorClass: 'bg-info', iconClass: 'ri-page-separator', title: 'Maintenance', number: '5.6' },
        { colorClass: 'bg-danger', iconClass: 'ri-swap-line', title: 'Services', number: '2.5' },
        { colorClass: 'bg-success', iconClass: 'ri-ruler-line', title: 'Retail', number: '4.1' },
        { colorClass: 'bg-dark', iconClass: 'ri-database-line', title: 'Datbase', number: '1.5' }
      ],
      activitiesData2: [
        { color: 'primary', iconClass: 'ri-login-circle-line', title: 'Client Login', date: '24 November 2019', description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple', images: false },
        { color: 'success', iconClass: 'ri-shape-line', title: 'Scheduled Maintenance', date: '23 November 2019', description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple', images: false },
        { color: 'danger', iconClass: 'ri-clockwise-2-fill', title: 'Dev Meetup', date: '20 November 2019', description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple', images: false },
        { color: 'primary', iconClass: 'ri-phone-fill', title: 'Client Call', date: '19 November 2019', description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple', images: false },
        { color: 'warning', iconClass: 'ri-book-open-fill', title: 'Mega event', date: '15 November 2019', description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple', images: false }
      ],
      chart1: {
        chart: {
          height: 400,
          type: 'bar',
          sparkline: {
            show: !1
          },
          toolbar: {
            show: !1
          }
        },
        colors: ['#1e3d73', '#ffbf43'],
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: '30%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          show: !1,
          width: 5,
          colors: ['#ffffff']
        },
        series: [{
          name: 'Mobile',
          enabled: 'true',
          data: [44, 90, 90, 60, 115]
        }, {
          name: 'Desktop',
          data: [35, 80, 100, 70, 95]
        }],
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (e) {
              return '$ ' + e + ' thousands'
            }
          }
        }
      },
      chart2: {
        chart: {
          height: 235,
          type: 'donut'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '55%'
            }
          }
        },
        series: [44, 55, 41],
        colors: ['#1e3d73', '#fe517e', '#99f6ca'],
        labels: ['Server1', 'Server2', 'Server3'],
        legend: {
          position: 'bottom'
        }
      },
      customerSatisfaction: [
        { bgColor: 'success', width: '40', ariaValueNow: '40' },
        { bgColor: 'primary', width: '20', ariaValueNow: '20' },
        { bgColor: 'primary', width: '10', ariaValueNow: '10' },
        { bgColor: 'info', width: '40', ariaValueNow: '40' },
        { bgColor: 'warning', width: '20', ariaValueNow: '20' },
        { bgColor: 'danger', width: '10', ariaValueNow: '10' }
      ],
      customerItems: [
        { status: 'status-online', title: 'Excellent', number: '2400', percentage: '60%' },
        { status: 'status-blue', title: 'Very Good', number: '1200', percentage: '30%' },
        { status: 'status-primary', title: 'Good', number: '240', percentage: '6%' },
        { status: 'status-info', title: 'Fair', number: '80', percentage: '2%' },
        { status: 'status-away', title: 'Poor', number: '40', percentage: '1%' },
        { status: 'status-danger', title: 'Very Poor', number: '40', percentage: '1%' }
      ],
      borderless: true
    }
  }
}
</script>
