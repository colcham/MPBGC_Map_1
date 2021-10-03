var wms_layers = [];


        var lyr_pnvkarte_0 = new ol.layer.Tile({
            'title': 'Öpnvkarte',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://www.xn--pnvkarte-m4a.de/">© Öpnvkarte, CC-BY-SA</a>',
                url: 'http://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png'
            })
        });
var format_PercentFirstShotVaccination_1 = new ol.format.GeoJSON();
var features_PercentFirstShotVaccination_1 = format_PercentFirstShotVaccination_1.readFeatures(json_PercentFirstShotVaccination_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentFirstShotVaccination_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentFirstShotVaccination_1.addFeatures(features_PercentFirstShotVaccination_1);
var lyr_PercentFirstShotVaccination_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentFirstShotVaccination_1, 
                style: style_PercentFirstShotVaccination_1,
                interactive: true,
    title: 'Percent First Shot Vaccination<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_0.png" /> 24.3 - 24.3<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_1.png" /> 24.3 - 24.3<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_2.png" /> 24.3 - 60.8<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_3.png" /> 60.8 - 65.9<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_4.png" /> 65.9 - 67.5<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_5.png" /> 67.5 - 73<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_6.png" /> 73 - 75.1<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_7.png" /> 75.1 - 79.6<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_8.png" /> 79.6 - 85.3<br />\
    <img src="styles/legend/PercentFirstShotVaccination_1_9.png" /> 85.3 - 100<br />'
        });
var format_RenterOccupiedUnits_2 = new ol.format.GeoJSON();
var features_RenterOccupiedUnits_2 = format_RenterOccupiedUnits_2.readFeatures(json_RenterOccupiedUnits_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RenterOccupiedUnits_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RenterOccupiedUnits_2.addFeatures(features_RenterOccupiedUnits_2);
var lyr_RenterOccupiedUnits_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RenterOccupiedUnits_2, 
                style: style_RenterOccupiedUnits_2,
                interactive: true,
    title: 'Renter Occupied Units<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_0.png" /> 0 - 255<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_1.png" /> 255 - 419<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_2.png" /> 419 - 598<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_3.png" /> 598 - 765<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_4.png" /> 765 - 949<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_5.png" /> 949 - 1153<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_6.png" /> 1153 - 1398<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_7.png" /> 1398 - 1651<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_8.png" /> 1651 - 2062<br />\
    <img src="styles/legend/RenterOccupiedUnits_2_9.png" /> 2062 - 2576<br />'
        });
var format_ElementarySchoolDistricts_3 = new ol.format.GeoJSON();
var features_ElementarySchoolDistricts_3 = format_ElementarySchoolDistricts_3.readFeatures(json_ElementarySchoolDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElementarySchoolDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElementarySchoolDistricts_3.addFeatures(features_ElementarySchoolDistricts_3);
var lyr_ElementarySchoolDistricts_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ElementarySchoolDistricts_3, 
                style: style_ElementarySchoolDistricts_3,
                interactive: true,
                title: '<img src="styles/legend/ElementarySchoolDistricts_3.png" /> Elementary School Districts'
            });
var format_Schools_4 = new ol.format.GeoJSON();
var features_Schools_4 = format_Schools_4.readFeatures(json_Schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_4.addFeatures(features_Schools_4);
var lyr_Schools_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Schools_4, 
                style: style_Schools_4,
                interactive: true,
                title: '<img src="styles/legend/Schools_4.png" /> Schools'
            });
var format_ClubhouseLocations_5 = new ol.format.GeoJSON();
var features_ClubhouseLocations_5 = format_ClubhouseLocations_5.readFeatures(json_ClubhouseLocations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClubhouseLocations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClubhouseLocations_5.addFeatures(features_ClubhouseLocations_5);
var lyr_ClubhouseLocations_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ClubhouseLocations_5, 
                style: style_ClubhouseLocations_5,
                interactive: true,
                title: '<img src="styles/legend/ClubhouseLocations_5.png" /> Clubhouse Locations'
            });

lyr_pnvkarte_0.setVisible(true);lyr_PercentFirstShotVaccination_1.setVisible(true);lyr_RenterOccupiedUnits_2.setVisible(true);lyr_ElementarySchoolDistricts_3.setVisible(true);lyr_Schools_4.setVisible(true);lyr_ClubhouseLocations_5.setVisible(true);
var layersList = [lyr_pnvkarte_0,lyr_PercentFirstShotVaccination_1,lyr_RenterOccupiedUnits_2,lyr_ElementarySchoolDistricts_3,lyr_Schools_4,lyr_ClubhouseLocations_5];
lyr_PercentFirstShotVaccination_1.set('fieldAliases', {'ID': 'ID', 'ZIPCODE': 'Zip Code', 'ZIP_CITY': 'City', 'vaccinations_% First Shot': 'Percent First Shot', 'vaccinations_% Fully Vaccinated': 'Percent Fully Vaccinated', 'vaccinations_% First Shot Over 12': 'vaccinations_% First Shot Over 12', 'vaccinations_% Fully Vaccinated Over 12': 'vaccinations_% Fully Vaccinated Over 12', 'vaccinations_field_6': 'vaccinations_field_6', 'vaccinations_field_7': 'vaccinations_field_7', 'vaccinations_Percent_of_Students_Eligible_for_Free_and_Reduced_Price_Lunch_in_San_Mateo_County_Schools__K-12_': 'vaccinations_Percent_of_Students_Eligible_for_Free_and_Reduced_Price_Lunch_in_San_Mateo_County_Schools__K-12_', 'vaccinations_field_9': 'vaccinations_field_9', 'vaccinations_field_10': 'vaccinations_field_10', 'vaccinations_field_11': 'vaccinations_field_11', 'vaccinations_field_12': 'vaccinations_field_12', 'vaccinations_field_13': 'vaccinations_field_13', 'vaccinations_field_14': 'vaccinations_field_14', 'vaccinations_field_15': 'vaccinations_field_15', });
lyr_RenterOccupiedUnits_2.set('fieldAliases', {'age_10_14': 'age_10_14', 'age_15_19': 'age_15_19', 'age_20_24': 'age_20_24', 'age_25_34': 'age_25_34', 'age_35_44': 'age_35_44', 'age_45_54': 'age_45_54', 'age_55_64': 'age_55_64', 'age_5_9': 'age_5_9', 'age_65_74': 'age_65_74', 'age_75_84': 'age_75_84', 'age_85_up': 'age_85_up', 'age_under5': 'age_under5', 'ameri_es': 'ameri_es', 'asian': 'asian', 'ave_fam_sz': 'ave_fam_sz', 'ave_hh_sz': 'ave_hh_sz', 'black': 'black', 'cnty_fips': 'cnty_fips', 'ct_id': 'ct_id', 'f2': 'f2', 'families': 'families', 'females': 'females', 'fhh_child': 'fhh_child', 'fips': 'fips', 'geo': 'geo', 'geometry_a': 'geometry_a', 'geometry_l': 'geometry_l', 'hawn_pi': 'hawn_pi', 'hispanic': 'hispanic', 'households': 'households', 'hse_units': 'hse_units', 'hsehld_1_f': 'hsehld_1_f', 'hsehld_1_m': 'hsehld_1_m', 'id': 'id', 'id1': 'id1', 'id2': 'id2', 'males': 'males', 'marhh_chd': 'marhh_chd', 'marhh_no_c': 'marhh_no_c', 'med_age': 'med_age', 'med_age_f': 'med_age_f', 'med_age_m': 'med_age_m', 'mhh_child': 'mhh_child', 'mult_race': 'mult_race', 'objectid1': 'objectid1', 'other': 'other', 'owner_occ': 'owner_occ', 'pop10_sqmi': 'pop10_sqmi', 'pop12_sqmi': 'pop12_sqmi', 'pop2010': 'pop2010', 'pop2012': 'pop2012', 'renter_occ': 'Renter Occupied Units', 'shape_ar_1': 'shape_ar_1', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'shape_leng': 'shape_leng', 'sqmi': 'sqmi', 'state_fips': 'state_fips', 'stcofips': 'stcofips', 'total_trac': 'total_trac', 'tract': 'tract', 'tract1': 'tract1', 'tractce10': 'tractce10', 'vacant': 'vacant', 'white': 'white', });
lyr_ElementarySchoolDistricts_3.set('fieldAliases', {'Name': 'School District', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Schools_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ClubhouseLocations_5.set('fieldAliases', {'Name': 'Clubhouse Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PercentFirstShotVaccination_1.set('fieldImages', {'ID': 'TextEdit', 'ZIPCODE': 'TextEdit', 'ZIP_CITY': 'TextEdit', 'vaccinations_% First Shot': 'TextEdit', 'vaccinations_% Fully Vaccinated': 'TextEdit', 'vaccinations_% First Shot Over 12': 'Hidden', 'vaccinations_% Fully Vaccinated Over 12': 'Hidden', 'vaccinations_field_6': 'Hidden', 'vaccinations_field_7': 'Hidden', 'vaccinations_Percent_of_Students_Eligible_for_Free_and_Reduced_Price_Lunch_in_San_Mateo_County_Schools__K-12_': 'Hidden', 'vaccinations_field_9': 'Hidden', 'vaccinations_field_10': 'Hidden', 'vaccinations_field_11': 'Hidden', 'vaccinations_field_12': 'Hidden', 'vaccinations_field_13': 'Hidden', 'vaccinations_field_14': 'Hidden', 'vaccinations_field_15': 'Hidden', });
lyr_RenterOccupiedUnits_2.set('fieldImages', {'age_10_14': 'Hidden', 'age_15_19': 'Hidden', 'age_20_24': 'Hidden', 'age_25_34': 'Hidden', 'age_35_44': 'Hidden', 'age_45_54': 'Hidden', 'age_55_64': 'Hidden', 'age_5_9': 'Hidden', 'age_65_74': 'Hidden', 'age_75_84': 'Hidden', 'age_85_up': 'Hidden', 'age_under5': 'Hidden', 'ameri_es': 'Hidden', 'asian': 'Hidden', 'ave_fam_sz': 'Hidden', 'ave_hh_sz': 'Hidden', 'black': 'Hidden', 'cnty_fips': 'Hidden', 'ct_id': 'Hidden', 'f2': 'Hidden', 'families': 'Hidden', 'females': 'Hidden', 'fhh_child': 'Hidden', 'fips': 'Hidden', 'geo': 'Hidden', 'geometry_a': 'Hidden', 'geometry_l': 'Hidden', 'hawn_pi': 'Hidden', 'hispanic': 'Hidden', 'households': 'Hidden', 'hse_units': 'Hidden', 'hsehld_1_f': 'Hidden', 'hsehld_1_m': 'Hidden', 'id': 'Hidden', 'id1': 'Hidden', 'id2': 'Hidden', 'males': 'Hidden', 'marhh_chd': 'Hidden', 'marhh_no_c': 'Hidden', 'med_age': 'Hidden', 'med_age_f': 'Hidden', 'med_age_m': 'Hidden', 'mhh_child': 'Hidden', 'mult_race': 'Hidden', 'objectid1': 'Hidden', 'other': 'Hidden', 'owner_occ': 'Hidden', 'pop10_sqmi': 'Hidden', 'pop12_sqmi': 'Hidden', 'pop2010': 'Hidden', 'pop2012': 'Hidden', 'renter_occ': 'Range', 'shape_ar_1': 'Hidden', 'shape_area': 'Hidden', 'shape_len': 'Hidden', 'shape_leng': 'Hidden', 'sqmi': 'Hidden', 'state_fips': 'Hidden', 'stcofips': 'Hidden', 'total_trac': 'Hidden', 'tract': 'Hidden', 'tract1': 'Hidden', 'tractce10': 'Hidden', 'vacant': 'Hidden', 'white': 'Hidden', });
lyr_ElementarySchoolDistricts_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Schools_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_ClubhouseLocations_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_PercentFirstShotVaccination_1.set('fieldLabels', {'ID': 'no label', 'ZIPCODE': 'no label', 'ZIP_CITY': 'no label', 'vaccinations_% First Shot': 'inline label', 'vaccinations_% Fully Vaccinated': 'no label', });
lyr_RenterOccupiedUnits_2.set('fieldLabels', {'renter_occ': 'header label', });
lyr_ElementarySchoolDistricts_3.set('fieldLabels', {'Name': 'header label', });
lyr_Schools_4.set('fieldLabels', {'Name': 'header label', });
lyr_ClubhouseLocations_5.set('fieldLabels', {'Name': 'inline label', });
lyr_ClubhouseLocations_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});