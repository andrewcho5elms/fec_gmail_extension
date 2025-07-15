/**
 * Get company profile by domain
 */
function getCompanyProfile(domain) {
  const config = getAPIConfig();
  
  if (!config.token || !domain) {
    return null;
  }
  
  try {
    const url = `${config.baseUrl}company/profile?domain=${encodeURIComponent(domain)}`;
    
    const response = UrlFetchApp.fetch(url, {
      method: 'GET',
      headers: {
        'TOKEN': config.token,
        'accept': 'application/json'
      },
      muteHttpExceptions: true
    });

    if (response.getResponseCode() === 200) {
      const data = JSON.parse(response.getContentText());
      return Array.isArray(data) && data.length > 0 ? data[0] : data;
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Get both company profile and instances data
 */
function getCompanyData(domain) {
  if (!domain) {
    return { profile: null, instances: [] };
  }
  
  const profile = getCompanyProfile(domain);
  
  return {
    profile: profile,
    instances: []
  };
}
