var map;

function initOL() {
  map = new OpenLayers.Map('map_element', {});
  var wms = new OpenLayers.Layer.WMS(
    'OpenLayers WMS',
    'http://vmap0.tiles.osgeo.org/wms/vmap0',
    {layers: 'basic'},
    {}
  );

  map.addLayer(wms);
  if(!map.getCenter()){
    map.zoomToMaxExtent();
  }
}

window.onload = initOL();
