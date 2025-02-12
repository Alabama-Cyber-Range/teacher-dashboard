import Breadcrumbs from "../../../components/Breadcrumbs";
import React from 'react';
import { Heading, Flex } from "@aws-amplify/ui-react";

const CatsOutOfTheBag = () => {
  return (
    <Flex direction="column" gap="30px">
   
      <Breadcrumbs />
      <Heading>Teaching Instructions: Netcat Networking – Cross-Machine Communication</Heading>

      <Heading>Objective</Heading>
      
        <li>Help students learn how to establish a basic TCP communication channel using Netcat on a Kali Linux machine and a PowerShell listener on a Windows machine.</li>
        <li>Emphasize basic network reconnaissance (finding IP addresses and scanning) and cross-platform connectivity.</li>
      

      <Heading>Preparation</Heading>

      <Heading>Verify Lab Setup:</Heading>
      
        <li>Ensure students have access to a Kali Linux machine (attacker) and a Windows 7 machine (victim) with the provided credentials.</li>
        <li>Confirm both machines are on the same private network.</li>
        <li>Check that Netcat is installed on Kali and that PowerShell is available on the Windows machine.</li>
        <li>Make sure students have the necessary permissions to run scripts (e.g., know how to start PowerShell as Administrator).</li>
    

      <Heading>Review Background Concepts:</Heading>
      
        <li>Basic network interfaces and how to find an IP address.</li>
        <li>The purpose and basic usage of Netcat.</li>
        <li>Understanding the Windows PowerShell execution policy.</li>
      

      <Heading>Step 1: Finding the IP Addresses</Heading>

      <Heading>Instructions for Students:</Heading>
      <>
        <li>Open a terminal on Kali using <code>CTRL + ALT + T</code>.</li>
        <li>Run <code>ip a</code> to list network interfaces.</li>
        <li>Identify the IP for the interface (commonly <code>eth0</code>), which appears next to “inet” (e.g., <code>192.168.1.5/24</code>).</li>
        
         <Heading>Perform an nmap scan:</Heading>
        
            <li><code>nmap -sV network_address/24</code>
              <br />(Replace <code>network_address</code> with the appropriate range for your network.)
            </li>
          
        
      </>

      <h3>Teacher Tips & Troubleshooting:</h3>
      <>
        <li>
          <strong>Potential Confusion:</strong><br />
          Some students might see multiple interfaces (e.g., <code>wlan0</code> if they’re on Wi-Fi). Clarify that they should identify the interface that connects to the private network.
        </li>
        <li>
          <strong>nmap Command Issues:</strong>
          <ul>
            <li>Confirm that nmap is installed on Kali. If not, guide them through installing it (<code>sudo apt-get install nmap</code>).</li>
            <li>Remind students to replace <code>network_address</code> with the correct starting IP (e.g., if their IP is <code>192.168.1.5/24</code>, then use <code>192.168.1.0/24</code>).</li>
          </ul>
        </li>
        <li>Encourage students to ask if they’re unsure which interface to use.</li>
      </>

      <h2>Step 2: Setting Up the Listener on Windows</h2>

      <h3>Instructions for Students:</h3>
      <>
        <li>Log in to the Windows 7 machine using the provided credentials (<code>student/student</code>).</li>
        <li>Open Notepad and create a new file.</li>
        <li>Paste the provided PowerShell script into Notepad. The script sets up a TCP listener on port 4444.</li>
        <li>Save the file as <code>listener.ps1</code> in the Downloads folder.</li>
        <li>Open PowerShell as Administrator.</li>
        <li>
          Navigate to the Downloads folder using:
          <ul>
            <li><code>cd Downloads</code></li>
          </ul>
        </li>
        <li>
          Execute the script with:
          <ul>
            <li><code>powershell -ExecutionPolicy Bypass -File .\listener.ps1</code></li>
          </ul>
        </li>
        <li>Look for the message “Listening on port 4444...”</li>
      </>

      <h3>Teacher Tips & Troubleshooting:</h3>
      <>
        <li>
          <strong>Script Saving & Execution:</strong>
          <ul>
            <li>Verify that students are saving the file with the correct extension (<code>.ps1</code>). If a student accidentally saves it as a text file, help them change the file type.</li>
            <li>Remind students that they must run PowerShell as Administrator; if they forget, the script might not run properly.</li>
          </ul>
        </li>
        <li>
          <strong>Execution Policy Errors:</strong><br />
          If students encounter an error about execution policies, reiterate the need for the <code>-ExecutionPolicy Bypass</code> flag.
        </li>
        <li>
          <strong>Firewall/Permission Issues:</strong><br />
          Some Windows setups might have firewall rules that block incoming connections on port 4444. Instruct students to check Windows Firewall settings or ask if adjustments are needed for this lab.
        </li>
        <li>Encourage students to verify that the script is running by watching for the “Listening on port 4444...” message.</li>
      </>

      <h2>Step 3: Connecting from Kali</h2>

      <h3>Instructions for Students:</h3>
      <>
        <li>Return to the Kali Linux terminal.</li>
        <li>
          Use Netcat to connect to the Windows listener:
          <ul>
            <li><code>nc victim_IP 4444</code>
              <br />(Replace <code>victim_IP</code> with the Windows machine’s IP address found from the nmap scan.)
            </li>
          </ul>
        </li>
        <li>After connecting, type a message (e.g., “Hello, Windows!”) and press Enter.</li>
        <li>Observe the PowerShell window on Windows for the message output.</li>
      </>

      <h3>Teacher Tips & Troubleshooting:</h3>
      <>
        <li>
          <strong>Connection Issues:</strong>
          <ul>
            <li>If a student is unable to connect, confirm that they are using the correct victim IP address.</li>
            <li>Ask if the student verified that the PowerShell listener is actively running.</li>
          </ul>
        </li>
        <li>
          <strong>Netcat Availability:</strong><br />
          Although Netcat is typically pre-installed on Kali, ensure that students can run the <code>nc</code> command without errors.
        </li>
        <li>
          <strong>Clarify Command Syntax:</strong><br />
          Remind students to replace placeholder text (like <code>victim_IP</code>) with the actual IP address.
        </li>
        <li>Encourage students to experiment by sending multiple messages and observing the output.</li>
      </>

      <h2>Reflection & Discussion Points</h2>
      <ul>
        <li>Ask students what challenges they faced and how they resolved them.</li>
        <li>Discuss why having a secure communication channel is important and what risks are associated with tools like Netcat.</li>
        <li>Emphasize the ethical considerations: only use these tools with proper authorization and in controlled environments.</li>
        <li>Encourage questions on how network scanning and listening services work in different scenarios.</li>
      </ul>

      <h2>Additional Reminders for the Teacher</h2>
      <ul>
        <li><strong>Patience and Clarity:</strong> Some students may not be familiar with command-line interfaces or networking commands. Walk through the commands slowly if necessary.</li>
        <li><strong>Interactive Demonstration:</strong> Consider demonstrating each step live on a projector or screen share.</li>
        <li><strong>Follow-Up Questions:</strong> Ask students how they might modify the script (e.g., changing the listening port) and what implications that could have.</li>
        <li><strong>Encourage Documentation:</strong> Remind students to document any issues and solutions in their lab notebooks for future reference.</li>
      </ul>
      </Flex>
  );
};
export default CatsOutOfTheBag;
