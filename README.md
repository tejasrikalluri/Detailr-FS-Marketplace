## PODIO App

Detailr lets you access requesters' details directly in Freshservice's Ticket Details page.

### Folder structure explained

├── app
│   ├── app.js			The complete logic to display the complete information of the requester is written in this file.
│   ├── style.css		All the custom css present here.
│   ├── template.html		The whole html part is written in this file.
│   ├── user.svg		Detailr app's logo is present in this file.
│   └── utils.js		The requester's information is retrived in this file.
├── config
│   └── iparams.html		The complete logic, UI and get, post configs methods are present in this file.
├── digest.md5
├── manifest.json		Contains app meta data and configuration information.
├── README.md			This file.
└── server
    └── server.js		All the API calls are written in this file.


### Installation steps of APP

    1. To install Detailr app in Freshservice, go to Admin > Apps > Get more Apps. Locate ‘Detailr’ in the app gallery and click Install.
    2. Enter your Freshservice domain name and API key.
    3. Select the required Requester fields which you want to display in the app and click Install.
    4. The Detailr app widget will now be visible on the Ticket details page, Contact Details page, and New Ticket page.
    5. On the New Ticket page, the requester details are displayed after the requester's name is entered in the Requester field.

### Description of the APP

    1. With Detailr, admins can configure additional requester fields (default fields, custom fields, and all additional details available for the contact) which agents want to view on the Ticket Details, Contact Details, and New Ticket pages.
    2. The app eliminates the need for agents to switch between the Ticket Details and Contact Details page to view all the requester details. 
    3. Consequently, it improves agents’ productivity.

### Changes done in this version

	1. When the contact field is selected in settings page, displayed the contact field label instead of contact field ID.
