var wms_layers = [];


        var lyr_GoogleMapsSatelliteImagery_0 = new ol.layer.Tile({
            'title': 'Google Maps Satellite Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_points_1 = new ol.format.GeoJSON();
var features_points_1 = format_points_1.readFeatures(json_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_1.addFeatures(features_points_1);
var lyr_points_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_1, 
                style: style_points_1,
                popuplayertitle: 'points',
                interactive: true,
                title: '<img src="styles/legend/points_1.png" /> points'
            });
var format_test_2 = new ol.format.GeoJSON();
var features_test_2 = format_test_2.readFeatures(json_test_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_2.addFeatures(features_test_2);
var lyr_test_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_2, 
                style: style_test_2,
                popuplayertitle: 'test',
                interactive: true,
                title: '<img src="styles/legend/test_2.png" /> test'
            });

lyr_GoogleMapsSatelliteImagery_0.setVisible(true);lyr_points_1.setVisible(true);lyr_test_2.setVisible(true);
var layersList = [lyr_GoogleMapsSatelliteImagery_0,lyr_points_1,lyr_test_2];
lyr_points_1.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_test_2.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_points_1.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_test_2.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_points_1.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_test_2.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_test_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});