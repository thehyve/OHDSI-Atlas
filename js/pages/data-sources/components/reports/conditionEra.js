define([
	'knockout',
	'text!./treemap.html',
  'pages/data-sources/classes/Treemap',
  'pages/data-sources/const',
  'components/heading',
  'components/charts/treemap',
  'pages/data-sources/components/reports/treemapDrilldown',
], function (
	ko,
	view,
  TreemapReport,
  helpers
) {
	class ConditionEra extends TreemapReport {
    constructor() {
      super();
      this.name = 'condition-era';
      this.view = view;
      this.currentReport = {};

      this.aggProperty = helpers.aggProperties.byLengthOfEra;
    }

    createViewModel(params) {
      super.createViewModel(params);
      return this;
    }
  }

  const report = new ConditionEra();	
	return report.build();
});
