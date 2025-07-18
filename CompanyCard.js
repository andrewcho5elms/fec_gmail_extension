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
  const description = companyProfile.company_description || 'N/A';
  const database_status = companyProfile.database_status || 'N/A';
  const salesforce_owner = companyProfile.salesforce_ownership || 'N/A';
  const headquarters = companyProfile.headquarters || 'N/A';
  const funding_status = companyProfile.funding_status || 'N/A';
  const total_funding = companyProfile.total_equity_funding || 'N/A';
  const year_founded = companyProfile.year_founded || 'N/A';
  const staff_size = companyProfile.employee_count || 'N/A';
  const added_to_database = companyProfile.data_added_to_database || 'N/A';
  const post_call_score = companyProfile.current_post_call_score || 'N/A';
  const average_fit_score = companyProfile.average_score || 'N/A';
  const lisa = companyProfile.lisa_score || 'N/A';
  
  // Instance Information
  const total_instances = companyProfile.instances || 'N/A';
  const instances_with_replies = companyProfile.instances_w_reply || 'N/A';
  const instances_with_calls = companyProfile.instances_w_call || 'N/A';
  const highest_opp_stage = companyProfile.highest_lifetime_opportunity_stage || 'N/A';
  
  // Truncate description to 100 characters
  const truncatedDescription = description.length > 100 
    ? description.substring(0, 100) + '...' 
    : description;

  const fundingFormat = total_funding.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  return CardService.newCardBuilder()
    //.setHeader(CardService.newCardHeader()
      // .setTitle("<font color=\"#1e3c6e\">" + companyName + "</font>")
      // .setText("<font color=\"#1e3c6e\">" + truncatedDescription + "</font>")
      // .setSubtitle(truncatedDescription))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText("<b><font color=\"#1e3c6e\">" + companyName + "</font></b>"))
      .addWidget(CardService.newTextParagraph()
        .setText(truncatedDescription)))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newDecoratedText()
        .setText("<b><font color=\"#1e3c6e\">Summary</font></b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Database Status: ' + "<b>" + database_status + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Salesforce Ownership: ' + "<b>" + salesforce_owner + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Headquarters: ' + "<b>" + headquarters + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Funding Status: ' + "<b>" + funding_status + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Total Funding: ' + "<b>" + fundingFormat + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Year Founded: ' + "<b>" + year_founded + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Staff Size: ' + "<b>" + staff_size + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Added to Database: ' + "<b>" + added_to_database + "</b>")))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText("<b><font color=\"#1e3c6e\">Sentiment</font></b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Post Call Score: ' + "<b>" + post_call_score + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Average Fit Score: ' + "<b>" + average_fit_score + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Lisa Score: ' + "<b>" + lisa + "</b>")))
    .addSection(CardService.newCardSection()
      .addWidget(CardService.newTextParagraph()
        .setText("<b><font color=\"#1e3c6e\">Interactions</font></b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Total Instances: ' + "<b>" + total_instances + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Instances with Replies: ' + "<b>" + instances_with_replies + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Instances with Calls: ' + "<b>" + instances_with_calls + "</b>"))
      .addWidget(CardService.newTextParagraph()
        .setText('Highest Opportunity Stage: ' + "<b>" + highest_opp_stage + "</b>")))
    .build();
}// function buildSalesforceCard()

