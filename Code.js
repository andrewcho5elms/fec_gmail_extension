/**
 * Main trigger for Gmail contextual add-on
 */
function buildAddOn(e) {
  try {
    const message = GmailApp.getMessageById(e.messageMetadata.messageId);
    const fromAddress = message.getFrom();
    const domain = extractDomain(fromAddress);
    
    if (!domain) {
      return [buildErrorCard('Could not extract domain')];
    }

    if (isRestrictedDomain(domain)) {
      return [buildRestrictedDomainCard(domain)];
    }

    const companyData = getCompanyData(domain);
    
    if (!companyData || !companyData.profile) {
      return [buildNotFoundCard(domain)];
    }

    return [buildCompanyCard(companyData.profile, companyData.instances, domain)];
    
  } catch (error) {
    return [buildErrorCard('Error: ' + error.toString())];
  }
}

/**
 * Extract domain from email address
 */
function extractDomain(fromAddress) {
  try {
    const emailMatch = fromAddress.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
    if (emailMatch && emailMatch[1]) {
      const email = emailMatch[1];
      const domain = email.split('@')[1];
      return domain.toLowerCase().trim();
    }
    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Check if domain should be restricted
 */
function isRestrictedDomain(domain) {
  const restrictedDomains = [
    'fiveelms.com',
    'fiveelms.ai',
    'gooctane.com',
    'gmail.com',
    'googlemail.com',
    'outlook.com',
    'hotmail.com',
    'yahoo.com'
  ];
  
  return restrictedDomains.some(restricted => domain.toLowerCase().includes(restricted));
} 