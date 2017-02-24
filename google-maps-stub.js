'use strict';

module.exports = function() {
  var window = {
    google: {
      maps: {
        //https://developers.google.com/maps/documentation/javascript/reference#Animation
        Animation: {},
        //https://developers.google.com/maps/documentation/javascript/reference#Attribution
        Attribution: {},
        //https://developers.google.com/maps/documentation/javascript/reference#BicyclingLayer
        BicyclingLayer: function () { },
        Circle: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#ControlPosition
        ControlPosition: {},
        //https://developers.google.com/maps/documentation/javascript/reference#Data
        Data: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer
        DirectionsRenderer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#DirectionsService
        DirectionsService: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#DirectionsStatus
        DirectionsStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#DistanceMatrixElementStatus
        DistanceMatrixElementStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#DistanceMatrixService
        DistanceMatrixService: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#DistanceMatrixStatus
        DistanceMatrixStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#ElevationService
        ElevationService: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#ElevationStatus
        ElevationStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#FusionTablesLayer
        FusionTablesLayer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Geocoder
        Geocoder: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#GeocoderLocationType
        GeocoderLocationType: {},
        //https://developers.google.com/maps/documentation/javascript/reference#GeocoderStatus
        GeocoderStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay
        GroundOverlay: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#ImageMapType
        ImageMapType: function () { },
        InfoWindow: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#KmlLayer
        KmlLayer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#KmlLayerStatus
        KmlLayerStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#LatLng
        LatLng: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#LatLngBounds
        LatLngBounds: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#MVCArray
        MVCArray: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#MVCObject
        MVCObject: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Map
        Map: function () {
            return {
                //methods
                fitBounds: function () { },
                getBounds: function () { },
                getCenter: function () { },
                getDiv: function () { },
                getHeading: function () { },
                getMapTypeId: function () { },
                getProjection: function () { },
                getStreetView: function () { },
                getTilt: function () { },
                getZoom: function () { },
                panBy: function () { },
                panTo: function () { },
                panToBounds: function () { },
                setCenter: function () { },
                setHeading: function() { },
                setMapTypeId: function() { },
                setOptions: function() { },
                setStreetView: function () { },
                setTilt: function () { },
                setZoom: function() { },
                //properties
                controls: {},
                data: {
                    //https://developers.google.com/maps/documentation/javascript/reference#Data
                    //methods
                    add: function () { },
                    addGeoJson: function () { },
                    contains: function () { },
                    forEach: function () { },
                    getControlPosition: function () { },
                    getControls: function () { },
                    getDrawingMode: function () { },
                    getFeatureById: function () { },
                    getMap: function () { },
                    getStyle: function () { },
                    loadGeoJson: function () { },
                    overrideStyle: function () { },
                    remove: function () { },
                    revertStyle: function () { },
                    setControlPosition: function () { },
                    setControls: function () { },
                    setDrawingMode: function () { },
                    setMap: function () { },
                    setStyle: function () { },
                    toGeoJson: function () { },
                    //properties
                    controlPosition: {},
                    controls: [],

                },
                mapTypes: {
                    //https://developers.google.com/maps/documentation/javascript/reference#MapTypeRegistry
                    //methods
                    set: function () { }
                },
                overlayMapTypes: {
                    //https://developers.google.com/maps/documentation/javascript/reference#MVCArray
                    clear: function () { },
                    getArray: function () { },
                    getAt: function () { },
                    getLength: function () { },
                    insertAt: function () { },
                    pop: function () { },
                    push: function () { },
                    removeAt: function () { },
                    setAt: function () { }
                }
            };
        },
        MapTypeControlStyle: {},
        //https://developers.google.com/maps/documentation/javascript/reference#MapTypeId
        MapTypeId: {
            HYBRID: '',
            ROADMAP: '',
            SATELLITE: '',
            TERRAIN: ''
        },
        //https://developers.google.com/maps/documentation/javascript/reference#MapTypeRegistry
        MapTypeRegistry: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Marker
        Marker: function () {
            return {
                setTitle: function (visible) { },
                setVisible: function () { },
                setZIndex: function () { }
            };
        },
        MarkerImage: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions
        MarkerOptions: {
            visible: false
        },
        //https://developers.google.com/maps/documentation/javascript/reference#MaxZoomService
        MaxZoomService: function () {
            return {
                getMaxZoomAtLatLng: function () { }
            };
        },
        //https://developers.google.com/maps/documentation/javascript/reference#MaxZoomStatus
        MaxZoomStatus: {},
        NavigationControlStyle: {},
        OverlayView: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Point
        Point: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Polygon
        Polygon: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Polyline
        Polyline: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#Rectangle
        Rectangle: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#SaveWidget
        SaveWidget: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#ScaleControlStyle
        ScaleControlStyle: {},
        //https://developers.google.com/maps/documentation/javascript/reference#Size
        Size: function (width, height, wiidthUnit, heightUnit) { },
        //https://developers.google.com/maps/documentation/javascript/reference#StreetViewCoverageLayer
        StreetViewCoverageLayer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#StreetViewPanorama
        StreetViewPanorama: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#StreetViewService
        StreetViewService: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#StreetViewStatus
        StreetViewStatus: {},
        //https://developers.google.com/maps/documentation/javascript/reference#StrokePosition
        StrokePosition: {},
        //https://developers.google.com/maps/documentation/javascript/reference#StyledMapType
        StyledMapType: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#SymbolPath
        SymbolPath: {},
        //https://developers.google.com/maps/documentation/javascript/reference#TrafficLayer
        TrafficLayer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#TransitLayer
        TransitLayer: function () { },
        //https://developers.google.com/maps/documentation/javascript/reference#TransitMode
        TransitMode: {},
        //https://developers.google.com/maps/documentation/javascript/reference#TransitRoutePreference
        TransitRoutePreference: {},
        //https://developers.google.com/maps/documentation/javascript/reference#TravelMode
        TravelMode: {},
        //https://developers.google.com/maps/documentation/javascript/reference#UnitSystem
        UnitSystem: {},
        //https://developers.google.com/maps/documentation/javascript/reference#ZoomControlStyle
        ZoomControlStyle: {},
        __gjsload__: function () { },
        event: {
            addListener: function () { }
        },
        places: {
            AutocompleteService: function () {
                return {
                    getPlacePredictions: function () { }
                };
            }
        }
      }
    }
  };

  return window.google;
};
