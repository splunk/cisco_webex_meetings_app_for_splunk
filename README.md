# Cisco WebEx Meetings for Splunk

The **Cisco WebEx Meetings for Splunk** app provides the interface for searches, reports, and dashboards for your Cisco WebEx Meetings video conferencing environment. It works in concert with [Splunk-TA for WebEx Meetings](https://github.com/splunk/ta-webex-meetings-add-on-for-splunk), which connects to your Cisco WebEx Meetings data, to enable you to monitor, manage, and troubleshoot your WebEx Meetings service from a single application.

## Release Notes

### Version 1.0.0 - April 28, 2020
- Official Release

## Troubleshooting

### Change the macro named `webex_index` to pin accurate index, by default App uses **webex** as index name.

 - Steps:
     - Select Settings > Advanced Search > Search macros
     - Filter: webex_index
     - Click on macro named **webex_index** from result
     - Change the definition to appropriate index. For example, if your index name is `webex_dev`, your Definition box should be `index=webex_dev`


## License
Code licensed under [Apache 2.0](./LICENSE.md). All non-text documentation provided herein, including screenshots, logos and images, are provided for reference only and remain the property of Splunk or its licensors.
