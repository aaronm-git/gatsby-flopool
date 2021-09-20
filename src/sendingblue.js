// Node.js SDK: https://github.com/sendinblue/APIv3-nodejs-library
const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.SENDINGBLUE_API_KEY;

export const createContact = (contact = {}) => {
  const apiInstance = new SibApiV3Sdk.ContactsApi();
  const createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
  createContact = contact;
  apiInstance.createContact(createContact);
};
