var wms_layers = [];


        var lyr_SatelitGoogle_0 = new ol.layer.Tile({
            'title': 'Satelit Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KabLampungSelatanLampung_1 = new ol.format.GeoJSON();
var features_KabLampungSelatanLampung_1 = format_KabLampungSelatanLampung_1.readFeatures(json_KabLampungSelatanLampung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabLampungSelatanLampung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabLampungSelatanLampung_1.addFeatures(features_KabLampungSelatanLampung_1);
var lyr_KabLampungSelatanLampung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabLampungSelatanLampung_1, 
                style: style_KabLampungSelatanLampung_1,
                popuplayertitle: "Kab. Lampung Selatan, Lampung",
                interactive: true,
                    title: '<img src="styles/legend/KabLampungSelatanLampung_1.png" /> Kab. Lampung Selatan, Lampung'
                });
var format_KotaBandarLampungLampung_2 = new ol.format.GeoJSON();
var features_KotaBandarLampungLampung_2 = format_KotaBandarLampungLampung_2.readFeatures(json_KotaBandarLampungLampung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaBandarLampungLampung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaBandarLampungLampung_2.addFeatures(features_KotaBandarLampungLampung_2);
var lyr_KotaBandarLampungLampung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaBandarLampungLampung_2, 
                style: style_KotaBandarLampungLampung_2,
                popuplayertitle: "Kota Bandar Lampung, Lampung",
                interactive: true,
                    title: '<img src="styles/legend/KotaBandarLampungLampung_2.png" /> Kota Bandar Lampung, Lampung'
                });
var format_KabPesawaranLampung_3 = new ol.format.GeoJSON();
var features_KabPesawaranLampung_3 = format_KabPesawaranLampung_3.readFeatures(json_KabPesawaranLampung_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabPesawaranLampung_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabPesawaranLampung_3.addFeatures(features_KabPesawaranLampung_3);
var lyr_KabPesawaranLampung_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabPesawaranLampung_3, 
                style: style_KabPesawaranLampung_3,
                popuplayertitle: "Kab. Pesawaran, Lampung",
                interactive: true,
                    title: '<img src="styles/legend/KabPesawaranLampung_3.png" /> Kab. Pesawaran, Lampung'
                });
var format_KabTanggamusLampung_4 = new ol.format.GeoJSON();
var features_KabTanggamusLampung_4 = format_KabTanggamusLampung_4.readFeatures(json_KabTanggamusLampung_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabTanggamusLampung_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabTanggamusLampung_4.addFeatures(features_KabTanggamusLampung_4);
var lyr_KabTanggamusLampung_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabTanggamusLampung_4, 
                style: style_KabTanggamusLampung_4,
                popuplayertitle: "Kab. Tanggamus, Lampung",
                interactive: true,
                    title: '<img src="styles/legend/KabTanggamusLampung_4.png" /> Kab. Tanggamus, Lampung'
                });
var format_KabPesisirBaratLampung_5 = new ol.format.GeoJSON();
var features_KabPesisirBaratLampung_5 = format_KabPesisirBaratLampung_5.readFeatures(json_KabPesisirBaratLampung_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabPesisirBaratLampung_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabPesisirBaratLampung_5.addFeatures(features_KabPesisirBaratLampung_5);
var lyr_KabPesisirBaratLampung_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabPesisirBaratLampung_5, 
                style: style_KabPesisirBaratLampung_5,
                popuplayertitle: "Kab. Pesisir Barat, Lampung",
                interactive: true,
                    title: '<img src="styles/legend/KabPesisirBaratLampung_5.png" /> Kab. Pesisir Barat, Lampung'
                });
var format_KabPandeglangBanten_6 = new ol.format.GeoJSON();
var features_KabPandeglangBanten_6 = format_KabPandeglangBanten_6.readFeatures(json_KabPandeglangBanten_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabPandeglangBanten_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabPandeglangBanten_6.addFeatures(features_KabPandeglangBanten_6);
var lyr_KabPandeglangBanten_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabPandeglangBanten_6, 
                style: style_KabPandeglangBanten_6,
                popuplayertitle: "Kab. Pandeglang, Banten",
                interactive: true,
                    title: '<img src="styles/legend/KabPandeglangBanten_6.png" /> Kab. Pandeglang, Banten'
                });
var format_KotaSerangBanten_7 = new ol.format.GeoJSON();
var features_KotaSerangBanten_7 = format_KotaSerangBanten_7.readFeatures(json_KotaSerangBanten_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSerangBanten_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSerangBanten_7.addFeatures(features_KotaSerangBanten_7);
var lyr_KotaSerangBanten_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaSerangBanten_7, 
                style: style_KotaSerangBanten_7,
                popuplayertitle: "Kota Serang, Banten",
                interactive: true,
                    title: '<img src="styles/legend/KotaSerangBanten_7.png" /> Kota Serang, Banten'
                });
var format_KabSerangBanten_8 = new ol.format.GeoJSON();
var features_KabSerangBanten_8 = format_KabSerangBanten_8.readFeatures(json_KabSerangBanten_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabSerangBanten_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabSerangBanten_8.addFeatures(features_KabSerangBanten_8);
var lyr_KabSerangBanten_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabSerangBanten_8, 
                style: style_KabSerangBanten_8,
                popuplayertitle: "Kab. Serang, Banten",
                interactive: true,
                    title: '<img src="styles/legend/KabSerangBanten_8.png" /> Kab. Serang, Banten'
                });
var format_KotaCilegonBanten_9 = new ol.format.GeoJSON();
var features_KotaCilegonBanten_9 = format_KotaCilegonBanten_9.readFeatures(json_KotaCilegonBanten_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaCilegonBanten_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaCilegonBanten_9.addFeatures(features_KotaCilegonBanten_9);
var lyr_KotaCilegonBanten_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaCilegonBanten_9, 
                style: style_KotaCilegonBanten_9,
                popuplayertitle: "Kota Cilegon, Banten",
                interactive: true,
                    title: '<img src="styles/legend/KotaCilegonBanten_9.png" /> Kota Cilegon, Banten'
                });
var format_Tsunami_10 = new ol.format.GeoJSON();
var features_Tsunami_10 = format_Tsunami_10.readFeatures(json_Tsunami_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tsunami_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tsunami_10.addFeatures(features_Tsunami_10);
var lyr_Tsunami_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tsunami_10, 
                style: style_Tsunami_10,
                popuplayertitle: "Tsunami",
                interactive: true,
                    title: '<img src="styles/legend/Tsunami_10.png" /> Tsunami'
                });
var format_StatusAman_11 = new ol.format.GeoJSON();
var features_StatusAman_11 = format_StatusAman_11.readFeatures(json_StatusAman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatusAman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatusAman_11.addFeatures(features_StatusAman_11);
var lyr_StatusAman_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatusAman_11, 
                style: style_StatusAman_11,
                popuplayertitle: "Status: Aman",
                interactive: true,
                    title: '<img src="styles/legend/StatusAman_11.png" /> Status: Aman'
                });
var format_StatusWaspada_12 = new ol.format.GeoJSON();
var features_StatusWaspada_12 = format_StatusWaspada_12.readFeatures(json_StatusWaspada_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatusWaspada_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatusWaspada_12.addFeatures(features_StatusWaspada_12);
var lyr_StatusWaspada_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatusWaspada_12, 
                style: style_StatusWaspada_12,
                popuplayertitle: "Status: Waspada",
                interactive: true,
                    title: '<img src="styles/legend/StatusWaspada_12.png" /> Status: Waspada'
                });
var group_Query = new ol.layer.Group({
                                layers: [lyr_Tsunami_10,lyr_StatusAman_11,lyr_StatusWaspada_12,],
                                fold: "open",
                                title: "Query"});
var group_Jalan = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Jalan"});
var group_GarisAdministrasi = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Garis Administrasi"});
var group_Administrasi = new ol.layer.Group({
                                layers: [lyr_KabLampungSelatanLampung_1,lyr_KotaBandarLampungLampung_2,lyr_KabPesawaranLampung_3,lyr_KabTanggamusLampung_4,lyr_KabPesisirBaratLampung_5,lyr_KabPandeglangBanten_6,lyr_KotaSerangBanten_7,lyr_KabSerangBanten_8,lyr_KotaCilegonBanten_9,],
                                fold: "open",
                                title: "Administrasi"});

lyr_SatelitGoogle_0.setVisible(true);lyr_KabLampungSelatanLampung_1.setVisible(true);lyr_KotaBandarLampungLampung_2.setVisible(true);lyr_KabPesawaranLampung_3.setVisible(true);lyr_KabTanggamusLampung_4.setVisible(true);lyr_KabPesisirBaratLampung_5.setVisible(true);lyr_KabPandeglangBanten_6.setVisible(true);lyr_KotaSerangBanten_7.setVisible(true);lyr_KabSerangBanten_8.setVisible(true);lyr_KotaCilegonBanten_9.setVisible(true);lyr_Tsunami_10.setVisible(true);lyr_StatusAman_11.setVisible(true);lyr_StatusWaspada_12.setVisible(true);
var layersList = [lyr_SatelitGoogle_0,group_Administrasi,group_Query];
lyr_KabLampungSelatanLampung_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KotaBandarLampungLampung_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabPesawaranLampung_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabTanggamusLampung_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabPesisirBaratLampung_5.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KabPandeglangBanten_6.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaSerangBanten_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KabSerangBanten_8.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KotaCilegonBanten_9.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Tsunami_10.set('fieldAliases', {'field_1': 'field_1', 'Unnamed: 0': 'Unnamed: 0', 'ID': 'ID', 'YEAR': 'YEAR', 'MONTH': 'MONTH', 'DAY': 'DAY', 'HOUR': 'HOUR', 'MINUTE': 'MINUTE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'LOCATION_NAME': 'LOCATION_NAME', 'COUNTRY': 'COUNTRY', 'REGION': 'REGION', 'CAUSE': 'CAUSE', 'EVENT_VALIDITY': 'EVENT_VALIDITY', 'EQ_MAGNITUDE': 'EQ_MAGNITUDE', 'EQ_DEPTH': 'EQ_DEPTH', 'TS_INTENSITY': 'TS_INTENSITY', 'DAMAGE_TOTAL_DESCRIPTION': 'DAMAGE_TOTAL_DESCRIPTION', 'HOUSES_TOTAL_DESCRIPTION': 'HOUSES_TOTAL_DESCRIPTION', 'DEATHS_TOTAL_DESCRIPTION': 'DEATHS_TOTAL_DESCRIPTION', 'URL': 'URL', 'COMMENTS': 'COMMENTS', });
lyr_StatusAman_11.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_StatusWaspada_12.set('fieldAliases', {'time': 'time', 'latitude': 'latitude', 'longitude': 'longitude', 'depth': 'depth', 'mag': 'mag', 'magType': 'magType', 'nst': 'nst', 'gap': 'gap', 'dmin': 'dmin', 'rms': 'rms', 'net': 'net', 'id': 'id', 'updated': 'updated', 'place': 'place', 'type': 'type', 'horizontalError': 'horizontalError', 'depthError': 'depthError', 'magError': 'magError', 'magNst': 'magNst', 'status': 'status', 'locationSource': 'locationSource', 'magSource': 'magSource', });
lyr_KabLampungSelatanLampung_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KotaBandarLampungLampung_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabPesawaranLampung_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabTanggamusLampung_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabPesisirBaratLampung_5.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KabPandeglangBanten_6.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KotaSerangBanten_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KabSerangBanten_8.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KotaCilegonBanten_9.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Tsunami_10.set('fieldImages', {'field_1': 'Range', 'Unnamed: 0': 'Range', 'ID': 'Range', 'YEAR': 'Range', 'MONTH': 'TextEdit', 'DAY': 'TextEdit', 'HOUR': 'TextEdit', 'MINUTE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'LOCATION_NAME': 'TextEdit', 'COUNTRY': 'TextEdit', 'REGION': 'TextEdit', 'CAUSE': 'TextEdit', 'EVENT_VALIDITY': 'TextEdit', 'EQ_MAGNITUDE': 'TextEdit', 'EQ_DEPTH': 'TextEdit', 'TS_INTENSITY': 'TextEdit', 'DAMAGE_TOTAL_DESCRIPTION': 'TextEdit', 'HOUSES_TOTAL_DESCRIPTION': 'TextEdit', 'DEATHS_TOTAL_DESCRIPTION': 'TextEdit', 'URL': 'TextEdit', 'COMMENTS': 'TextEdit', });
lyr_StatusAman_11.set('fieldImages', {'time': 'DateTime', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'Range', 'gap': 'Range', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'DateTime', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontalError': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'Range', 'status': 'TextEdit', 'locationSource': 'TextEdit', 'magSource': 'TextEdit', });
lyr_StatusWaspada_12.set('fieldImages', {'time': 'DateTime', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'depth': 'TextEdit', 'mag': 'TextEdit', 'magType': 'TextEdit', 'nst': 'Range', 'gap': 'Range', 'dmin': 'TextEdit', 'rms': 'TextEdit', 'net': 'TextEdit', 'id': 'TextEdit', 'updated': 'DateTime', 'place': 'TextEdit', 'type': 'TextEdit', 'horizontalError': 'TextEdit', 'depthError': 'TextEdit', 'magError': 'TextEdit', 'magNst': 'Range', 'status': 'TextEdit', 'locationSource': 'TextEdit', 'magSource': 'TextEdit', });
lyr_KabLampungSelatanLampung_1.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KotaBandarLampungLampung_2.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KabPesawaranLampung_3.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KabTanggamusLampung_4.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KabPesisirBaratLampung_5.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_KabPandeglangBanten_6.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_KotaSerangBanten_7.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_KabSerangBanten_8.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_KotaCilegonBanten_9.set('fieldLabels', {'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'KDBPUM': 'hidden field', 'WADMKD': 'hidden field', 'WIADKD': 'hidden field', 'WADMKC': 'hidden field', 'WIADKC': 'hidden field', 'WADMKK': 'hidden field', 'WIADKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', });
lyr_Tsunami_10.set('fieldLabels', {'field_1': 'inline label - visible with data', 'Unnamed: 0': 'hidden field', 'ID': 'inline label - visible with data', 'YEAR': 'inline label - visible with data', 'MONTH': 'inline label - visible with data', 'DAY': 'inline label - visible with data', 'HOUR': 'inline label - visible with data', 'MINUTE': 'inline label - visible with data', 'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'LOCATION_NAME': 'inline label - visible with data', 'COUNTRY': 'hidden field', 'REGION': 'inline label - visible with data', 'CAUSE': 'hidden field', 'EVENT_VALIDITY': 'hidden field', 'EQ_MAGNITUDE': 'hidden field', 'EQ_DEPTH': 'hidden field', 'TS_INTENSITY': 'hidden field', 'DAMAGE_TOTAL_DESCRIPTION': 'hidden field', 'HOUSES_TOTAL_DESCRIPTION': 'hidden field', 'DEATHS_TOTAL_DESCRIPTION': 'hidden field', 'URL': 'hidden field', 'COMMENTS': 'hidden field', });
lyr_StatusAman_11.set('fieldLabels', {'time': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'depth': 'inline label - visible with data', 'mag': 'inline label - visible with data', 'magType': 'hidden field', 'nst': 'hidden field', 'gap': 'hidden field', 'dmin': 'hidden field', 'rms': 'hidden field', 'net': 'hidden field', 'id': 'hidden field', 'updated': 'hidden field', 'place': 'inline label - visible with data', 'type': 'hidden field', 'horizontalError': 'hidden field', 'depthError': 'hidden field', 'magError': 'hidden field', 'magNst': 'hidden field', 'status': 'hidden field', 'locationSource': 'hidden field', 'magSource': 'hidden field', });
lyr_StatusWaspada_12.set('fieldLabels', {'time': 'inline label - visible with data', 'latitude': 'hidden field', 'longitude': 'hidden field', 'depth': 'inline label - visible with data', 'mag': 'inline label - visible with data', 'magType': 'hidden field', 'nst': 'hidden field', 'gap': 'hidden field', 'dmin': 'hidden field', 'rms': 'hidden field', 'net': 'hidden field', 'id': 'hidden field', 'updated': 'hidden field', 'place': 'inline label - visible with data', 'type': 'hidden field', 'horizontalError': 'hidden field', 'depthError': 'hidden field', 'magError': 'hidden field', 'magNst': 'hidden field', 'status': 'hidden field', 'locationSource': 'hidden field', 'magSource': 'hidden field', });
lyr_StatusWaspada_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});