# Proof of work - Cybersecurity

Sat Mar 23 2026 20:00:00 GMT+0100 (Central European Standard Time)

![Cover image of a multi-monitor setup.](./cover_images/cybersecurity.jpeg)

This post is my proof of work as I am breaking into Cybersecurity. I am learning Networking, Cybersecurity Fundamentals, Linux, Bash, and Cloud.

# 23 March 2026

### Network Security

Today I focused on network structure and segmentation. I practiced thinking like an attacker and considered how flat networks allow lateral movement, while smaller subnets (/25) slow attacks and make them easier to detect.

I reviewed device isolation strategies:

* Web Servers in a DMZ
* Workstations limited to each other
* Printers restricted from internet access

This helped me connect theory to practical security implications and attacker behavior.

### Network Types

**WAN** – connects multiple LANs over long distances.

**LAN / WLAN** – small networks, wired or wireless; wireless adds extra attack surface.

**VPN** – secure connection over untrusted networks; types include site-to-site, remote access, and SSL VPN.

### Network Topologies

I learned about different network topologies. Common types include:

- Point-to-Point
- Bus
- Star
- Ring
- Mesh
- Tree
- Hybrid
- Daisy Chain

I thought about how each topology changes how devices talk to each other and how attackers might move across the network. For example, in a bus network, a single compromised device can affect all others, while in a star network, the central switch/router is a single point of failure.

### Proxies

Later on I worked on understanding proxies, but this topic was more complex and I didn’t fully understand everything yet.

From what I understood so far, a proxy is a device or service that sits in the middle of a connection and acts as a mediator. This means it can inspect and control the traffic instead of just forwarding it like a normal gateway.

I learned about different types of proxies:

- Forward Proxy – used by clients to send requests to the internet through a middle system (e.g. in corporate networks or tools like Burp Suite)
- Reverse Proxy – sits in front of servers and filters incoming traffic (used for protection, e.g. against attacks or to hide internal services)
- Transparent vs Non-Transparent Proxy – transparent proxies intercept traffic without the client knowing, while non-transparent proxies require configuration

I also saw that proxies are important for security because they can filter traffic, block malicious requests, and be used in attacks (e.g. bypassing firewalls or hiding traffic).

This topic is still a bit confusing to me, especially the differences in how proxies are used in real environments, so I will revisit it later and try to practice it more.






