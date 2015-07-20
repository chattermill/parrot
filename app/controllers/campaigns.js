import moment from 'moment';
import Ember from 'ember';

export default Ember.Controller.extend({
  npsScores: Ember.computed.map('model',function(campaign) {
    return campaign.get('npsScore') * 100;
  }),

  dates: Ember.computed.map('model', function(campaign) {
    var date = campaign.get('createdAt');

    return moment(date).format('MMM-YY');
  }),
  
  chartData: Ember.computed('npsScores', 'dates', function () {
    return {
      labels: this.get('dates'),
      datasets: [
        {
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: this.get('npsScores')
        }
      ]
    };
  })
});