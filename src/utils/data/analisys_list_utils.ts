import { Obra } from '@domain';

import * as utils from './analisys_utils';
import * as obra_artepublica from './obra_artepublica';

const typed_obra_artepublica: Record<string, Obra> = obra_artepublica;

export const all2020 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is2020(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all2010 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is2010(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all2000 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is2000(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1990 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1990(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1980 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1980(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1970 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1970(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1960 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1960(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1950 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1950(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1940 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1940(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1930 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1930(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1920 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1920(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1910 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1910(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1900 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1900(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1890 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1890(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1880 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1880(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1870 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1870(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1860 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1860(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1850 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1850(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1840 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1840(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1830 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1830(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1820 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1820(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1810 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1810(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1800 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1800(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1790 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1790(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1780 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1780(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1770 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1770(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1760 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1760(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1750 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1750(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1740 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1740(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1730 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1730(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1720 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1720(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1710 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1710(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1700 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1700(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1690 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1690(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1680 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1680(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1670 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1670(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1660 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1660(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1650 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1650(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1640 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1640(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1630 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1630(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1620 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1620(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1610 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1610(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1600 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1500(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1590 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1590(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1580 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1580(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1570 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1570(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1560 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1560(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1550 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1550(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1540 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1540(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1530 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1530(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1520 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1520(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1510 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1510(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const all1500 = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.is1500(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
export const allNull = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.isNull(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);

export const all = {
    null: allNull,
    1500: all1500,
    1510: all1510,
    1520: all1520,
    1530: all1530,
    1540: all1540,
    1550: all1550,
    1560: all1560,
    1570: all1570,
    1580: all1580,
    1590: all1590,
    1600: all1600,
    1610: all1610,
    1620: all1620,
    1630: all1630,
    1640: all1640,
    1650: all1650,
    1660: all1660,
    1670: all1670,
    1680: all1680,
    1690: all1690,
    1700: all1700,
    1710: all1710,
    1720: all1720,
    1730: all1730,
    1740: all1740,
    1750: all1750,
    1760: all1760,
    1770: all1770,
    1780: all1780,
    1790: all1790,
    1800: all1800,
    1810: all1810,
    1820: all1820,
    1830: all1830,
    1840: all1840,
    1850: all1850,
    1860: all1860,
    1870: all1870,
    1880: all1880,
    1890: all1890,
    1900: all1900,
    1910: all1910,
    1920: all1920,
    1930: all1930,
    1940: all1940,
    1950: all1950,
    1960: all1960,
    1970: all1970,
    1980: all1980,
    1990: all1990,
    2000: all2000,
    2010: all2010,
    2020: all2020,
};
