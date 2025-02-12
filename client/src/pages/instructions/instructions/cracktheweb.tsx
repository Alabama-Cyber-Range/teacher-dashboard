import Breadcrumbs from "../../../components/Breadcrumbs";
import React from 'react';
import { View, Text, Heading, useTheme, Flex } from '@aws-amplify/ui-react';

const CrackTheWeb = () => {
  const { tokens } = useTheme();

  return (
    
    <Flex direction="column" gap="10px">
        <Breadcrumbs />
      <Heading level={1}>Teaching Instructions: The Web Application Proxy (Burp Suite)</Heading>

      <Heading level={2}>Objective</Heading>
      <View as="ul">
        <View as="li">Help students learn how to configure Burp Suite to intercept and manipulate HTTP requests sent to a vulnerable web application.</View>
        <View as="li">Ensure students understand the process of setting up the tool, configuring the browser proxy, and testing for vulnerabilities (e.g., SQL injection).</View>
      </View>

      <Heading level={2}>Preparation</Heading>
      <Heading level={3}>Lab Setup:</Heading>
      <View as="ul">
        <View as="li">Confirm that students have access to a Kali Linux attacker machine with Burp Suite installed.</View>
        <View as="li">Ensure a victim machine hosting a web application is available and on the same network.</View>
        <View as="li">Verify that students have basic knowledge of HTTP, proxies, and web application security testing.</View>
      </View>

      <Heading level={3}>Review Background Concepts:</Heading>
      <View as="ul">
        <View as="li">Understanding HTTP traffic and how web browsers communicate with servers.</View>
        <View as="li">The role of proxies in intercepting and analyzing traffic.</View>
        <View as="li">Common web vulnerabilities such as SQL injection and cross-site scripting (XSS).</View>
      </View>

      <Heading level={2}>Step-by-Step Teaching Guide</Heading>
      <Heading level={3}>1. Finding IP Addresses</Heading>
      <View as="ul">
        <View as="li">
          <Text fontWeight="bold">Instructions for Students:</Text>
          <View as="ul">
            <View as="li">On the attacker machine, open a terminal and run <code>ip addr</code> to determine its IP address.</View>
            <View as="li">Have students repeat the process on the victim machine.</View>
            <View as="li">Test connectivity by having students use <code>ping victim_IP</code> from the attacker machine.</View>
          </View>
        </View>
        <View as="li">
          <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
          <View as="ul">
            <View as="li">Clarify which network interface to use (e.g., <code>eth0</code> or <code>wlan0</code>).</View>
            <View as="li">Help students verify that both machines are on the same network.</View>
          </View>
        </View>
      </View>

      <Heading level={3}>2. Getting Started with Burp Suite</Heading>
      <View as="ul">
        <View as="li">
          <Text fontWeight="bold">Instructions for Students:</Text>
          <View as="ul">
            <View as="li">Launch Burp Suite on the Kali machine by typing <code>burpsuite</code> in a terminal.</View>
            <View as="li">Select <strong>Temporary Project</strong>, click <strong>Next</strong>, choose <strong>Use Burp Defaults</strong>, and then click <strong>Start Burp</strong>.</View>
            <View as="li">Navigate to the <strong>Proxy</strong> tab and ensure that the <strong>Intercept</strong> feature is turned <strong>ON</strong>.</View>
          </View>
        </View>
        <View as="li">
          <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
          <View as="ul">
            <View as="li">Demonstrate the startup process live, ensuring that students follow the correct project setup.</View>
            <View as="li">Emphasize checking that the Intercept mode is enabled before moving on.</View>
          </View>
        </View>
      </View>

      <Heading level={3}>3. Configuring the Browser to Use Burp Suite</Heading>
      <View as="ul">
        <View as="li">
          <Text fontWeight="bold">Instructions for Students:</Text>
          <View as="ul">
            <View as="li">Open the browser settings (e.g., in Firefox, go to <strong>Network Settings</strong>).</View>
            <View as="li">Set the proxy configuration to manual with these details:</View>
            <View as="li">
              <pre>HTTP Proxy: 127.0.0.1
Port: 8080</pre>
            </View>
            <View as="li">Save the settings and verify that Burp Suite is intercepting the traffic.</View>
          </View>
        </View>
        <View as="li">
          <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
          <View as="ul">
            <View as="li">Ensure students correctly input the proxy details.</View>
            <View as="li">Verify that traffic is indeed passing through Burp Suite by checking the Intercept tab.</View>
          </View>
        </View>
      </View>

      <Heading level={3}>4. Exploring the Victim Application</Heading>
      <View as="ul">
        <View as="li">
          <Text fontWeight="bold">Instructions for Students:</Text>
          <View as="ul">
            <View as="li">Open the browser and navigate to the victim machine's IP address (e.g., <code>http://victim_IP</code>).</View>
            <View as="li">Observe the intercepted request in the Burp Suite Proxy tab, noting the HTTP headers and body.</View>
          </View>
        </View>
        <View as="li">
          <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
          <View as="ul">
            <View as="li">Discuss what each part of the intercepted HTTP request means.</View>
            <View as="li">Encourage students to ask questions about the data they see.</View>
          </View>
        </View>
      </View>

      <Heading level={3}>5. Testing for Vulnerabilities</Heading>
      <View as="ul">
        <View as="li">
          <Text fontWeight="bold">Instructions for Students:</Text>
          <View as="ul">
            <View as="li">Navigate to a login or search field on the victim application.</View>
            <View as="li">Enter a test payload (for example, an SQL injection payload such as <code>' OR '1'='1' --</code>) and submit the form.</View>
            <View as="li">Examine the intercepted request in Burp Suite; then send the request to the <strong>Repeater</strong> tool by right-clicking and selecting <strong>Send to Repeater</strong>.</View>
            <View as="li">Experiment with modifying the request in Repeater and observe the server's responses.</View>
          </View>
        </View>
        <View as="li">
          <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
          <View as="ul">
            <View as="li">Explain the purpose of using the Repeater tool and how it helps in testing vulnerabilities.</View>
            <View as="li">If students are unfamiliar with modifying requests, walk them through the process step by step.</View>
            <View as="li">Encourage careful observation of how the server responds to different payloads.</View>
          </View>
        </View>
      </View>

      <Heading level={3}>Reflection & Discussion</Heading>
      <View as="ul">
        <View as="li">Ask students to share any challenges they encountered and how they resolved them.</View>
        <View as="li">Discuss why it is important to intercept and analyze HTTP traffic in web security testing.</View>
        <View as="li">Review the ethical implications of using tools like Burp Suite and stress the importance of proper authorization.</View>
      </View>

      <Heading level={2}>Additional Reminders for the Teacher</Heading>
      <View as="ul">
        <View as="li">Be prepared to assist with browser proxy configuration, as this is a common stumbling block.</View>
        <View as="li">Provide live demonstrations using a projector or screen share to illustrate each step.</View>
        <View as="li">Encourage students to document their process, including any issues and solutions, in their lab notebooks.</View>
        <View as="li">Reiterate the ethical use of security testing tools and proper authorization before use.</View>
      </View>
    </Flex>
  );
};

export default CrackTheWeb;

