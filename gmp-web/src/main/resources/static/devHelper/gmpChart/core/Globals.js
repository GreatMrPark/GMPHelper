/**
 *  (c) 2021-2021 GreatMrPark
 *  License: www.greatmrpark.com/license
 */
'use strict';
/* globals Image, window */
var glob = (
        typeof win !== 'undefined' ?
                win :
                    typeof window !== 'undefined' ?
                            window :
                            {}), doc = glob.document, SVG_NS = 'http://www.w3.org/2000/svg', userAgent = (glob.navigator && glob.navigator.userAgent) || '', svg = (doc &&
    doc.createElementNS &&
    !!doc.createElementNS(SVG_NS, 'svg').createSVGRect), isMS = /(edge|msie|trident)/i.test(userAgent) && !glob.opera, isFirefox = userAgent.indexOf('Firefox') !== -1, isChrome = userAgent.indexOf('Chrome') !== -1, hasBidiBug = (isFirefox &&
    parseInt(userAgent.split('Firefox/')[1], 10) < 4 // issue #38
), noop = function () { }, 
// Checks whether the browser supports passive events, (#11353).
checkPassiveEvents = function () {
    var supportsPassive = false;
    // Object.defineProperty doesn't work on IE as well as passive events - instead of using polyfill, we can exclude IE totally.
    if (!isMS) {
        var opts = Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        });
        if (glob.addEventListener && glob.removeEventListener) {
            glob.addEventListener('testPassive', noop, opts);
            glob.removeEventListener('testPassive', noop, opts);
        }
    }
    return supportsPassive;
};

var G = {
    product: 'GMPCharts',
    version: '@product.version@',
    deg2rad: Math.PI * 2 / 360,
    doc: doc,
    hasBidiBug: hasBidiBug,
    hasTouch: !!glob.TouchEvent,
    isMS: isMS,
    isWebKit: userAgent.indexOf('AppleWebKit') !== -1,
    isFirefox: isFirefox,
    isChrome: isChrome,
    isSafari: !isChrome && userAgent.indexOf('Safari') !== -1,
    isTouchDevice: /(Mobile|Android|Windows Phone)/.test(userAgent),
    SVG_NS: SVG_NS,
    chartCount: 0,
    seriesTypes: {},
    supportsPassiveEvents: checkPassiveEvents(),
    symbolSizes: {},
    svg: svg,
    win: glob,
    marginNames: ['plotTop', 'marginRight', 'marginBottom', 'plotLeft'],
    noop: noop,
    /**
     * Theme options that should get applied to the chart. In module mode it
     * might not be possible to change this property because of read-only
     * restrictions, instead use {@link Highcharts.setOptions}.
     *
     * @name Highcharts.theme
     * @type {Highcharts.Options}
     */
    /**
     * An array containing the current chart objects in the page. A chart's
     * position in the array is preserved throughout the page's lifetime. When
     * a chart is destroyed, the array item becomes `undefined`.
     *
     * @name Highcharts.charts
     * @type {Array<Highcharts.Chart|undefined>}
     */
    charts: [],
    /**
     * A hook for defining additional date format specifiers. New
     * specifiers are defined as key-value pairs by using the
     * specifier as key, and a function which takes the timestamp as
     * value. This function returns the formatted portion of the
     * date.
     *
     * @sample highcharts/global/dateformats/
     *         Adding support for week number
     *
     * @name Highcharts.dateFormats
     * @type {Highcharts.Dictionary<Highcharts.TimeFormatCallbackFunction>}
     */
    dateFormats: {}
};
export default H;