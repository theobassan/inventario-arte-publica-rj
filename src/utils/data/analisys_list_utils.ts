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
export const all1Null = Object.keys(typed_obra_artepublica)
    .filter((obra) => utils.isNull(typed_obra_artepublica[obra].DataInauguracao))
    .map((obra) => typed_obra_artepublica[obra]);
