import { useRef } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsData from 'highcharts/modules/data';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsNetworkGraph from 'highcharts/modules/networkgraph';
import HighchartsSankey from 'highcharts/modules/sankey';
import HighchartsSeriesLabel from 'highcharts/modules/series-label';
import Theme from 'highcharts/themes/brand-light';

HighchartsData(Highcharts);
HighchartsSeriesLabel(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsNetworkGraph(Highcharts);
HighchartsSankey(Highcharts);

type ChartLightProps = {
    options: Highcharts.Options;
};

function ChartLight({ options }: ChartLightProps): JSX.Element {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    Theme(Highcharts);

    return <HighchartsReact constructorType="chart" highcharts={Highcharts} options={options} ref={chartComponentRef} />;
}

export default ChartLight;
