import React from 'react';


const CatsOutOfTheBag = () => {
  return (
    <div>
      <h1>Netcat Networking: Cross-Machine Communication</h1>
      <p>
        Welcome to another room in the Kali Top 10 series! In this guide, we’ll use <strong>Netcat</strong> to set up a communication channel between a Windows machine and a Kali Linux machine. Netcat is a versatile networking tool that allows you to establish TCP or UDP connections for testing and debugging purposes.
      </p>
      <p>
        By the end of this tutorial, you’ll know how to create a simple listener on the Windows machine and communicate with it from your Kali Linux machine.
      </p>
      
      <h2>Objective</h2>
      <p>
        Learn how to use <span className="highlight">Netcat</span> to establish a communication channel between two machines.
      </p>
      
      <h2>Prerequisites</h2>
      <ul>
        <li>You are working on a Kali Linux attacker machine.</li>
        <li>You have access to a Windows 7 victim machine (with permission).</li>
        <li>The victim machine and attacker machine are on the same private network with no internet access.</li>
      </ul>
      
      <h2>Step 1: Finding the IP Addresses</h2>
      <ol>
        <li>On your Kali Linux machine, open a terminal by pressing <span className="highlight">CTRL + ALT + T</span>.</li>
        <li>Run the following command to display all network interfaces and their IP addresses:</li>
        <pre className="code-block">ip a</pre>
        <li>Look for the <strong>eth0</strong> network interface. Your IP address will appear next to the word <strong>"inet"</strong>. It will be in the format <span className="highlight">***.***.***.***/24</span> (e.g., <strong>192.168.1.5/24</strong>).</li>
        <li>Next, perform a network scan to find the victim machine. Run the following command, replacing <span className="highlight">network_address</span> with your network range:</li>
        <pre className="code-block">nmap -sV network_address/24</pre>
      </ol>
      
      <h2>Step 2: Setting Up the Listener on Windows</h2>
      <ol>
        <li>Log in to the Windows machine using the credentials: <span className="highlight">student/student</span>.</li>
        <li>Open Notepad and create a new file.</li>
        <li>Copy the following script into the file:</li>
        <pre className="script-block">
          {`$listener = New-Object System.Net.Sockets.TcpListener([IPAddress]::Any, 4444)
$listener.Start()
Write-Host "Listening on port 4444..."
while ($true) {
  $client = $listener.AcceptTcpClient()
  $stream = $client.GetStream()
  $reader = New-Object System.IO.StreamReader($stream)
  $writer = New-Object System.IO.StreamWriter($stream)
  $writer.AutoFlush = $true
  # Process incoming data
  while ($client.Connected) {
    if ($stream.DataAvailable) {
      $data = $reader.ReadLine()
      if ($data) {
        Write-Host "Received: $data"
      }
    }
  }
  $reader.Close()
  $writer.Close()
  $stream.Close()
  $client.Close()
}`}</pre>
        <li>Save the file as <span className="highlight">listener.ps1</span> in the <strong>Downloads</strong> folder.</li>
        <li>Run PowerShell as Administrator.</li>
        <li>Navigate to the Downloads folder by typing:</li>
        <pre className="code-block">cd Downloads</pre>
        <li>Run the script with the following command:</li>
        <pre className="code-block">powershell -ExecutionPolicy Bypass -File .\listener.ps1</pre>
        <li>You should see a message that says <strong>"Listening on port 4444..."</strong>.</li>
      </ol>
      
      <h2>Step 3: Connecting from Kali</h2>
      <ol>
        <li>On your Kali Linux machine, open a terminal.</li>
        <li>Connect to the listener on the Windows machine by typing:</li>
        <pre className="code-block">nc victim_IP 4444</pre>
        <li>Press <strong>Enter</strong> to establish the connection.</li>
        <li>Type a message into the terminal and press <strong>Enter</strong>. For example:</li>
        <pre className="script-block">Hello, Windows! Testing communication.</pre>
        <li>Observe the PowerShell window on the Windows machine. You should see the received messages displayed as:</li>
        <pre className="script-block">Listening on port 4444... Received: Hello, Windows! Received: Testing communication.</pre>
      </ol>
      
      <h2>Reflection</h2>
      <p>Congratulations! You’ve successfully set up a simple communication channel using Netcat and PowerShell. This exercise demonstrates the importance of securing network communication and understanding basic networking tools.</p>
      <p><em>Remember to use Netcat responsibly and only with proper authorization. Keep learning and stay ethical!</em></p>
    </div>
  );
};

export default CatsOutOfTheBag;
