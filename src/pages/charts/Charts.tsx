import Highcharts from 'highcharts';
import { ScrollView } from 'react-native';

import { Chart } from '@components';

const lineOptions: Highcharts.Options = {
    chart: {
        type: 'line',
    },

    title: {
        text: 'Title',
    },

    subtitle: {
        text: 'Subtitle',
    },

    yAxis: {
        title: {
            text: 'Number of Employees',
        },
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017',
        },
    },

    legend: {
        layout: 'horizontal',
        align: 'center',
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false,
            },
            pointStart: 2010,
        },
    },

    series: [
        {
            type: 'line',
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
            type: 'line',
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
            type: 'line',
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
            type: 'line',
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
        {
            type: 'line',
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
        },
    ],
};

const networkOptions: Highcharts.Options | unknown = {
    chart: {
        type: 'networkgraph',
    },
    title: {
        text: 'The Indo-European Language Tree',
    },
    subtitle: {
        text: 'A Force-Directed Network Graph in Highcharts',
    },
    plotOptions: {
        networkgraph: {
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9,
            },
        },
    },
    series: [
        {
            accessibility: {
                enabled: false,
            },
            dataLabels: {
                enabled: true,
            },
            id: 'lang-tree',
            data: [
                { from: 'Proto Indo-European', to: 'Balto-Slavic', color: 'red' },
                { from: 'Proto Indo-European', to: 'Germanic' },
                { from: 'Proto Indo-European', to: 'Celtic' },
                { from: 'Proto Indo-European', to: 'Italic' },
                { from: 'Proto Indo-European', to: 'Hellenic' },
                { from: 'Proto Indo-European', to: 'Anatolian' },
                { from: 'Proto Indo-European', to: 'Indo-Iranian' },
                { from: 'Proto Indo-European', to: 'Tocharian' },
                { from: 'Indo-Iranian', to: 'Dardic' },
                { from: 'Indo-Iranian', to: 'Indic' },
                { from: 'Indo-Iranian', to: 'Iranian' },
                { from: 'Iranian', to: 'Old Persian' },
                { from: 'Old Persian', to: 'Middle Persian' },
                { from: 'Indic', to: 'Sanskrit' },
                { from: 'Italic', to: 'Osco-Umbrian' },
                { from: 'Italic', to: 'Latino-Faliscan' },
                { from: 'Latino-Faliscan', to: 'Latin' },
                { from: 'Celtic', to: 'Brythonic' },
                { from: 'Celtic', to: 'Goidelic' },
                { from: 'Germanic', to: 'North Germanic' },
                { from: 'Germanic', to: 'West Germanic' },
                { from: 'Germanic', to: 'East Germanic' },
                { from: 'North Germanic', to: 'Old Norse' },
                { from: 'North Germanic', to: 'Old Swedish' },
                { from: 'North Germanic', to: 'Old Danish' },
                { from: 'West Germanic', to: 'Old English' },
                { from: 'West Germanic', to: 'Old Frisian' },
                { from: 'West Germanic', to: 'Old Dutch' },
                { from: 'West Germanic', to: 'Old Low German' },
                { from: 'West Germanic', to: 'Old High German' },
                { from: 'Old Norse', to: 'Old Icelandic' },
                { from: 'Old Norse', to: 'Old Norwegian' },
                { from: 'Old Norwegian', to: 'Middle Norwegian' },
                { from: 'Old Swedish', to: 'Middle Swedish' },
                { from: 'Old Danish', to: 'Middle Danish' },
                { from: 'Old English', to: 'Middle English' },
                { from: 'Old Dutch', to: 'Middle Dutch' },
                { from: 'Old Low German', to: 'Middle Low German' },
                { from: 'Old High German', to: 'Middle High German' },
                { from: 'Balto-Slavic', to: 'Baltic' },
                { from: 'Balto-Slavic', to: 'Slavic' },
                { from: 'Slavic', to: 'East Slavic' },
                { from: 'Slavic', to: 'West Slavic' },
                { from: 'Slavic', to: 'South Slavic' },
                // Leaves:
                { from: 'Proto Indo-European', to: 'Phrygian' },
                { from: 'Proto Indo-European', to: 'Armenian' },
                { from: 'Proto Indo-European', to: 'Albanian' },
                { from: 'Proto Indo-European', to: 'Thracian' },
                { from: 'Tocharian', to: 'Tocharian A' },
                { from: 'Tocharian', to: 'Tocharian B' },
                { from: 'Anatolian', to: 'Hittite' },
                { from: 'Anatolian', to: 'Palaic' },
                { from: 'Anatolian', to: 'Luwic' },
                { from: 'Anatolian', to: 'Lydian' },
                { from: 'Iranian', to: 'Balochi' },
                { from: 'Iranian', to: 'Kurdish' },
                { from: 'Iranian', to: 'Pashto' },
                { from: 'Iranian', to: 'Sogdian' },
                { from: 'Old Persian', to: 'Pahlavi' },
                { from: 'Middle Persian', to: 'Persian' },
                { from: 'Hellenic', to: 'Greek' },
                { from: 'Dardic', to: 'Dard' },
                { from: 'Sanskrit', to: 'Sindhi' },
                { from: 'Sanskrit', to: 'Romani' },
                { from: 'Sanskrit', to: 'Urdu' },
                { from: 'Sanskrit', to: 'Hindi' },
                { from: 'Sanskrit', to: 'Bihari' },
                { from: 'Sanskrit', to: 'Assamese' },
                { from: 'Sanskrit', to: 'Bengali' },
                { from: 'Sanskrit', to: 'Marathi' },
                { from: 'Sanskrit', to: 'Gujarati' },
                { from: 'Sanskrit', to: 'Punjabi' },
                { from: 'Sanskrit', to: 'Sinhalese' },
                { from: 'Osco-Umbrian', to: 'Umbrian' },
                { from: 'Osco-Umbrian', to: 'Oscan' },
                { from: 'Latino-Faliscan', to: 'Faliscan' },
                { from: 'Latin', to: 'Portugese' },
                { from: 'Latin', to: 'Spanish' },
                { from: 'Latin', to: 'French' },
                { from: 'Latin', to: 'Romanian' },
                { from: 'Latin', to: 'Italian' },
                { from: 'Latin', to: 'Catalan' },
                { from: 'Latin', to: 'Franco-Provençal' },
                { from: 'Latin', to: 'Rhaeto-Romance' },
                { from: 'Brythonic', to: 'Welsh' },
                { from: 'Brythonic', to: 'Breton' },
                { from: 'Brythonic', to: 'Cornish' },
                { from: 'Brythonic', to: 'Cuymbric' },
                { from: 'Goidelic', to: 'Modern Irish' },
                { from: 'Goidelic', to: 'Scottish Gaelic' },
                { from: 'Goidelic', to: 'Manx' },
                { from: 'East Germanic', to: 'Gothic' },
                { from: 'Middle Low German', to: 'Low German' },
                { from: 'Middle High German', to: '(High) German' },
                { from: 'Middle High German', to: 'Yiddish' },
                { from: 'Middle English', to: 'English' },
                { from: 'Middle Dutch', to: 'Hollandic' },
                { from: 'Middle Dutch', to: 'Flemish' },
                { from: 'Middle Dutch', to: 'Dutch' },
                { from: 'Middle Dutch', to: 'Limburgish' },
                { from: 'Middle Dutch', to: 'Brabantian' },
                { from: 'Middle Dutch', to: 'Rhinelandic' },
                { from: 'Old Frisian', to: 'Frisian' },
                { from: 'Middle Danish', to: 'Danish' },
                { from: 'Middle Swedish', to: 'Swedish' },
                { from: 'Middle Norwegian', to: 'Norwegian' },
                { from: 'Old Norse', to: 'Faroese' },
                { from: 'Old Icelandic', to: 'Icelandic' },
                { from: 'Baltic', to: 'Old Prussian' },
                { from: 'Baltic', to: 'Lithuanian' },
                { from: 'Baltic', to: 'Latvian' },
                { from: 'West Slavic', to: 'Polish' },
                { from: 'West Slavic', to: 'Slovak' },
                { from: 'West Slavic', to: 'Czech' },
                { from: 'West Slavic', to: 'Wendish' },
                { from: 'East Slavic', to: 'Bulgarian' },
                { from: 'East Slavic', to: 'Old Church Slavonic' },
                { from: 'East Slavic', to: 'Macedonian' },
                { from: 'East Slavic', to: 'Serbo-Croatian' },
                { from: 'East Slavic', to: 'Slovene' },
                { from: 'South Slavic', to: 'Russian' },
                { from: 'South Slavic', to: 'Ukrainian' },
                { from: 'South Slavic', to: 'Belarusian' },
                { from: 'South Slavic', to: 'Rusyn' },
            ],
            nodes: [{ id: 'Balto-Slavic', color: 'blue', marker: { radius: 10 } }],
        },
    ],
};

function Charts(): JSX.Element {
    return (
        <ScrollView style={{ width: '100%' }}>
            <Chart options={lineOptions} />
            <Chart options={networkOptions as Highcharts.Options} />
        </ScrollView>
    );
}

export default Charts;
