# Five Elms Gmail Extension

A Google Apps Script Gmail add-on that provides fast and easy Salesforce actions.

## Features

- **Automatic Domain Extraction**: Extracts company domains from email sender addresses
- **Company Profiles**: Displays some company information
- **Salesforce Actions**: TB

## Setup

### 1. Configure API Access

The extension requires a Five Elms API token to function. Set up your token in Google Apps Script:

1. Open the project in Google Apps Script
2. Go to Project Settings (gear icon)
3. Scroll down to "Script Properties"
4. Add a new property:
   - **Property**: `FIVE_ELMS_API_TOKEN`
   - **Value**: Your Five Elms API token

### 2. Deploy the Add-on

1. In Google Apps Script, click "Deploy" > "New Deployment"
2. Choose type "Google Workspace Add-on"
3. Add description and deploy
4. Install in your Google Workspace

### 3. Enable in Gmail

1. Open Gmail
2. Open any email
3. Look for the Five Elms add-on in the right sidebar
4. The add-on will automatically analyze the sender's domain

## API Endpoints Used

- **Company Profile**: `GET /company/profile?domain={domain}`
  - Returns comprehensive company information
- **Salesforce**: `TBD`
  - TBD

## File Structure

- `Code.js` - Main add-on logic and domain extraction
- `FiveElmsAPIClient.js` - API client for Five Elms endpoints
- `CompanyCard.js` - UI components for displaying company data
- `Config.js` - Configuration management
- `appsscript.json` - Google Apps Script manifest

## Domain Handling

The extension automatically:
- Extracts domains from sender email addresses
- Filters out restricted domains (gmail.com, fiveelms.com, etc.)
- Handles various email formats ("Name &lt;email@domain.com&gt;" or "email@domain.com")
- Shows appropriate messages for companies not in the database

## Error Handling

- Graceful handling of API errors and network issues
- Clear user feedback for missing data or restricted domains
- Fallback displays when company information is unavailable

## Development

To modify or extend the add-on:

1. Make changes in Google Apps Script editor
2. Test using the "Test deployments" feature
3. Debug using `console.log()` statements visible in the Apps Script editor

## Support

For API access or technical issues, contact Five Elms support. 