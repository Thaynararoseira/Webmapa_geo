var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_fortes_militares__area_militar_2 = new ol.format.GeoJSON();
var features_fortes_militares__area_militar_2 = format_fortes_militares__area_militar_2.readFeatures(json_fortes_militares__area_militar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fortes_militares__area_militar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fortes_militares__area_militar_2.addFeatures(features_fortes_militares__area_militar_2);
var lyr_fortes_militares__area_militar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fortes_militares__area_militar_2, 
                style: style_fortes_militares__area_militar_2,
                popuplayertitle: 'fortes_militares__area_militar',
                interactive: true,
                title: '<img src="styles/legend/fortes_militares__area_militar_2.png" /> fortes_militares__area_militar'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_fortes_militares__area_militar_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Municipios_1,lyr_fortes_militares__area_militar_2];
lyr_Municipios_1.set('fieldAliases', {'fid': 'fid', 'MUNICIPIO': 'MUNICIPIO', 'Codigo': 'Codigo', });
lyr_fortes_militares__area_militar_2.set('fieldAliases', {'fid': 'fid', 'idgeometria': 'idgeometria', 'nome': 'NOME', 'nome_breve': 'nome_breve', 'org_gestor': 'ORGÃO GESTOR', 'municipio': 'MUNICÍPIO', });
lyr_Municipios_1.set('fieldImages', {'fid': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'Codigo': 'TextEdit', });
lyr_fortes_militares__area_militar_2.set('fieldImages', {'fid': 'Hidden', 'idgeometria': 'Hidden', 'nome': 'TextEdit', 'nome_breve': 'TextEdit', 'org_gestor': 'TextEdit', 'municipio': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'fid': 'no label', 'MUNICIPIO': 'no label', 'Codigo': 'no label', });
lyr_fortes_militares__area_militar_2.set('fieldLabels', {'nome': 'no label', 'nome_breve': 'no label', 'org_gestor': 'no label', 'municipio': 'no label', });
lyr_fortes_militares__area_militar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});