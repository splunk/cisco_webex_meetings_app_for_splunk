# Cisco Webex App for Splunk

The **Cisco Webex App for Splunk** provides the interface for searches, reports, and dashboards for your Cisco Webex environment. It works in concert with [Cisco Webex Add-on for Splunk](https://splunkbase.splunk.com/app/8365), which connects to your Cisco Webex data, to enable you to monitor, manage, and troubleshoot your Webex service from a single application.

## Release Notes

### Version 1.0.0 - April 28, 2020
- Official Release
- Added Navigation & License
- Modular Dashboards for various persona

### Version 2.0.0 - April 29, 2026
- Made it compatible with the Cisco Webex Add-on for Splunk
- Added dashboards for Webex Calling
- Added dashboards for Webex Contact Center


## FAQ

- Default Indexes name:
  - `webex_meeting`: index=wx
  - `webex_calling`: index=wxc
  - `webex_contact_center`: index=wxcc

- Technology Add-on to retrieve Webex data: [Cisco Webex Add-on for Splunk](https://splunkbase.splunk.com/app/8365)

- My dashboard is empty.
    - Verify whether the TA (*Cisco Webex Add-on for Splunk*) is installed and configured properly to get data.
    - Check the indexes name! Default values in macro are
       - `wx` for Webex Meeting
       - `wxc` for Webex Calling
       - `wxcc` for Webex Contact Center


- Change the macros named **webex_xxx** to pin accurate indexes.
     - Select **Settings** > **Advanced Search** > **Search macros**
     - Filter: `webex`
     - Click on macro named `webex_xxx` from results
     - Change the definition to appropriate indexes. For example, if index name comprising **webex meeting** data is **webex_meeting**, your **Definition** box should be  `index=webex_meeting`

## Contributors

- Khalid Ali
- Isaac Fonseca Monge
- Yuan Ling
- Philippe Tang
- Sandeep Vasani
- Joe Welsh
- Mayur Pipaliya
- Wissam Ali-Ahmad
- Team FDSE

## License
Code licensed under [Apache 2.0](./LICENSE.md). All non-text documentation provided herein, including screenshots, logos and images, are provided for reference only and remain the property of Splunk or its licensors.