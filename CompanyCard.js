// CompanyCard.js - Simple UI cards for Five Elms data

/**
 * Build error card
 */
function buildErrorCard(errorMessage) {
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle('Five Elms')
      .setSubtitle('Error'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText('❌ ' + errorMessage)))
    .build();
}

/**
 * Build card for companies not found
 */
function buildNotFoundCard(domain) {
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle('Five Elms')
      .setSubtitle('Not Found'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText('Domain: ' + domain))
      .addWidget(CardService.newTextParagraph()
        .setText('Company not in database')))
    .build();
}

/**
 * Build card for restricted domains
 */
function buildRestrictedDomainCard(domain) {
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle('Five Elms')
      .setSubtitle('Restricted'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText('Domain: ' + domain))
      .addWidget(CardService.newTextParagraph()
        .setText('Information not available')))
    .build();
}

/**
 * Build simple company card
 */
function buildCompanyCard(companyProfile, domain) {
  const companyName = companyProfile.company_name || domain;
  const location = companyProfile.headquarters_metro || 'Unknown';
  const description = companyProfile.company_description || 'Unknown';
  const salesforce_organization_id = companyProfile.salesforce_organization_id;
  
  return CardService.newCardBuilder()
    .setHeader(CardService.newCardHeader()
      .setTitle(companyName)
      .setSubtitle('Company Info'))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText('<b>Location:</b> ' + location))
      .addWidget(CardService.newTextParagraph()
        .setText('<b>Description:</b> ' + description))
      .addWidget(CardService.newTextParagraph()
        .setText('<b>Salesforce Organization ID:</b> ' + salesforce_organization_id)))
    .build();
}

// function buildSalesforceCard()