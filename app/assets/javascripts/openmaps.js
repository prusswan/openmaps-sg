var map;

function initOL() {
  map = new OpenLayers.Map('map_element', {});
  var wms_layer_map = new OpenLayers.Layer.WMS(
    'OpenLayers WMS',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'basic'},
    {isBaseLayer: true}
  );

  var wms_layer_labels = new OpenLayers.Layer.WMS(
    'Location Labels',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'clabel,ctylabel,statelabel',
    transparent: true },
    {visibility: false, opacity: .5}
  );

  var wms_state_lines = new OpenLayers.Layer.WMS(
    'State Line Layer',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'stateboundary',
    transparent: true},
    {displayInLayerSwitcher: false,
    minScale: 13841995.078125}
  );

  var wms_water_depth = new OpenLayers.Layer.WMS(
    'Water Depth',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'depthcontour',
    transparent: true},
    {opacity: .8}
  );

  var wms_roads = new OpenLayers.Layer.WMS(
    'Roads',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'priroad,secroad,rail',
    transparent: true},
    {transistionEffect:'resize'}
  )

  map.addLayers([
    wms_layer_map,
    wms_layer_labels,
    wms_state_lines,
    wms_water_depth,
    wms_roads]);

  /* google map layer:

  var google_map_layer = new OpenLayers.Layer.Google(
    'Google Map Layer',
    {}
    // {type: google.maps.MapTypeId.HYBRID}
  );

  map.addLayer(google_map_layer);
  */

  /* image map layer

  var image_layer = new OpenLayers.Layer.Image(
    'Wallpaper',
    '/assets/wall3-1920x1200.jpg',
    new OpenLayers.Bounds(-180,-112.5,180,112.5),
    new OpenLayers.Size(1920,1200),
    {numZoomLevels:7, maxResolution:.625}
  );

  var image_layer_2 = new OpenLayers.Layer.Image(
    'Wallpaper 2',
    '/assets/wall6-1920x1200.jpg',
    new OpenLayers.Bounds(-180,-112.5,180,112.5),
    new OpenLayers.Size(1920,1200),
    {numZoomLevels:7, maxResolution:.625, isBaseLayer:false, opacity:0.2}
  );

  map.addLayers([image_layer, image_layer_2]);
  */

  map.addControl(new OpenLayers.Control.LayerSwitcher({}));
  if(!map.getCenter()){
    map.zoomToMaxExtent();
  }
}

window.onload = initOL();
