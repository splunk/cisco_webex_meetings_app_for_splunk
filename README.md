# Cisco WebEx Meetings for Splunk

The **Cisco WebEx Meetings for Splunk** app provides the interface for searches, reports, and dashboards for your Cisco WebEx Meetings video conferencing environment. It works in concert with [Splunk-TA for WebEx Meetings](https://github.com/splunk/ta-webex-meetings-add-on-for-splunk), which connects to your Cisco WebEx Meetings data, to enable you to monitor, manage, and troubleshoot your WebEx Meetings service from a single application.

## Release Notes

### Version 1.0.0 - April 28, 2020
- Official Release
- Added Navigation & License
- Modular Dashboards for various persona

## FAQ

- Default Index name: `webex`

- Technology Add-on to retrieve Webex meetings data: [WebEx Meetings Add-on for Splunk](https://splunkbase.splunk.com/app/4991/)

- My dashboard is empty.
    - Verify whether TA is installed and configured properly to get data.
    - Check the index name! Default value is *webex* in macro named *webex_dev* .


- Change the macro named `webex_index` to pin accurate index, by default App uses **webex** as index name.
     - Select Settings > Advanced Search > Search macros
     - Filter: webex_index
     - Click on macro named **webex_index** from result
     - Change the definition to appropriate index. For example, if index name comprising webex data is `webex_dev`, your **Definition** box should be `index=webex_dev`

## Contributors

- Yuan Ling
- Philippe Tang
- Sandeep Vasani
- Joe Welsh
- Mayur Pipaliya
- Wissam Ali-Ahmad
- Team FDSE

## License
Code licensed under [Apache 2.0](./LICENSE.md). All non-text documentation provided herein, including screenshots, logos and images, are provided for reference only and remain the property of Splunk or its licensors.
