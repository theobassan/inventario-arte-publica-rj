import { useRef } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsData from 'highcharts/modules/data';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsNetworkGraph from 'highcharts/modules/networkgraph';
import HighchartsSeriesLabel from 'highcharts/modules/series-label';
import Theme from 'highcharts/themes/brand-dark';

HighchartsData(Highcharts);
HighchartsSeriesLabel(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsNetworkGraph(Highcharts);

type ChartDarkProps = {
    options: Highcharts.Options;
};

function ChartDark({ options }: ChartDarkProps): JSX.Element {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    console.log(options.exporting);

    Theme(Highcharts);

    return <HighchartsReact constructorType="chart" highcharts={Highcharts} options={options} ref={chartComponentRef} />;
}

export default ChartDark;
