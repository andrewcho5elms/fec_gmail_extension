// Config.js - Simple configuration

function getAPIConfig() {
  const properties = PropertiesService.getScriptProperties();
  
  return {
    baseUrl: 'http://3.144.202.135/',
    token: properties.getProperty('FIVE_ELMS_API_TOKEN')
  };
}
