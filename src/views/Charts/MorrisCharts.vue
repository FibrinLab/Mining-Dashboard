<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" v-for="(item,index) in charts" :key="index">
        <iq-card>
          <template v-slot:headerTitle>
            <h4>{{ item.title }}</h4>
          </template>
          <template v-slot:body>
            <MorrisChart
              :element="item.type+index"
              :type="item.type"
              :xKeys="item.xKeys"
              :data="item.bodyData"
              :colors="item.colors"
              :yKeys="item.yKeys"
              :labels="item.labels"
            />
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { findash } from '../../config/pluginInit'

export default {
  name: 'MorrisCharts',
  mounted () {
    findash.index()
  },
  data () {
    return {
      charts: [
        {
          title: 'Line Chart',
          type: 'line',
          bodyData: [
            { year: '2008', a: 20 },
            { year: '2009', a: 10 },
            { year: '2010', a: 5 }
          ],
          // colors: [ '#FF6384', '#36A2EB' ],
          xKeys: 'year',
          yKeys: ['a'],
          labels: ['Value'],
          colors: ['#1e3d73']
        },
        {
          title: 'Bar Chart',
          type: 'bar',
          bodyData: [
            { year: 2013, and: 10, ios: 12, win: 2 },
            { year: 2014, and: 10, ios: 15, win: 2 },
            { year: 2015, and: 20, ios: 25, win: 2 },
            { year: 2016, and: 30, ios: 20, win: 2 }
          ],
          xKeys: 'year',
          yKeys: ['and', 'ios', 'win'],
          labels: ['Android', 'iOS', 'Windows'],
          colors: ['#1e3d73', '#99f6ca', '#99f6ca']
        },
        {
          title: 'Area Chart',
          type: 'area',
          bodyData: [
            { year: '2011 Q1', a: 2666, b: 2666 },
            { year: '2011 Q2', a: 2778, b: 2294 },
            { year: '2011 Q3', a: 4912, b: 1969 },
            { year: '2011 Q4', a: 3767, b: 3597 },
            { year: '2012 Q5', a: 6810, b: 1914 },
            { year: '2012 Q6', a: 5670, b: 4293 }
          ],
          xKeys: 'year',
          yKeys: ['a', 'b'],
          labels: ['Serie A', 'Serie B'],
          colors: ['#1e3d73', '#fe517e'],
          hoverCallback: function (e, t, a, n) {
            return ''
          }
        },
        {
          title: 'Donut Chart',
          type: 'donut',
          bodyData: [
            { label: 'Download Sales', value: 30 },
            { label: 'In-Store Sales', value: 12 },
            { label: 'Mail-Order Sales', value: 20 }
          ],
          colors: ['#1e3d73', '#fe517e', '#99f6ca'],
          yKeys: [],
          xKeys: '',
          labels: []
        }
      ]
    }
  }
}
</script>
