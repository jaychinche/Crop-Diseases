# ☁️ DOMAIN 1: Cloud Concepts (24% of Exam)

## 🎯 Task Statements:
- 1.1: Define the benefits of the AWS Cloud
- 1.2: Identify design principles of the AWS Cloud (Well-Architected Framework)
- 1.3: Understand migration strategies (CAF, Snow Family, DMS)
- 1.4: Understand cloud economics (CapEx vs OpEx, rightsizing, licensing)

---

## 🔑 KEY NOTES TO MEMORIZE

### 6 Advantages of Cloud Computing
1. **Trade CapEx for OpEx** (variable expense)
2. **Benefit from massive economies of scale** (AWS passes savings to you)
3. **Stop guessing capacity** (elasticity)
4. **Increase speed and agility** (provision in minutes)
5. **Stop spending money running data centers**
6. **Go global in minutes** (deploy worldwide)

### AWS Well-Architected Framework - 6 Pillars (memorize all!)
| Pillar | Key Idea |
|--------|----------|
| **Operational Excellence** | Monitor systems, improve processes, automate with IaC (CloudFormation) |
| **Security** | Protect data, manage access, detect events |
| **Reliability** | Recover from failure, scale to meet demand |
| **Performance Efficiency** | Use resources efficiently, go serverless, go global |
| **Cost Optimization** | Eliminate waste, use right pricing model |
| **Sustainability** | Minimize environmental impact |

### Cloud Computing Models
| Model | What You Manage | AWS Example |
|-------|----------------|-------------|
| **IaaS** | OS, apps, data | EC2 |
| **PaaS** | Only apps & data | Elastic Beanstalk |
| **SaaS** | Nothing (just use it) | Gmail, Salesforce |

### Deployment Models
- **Cloud** = 100% in AWS
- **Hybrid** = Cloud + On-premises (use VPN or Direct Connect)
- **On-Premises** = Private cloud (e.g., VMware)

### Cloud Adoption Framework (CAF) - 6 Perspectives
1. **Business** - Business outcomes
2. **People** - Skills and roles
3. **Governance** - Risk management
4. **Platform** - Architecture patterns
5. **Security** - Security controls
6. **Operations** - Day-to-day operations

### Migration Strategies (7 R's)
1. **Rehost** (Lift & Shift) - Move as-is
2. **Replatform** (Lift & Reshape) - Minor optimizations
3. **Repurchase** - Move to SaaS (e.g., migrate to Salesforce)
4. **Refactor** - Re-architect for cloud-native
5. **Retire** - Shut down unused
6. **Retain** - Keep on-premises
7. **Relocate** - Move to AWS without changes (VMware Cloud on AWS)

### Key Economics Concepts
- **CapEx** = Upfront costs (buying servers) → **BAD** in cloud world
- **OpEx** = Pay-as-you-go (AWS model) → **GOOD**
- **Economies of Scale** = AWS gets cheaper as it grows, passes savings to you
- **Rightsizing** = Choose correct instance type, avoid over-provisioning
- **TCO** = Total Cost of Ownership (compare on-prem vs cloud)
- **BYOL** = Bring Your Own License → use **Dedicated Hosts**

---

## 📝 TOP 50 QUESTIONS - Domain 1

### Q1. (PE1-Q2) Horizontal vs Vertical Scaling
Which is an example of horizontal scaling in AWS?
- A. Replacing an existing EC2 instance with a larger, more powerful one
- B. Increasing compute capacity of a single EC2 instance
- C. Adding more RAM to an EC2 instance
- D. Adding more EC2 instances of the same size to handle increased traffic

<details><summary>Answer</summary>

**D** - Horizontal scaling = adding MORE instances. Vertical scaling = making ONE instance bigger.
</details>

---

### Q2. (PE1-Q4) Reliability of AWS
Which are related to reliability of AWS? (Choose TWO)
- A. Applying principle of least privilege
- B. Automatically provisioning new resources to meet demand
- C. All services are Global Services
- D. Providing compensation for issues
- E. Ability to recover quickly from failures

<details><summary>Answer</summary>

**B, E** - Reliability = auto-provisioning + quick recovery from failures.
</details>

---

### Q3. (PE1-Q7) Highest Availability
How to ensure the highest level of availability for a web application?
- A. Deploy across multiple AZs and Edge locations
- B. Deploy across multiple AZs and subnets
- C. Deploy across multiple Regions and AZs
- D. Deploy across multiple VPCs and subnets

<details><summary>Answer</summary>

**C** - Multiple Regions + Multiple AZs = HIGHEST availability.
</details>

---

### Q4. (PE1-Q13) Elasticity
Adjusting compute capacity dynamically to reduce cost is which AWS best practice?
- A. Build security in every layer
- B. Parallelize tasks
- C. Implement elasticity
- D. Adopt monolithic architecture

<details><summary>Answer</summary>

**C** - Elasticity = automatically scale up/down based on demand.
</details>

---

### Q5. (PE1-Q14) Benefits of AWS
What are the benefits of having infrastructure hosted in AWS? (Choose TWO)
- A. Increasing speed and agility
- B. No need to worry about security
- C. Complete control over physical infrastructure
- D. Operating applications on behalf of customers
- E. Physical security and most data/network security taken care of

<details><summary>Answer</summary>

**A, E** - AWS provides speed/agility + handles physical security. You still need to worry about security (shared responsibility).
</details>

---

### Q6. (PE1-Q15) Decoupling
What is the advantage of "decoupling" applications?
- A. Treating application as single cohesive unit
- B. Reduces inter-dependencies so failures don't impact other components
- C. Allows updates of monolithic application quickly
- D. Allows tracking API calls

<details><summary>Answer</summary>

**B** - Decoupling = loose coupling = components work independently. Use SQS for decoupling.
</details>

---

### Q7. (PE1-Q19) Elasticity Principle
How does elasticity improve architecture design?
- A. By auto-scaling on-premises resources
- B. By auto-scaling using ELB
- C. By reducing interdependencies
- D. By automatically provisioning AWS resources based on demand changes

<details><summary>Answer</summary>

**D** - Elasticity = automatic provisioning/deprovisioning based on demand.
</details>

---

### Q8. (PE1-Q21) CloudFront and Edge Locations
What does CloudFront use to distribute content globally with low latency?
- A. AWS Global Accelerator
- B. AWS Regions
- C. AWS Edge Locations
- D. AWS Availability Zones

<details><summary>Answer</summary>

**C** - CloudFront uses Edge Locations to cache and deliver content.
</details>

---

### Q9. (PE1-Q23) Cloud Computing Models
Which does NOT belong to cloud computing models?
- A. PaaS
- B. IaaS
- C. SaaS
- D. NaaS

<details><summary>Answer</summary>

**D** - NaaS (Networking as a Service) is NOT a standard cloud computing model. The 3 models are IaaS, PaaS, SaaS.
</details>

---

### Q10. (PE2-Q11) Best Practice - Automation
Which is a best practice when designing solutions on AWS?
- A. Invest heavily in architecting (hard to change later)
- B. Use reservations for testing production
- C. Automate wherever possible
- D. Provision large compute capacity for spikes

<details><summary>Answer</summary>

**C** - Automate wherever possible = key AWS design principle.
</details>

---

### Q11. (PE2-Q14) Design for Failure
Which help adhere to "design for failure and nothing will fail"? (Choose TWO)
- A. MFA
- B. Availability Zones
- C. Elastic Load Balancing
- D. Penetration testing
- E. Vertical Scaling

<details><summary>Answer</summary>

**B, C** - Multiple AZs + ELB = design for failure. ELB routes traffic away from unhealthy instances.
</details>

---

### Q12. (PE2-Q23) Benefits of Moving to AWS
What is one benefit of moving from on-premises to AWS?
- A. Free support for all
- B. Automatic data protection
- C. Reduced Capital Expenditure (CapEx)
- D. AWS manages customer applications

<details><summary>Answer</summary>

**C** - Moving to AWS = trade CapEx (upfront) for OpEx (pay-as-you-go).
</details>

---

### Q13. (PE2-Q24) Design Principles
Which are important design principles on AWS? (Choose TWO)
- A. Always use Global Services
- B. Always choose pay as you go
- C. Treat servers as fixed resources
- D. Automate wherever possible
- E. Remove single points of failure

<details><summary>Answer</summary>

**D, E** - Automate + remove SPOFs = key design principles.
</details>

---

### Q14. (PE2-Q33) Cloud Computing Advantages
Two advantages of Cloud Computing over traditional data centers? (Choose TWO)
- A. Reserved compute capacity
- B. Eliminating SPOFs
- C. Distributed infrastructure
- D. Virtualized compute resources
- E. Dedicated hosting

<details><summary>Answer</summary>

**B, C** - Distributed infrastructure + eliminate SPOFs.
</details>

---

### Q15. (PE2-Q35) Well-Architected - Operational Excellence
What describes the operational excellence pillar?
- A. System recovers gracefully from failure
- B. Efficient use of computing resources
- C. Monitor systems and improve processes
- D. Manage datacenter operations efficiently

<details><summary>Answer</summary>

**C** - Operational Excellence = monitor, improve supporting processes, use IaC.
</details>

---

### Q16. (PE3-Q11) EC2 = IaaS
Using Amazon EC2 falls under which cloud computing model?
- A. IaaS & SaaS
- B. IaaS
- C. SaaS
- D. PaaS

<details><summary>Answer</summary>

**B** - EC2 = Infrastructure as a Service (you manage OS and above).
</details>

---

### Q17. (PE3-Q12) Decoupling Best Practice
Which is a best practice when building applications on AWS?
- A. Strengthen physical security by least privilege
- B. Ensure app runs on trusted vendor hardware
- C. Use IAM policies for performance
- D. Decouple components so they run independently

<details><summary>Answer</summary>

**D** - Decouple = loose coupling = components independent.
</details>

---

### Q18. (PE3-Q19) Global Reach
Your application has significant global growth. What AWS characteristic helps international users?
- A. Elasticity
- B. Global reach
- C. Data durability
- D. High availability

<details><summary>Answer</summary>

**B** - Global reach = deploy in multiple regions worldwide to reduce latency.
</details>

---

### Q19. (PE3-Q21) Disaster Recovery - Multi-Region
Business critical workloads, no downtime acceptable. Best practice?
- A. Replicate across Edge Locations
- B. Deploy across multiple AZs in same Region
- C. Create point-in-time backups
- D. Deploy across multiple AWS Regions with Active-Active DR

<details><summary>Answer</summary>

**D** - Multi-Region Active-Active = highest DR protection against natural disasters.
</details>

---

### Q20. (PE3-Q34) Cloud Agility
What describes AWS Cloud's agility?
- A. Host applications in multiple regions
- B. Customizable hardware at lowest cost
- C. Provision resources in minutes
- D. Pay upfront to reduce costs

<details><summary>Answer</summary>

**C** - Agility = provision resources in minutes (speed to market).
</details>

---

### Q21. (PE3-Q47) Multiple AZs
Why does every AWS Region contain multiple AZs?
- A. Build resilient and highly available architectures
- B. Lower total cost
- C. Data replication and global reach
- D. Increases storage capacity

<details><summary>Answer</summary>

**A** - Multiple AZs = resilient + highly available.
</details>

---

### Q22. (PE4-Q15) API Benefits
What is the benefit of using an API to access AWS Services?
- A. Improves performance
- B. Reduces provisioning time
- C. Reduces developer count
- D. Allows programmatic management of resources

<details><summary>Answer</summary>

**D** - APIs allow programmatic management (automation).
</details>

---

### Q23. (PE4-Q23) AWS Region Definition
What best describes an AWS Region?
- A. Geographical location with Edge locations
- B. Virtual network for one customer
- C. Geographical location with a collection of AZs
- D. Country where AWS infrastructure exists

<details><summary>Answer</summary>

**C** - Region = geographical area with 2+ Availability Zones.
</details>

---

### Q24. (PE4-Q28) Performance Efficiency Design Principles
Which design principles relate to performance efficiency? (Choose TWO)
- A. Build multi-region architectures for global customers
- B. Apply security at all layers
- C. Implement strong IAM controls
- D. Use serverless architectures
- E. Enable audit logging

<details><summary>Answer</summary>

**A, D** - Performance Efficiency = go global + go serverless.
</details>

---

### Q25. (PE4-Q30) Why AWS over On-Premises
Why choose AWS? (Choose TWO)
- A. Free commercial software licenses
- B. Free technical support
- C. Elastic resources
- D. On-site visits for auditing
- E. Cost Savings

<details><summary>Answer</summary>

**C, E** - Elastic resources + Cost savings.
</details>

---

### Q26. (PE4-Q35) AWS CAF
What is the framework by AWS Professional Services for cloud adoption road map?
- A. AWS Secrets Manager
- B. AWS WAF
- C. AWS CAF
- D. Amazon EFS

<details><summary>Answer</summary>

**C** - AWS Cloud Adoption Framework (CAF) = road map for cloud adoption.
</details>

---

### Q27. (PE4-Q37) Operational Excellence + IaC
Which supports Operational Excellence pillar?
- A. Trusted Advisor for underutilized resources
- B. CloudTrail to record activities
- C. CloudFormation to manage infrastructure as code
- D. Deploy in multiple AZs

<details><summary>Answer</summary>

**C** - CloudFormation (IaC) supports Operational Excellence pillar.
</details>

---

### Q28. (PE4-Q38) Startups Prefer AWS
Why do startups prefer AWS? (Choose TWO)
- A. AWS allows pay later
- B. AWS builds data centers faster
- C. Reduce time-to-market, focus on business
- D. AWS removes need for OpEx
- E. Replace large CapEx with low variable costs

<details><summary>Answer</summary>

**C, E** - Reduce time-to-market + replace CapEx with variable costs.
</details>

---

### Q29. (PE5-Q1) Fault Tolerance
A site that can't be unavailable should use which design principle?
- A. Least Privilege
- B. Pilot Light
- C. Fault Tolerance
- D. Multi-threading

<details><summary>Answer</summary>

**C** - Fault Tolerance = system continues operating even when components fail.
</details>

---

### Q30. (PE5-Q17) Auto Scaling Groups
What are advantages of ASGs?
- A. Caches at edge locations
- B. Scales EC2 across multiple AZs for availability and fault tolerance
- C. Scales across regions
- D. Distributes traffic across AZs

<details><summary>Answer</summary>

**B** - ASG scales EC2 across multiple AZs = high availability + fault tolerance.
</details>

---

### Q31. (PE5-Q46) Loose Coupling
Minimizing dependencies between components is called?
- A. Elastic coupling
- B. Loosely coupling
- C. Scalable coupling
- D. Tightly coupling

<details><summary>Answer</summary>

**B** - Loose coupling = minimize dependencies between components.
</details>

---

### Q32. (PE5-Q48) AZ Low-Latency Links
AZs connected over low-latency links. What is the benefit?
- A. Private connection to data center
- B. Global high availability
- C. Automate provisioning
- D. Make synchronous replication possible

<details><summary>Answer</summary>

**D** - Low-latency links between AZs enable synchronous replication.
</details>

---

### Q33. (PE6-Q5) Advantages of AWS
What are advantages of AWS? (Choose TWO)
- A. Eliminates need to monitor servers
- B. Manages all compliance
- C. Provides custom hardware
- D. Eliminates need to guess capacity
- E. Trade CapEx for OpEx

<details><summary>Answer</summary>

**D, E** - No guessing capacity + trade CapEx for OpEx.
</details>

---

### Q34. (PE6-Q14) Hybrid Cloud
Cloud + on-premises infrastructure is called?
- A. On-premises
- B. Mixed
- C. Hybrid
- D. Cloud

<details><summary>Answer</summary>

**C** - Hybrid = cloud + on-premises connected together.
</details>

---

### Q35. (PE6-Q28) Economies of Scale
What does "economies of scale" mean?
- A. Save more when you consume more
- B. Pay more as time passes
- C. AWS continuously lowers costs as it grows
- D. Pay as you go

<details><summary>Answer</summary>

**C** - Economies of scale = AWS lowers prices as it grows bigger.
</details>

---

### Q36. (PE6-Q40) Pay-As-You-Go
What describes the Pay-As-You-Go model?
- A. Replace low upfront with large variable
- B. Replace low upfront with large fixed
- C. Replace large upfront with low fixed
- D. Replace large capital expenses with low variable payments

<details><summary>Answer</summary>

**D** - Replace large CapEx with low variable OpEx payments.
</details>

---

### Q37. (PE7-Q25) Cloud Design Principles
Key design principles for public cloud? (Choose TWO)
- A. Reserved capacity over on-demand
- B. Loose coupling over tight coupling
- C. Servers over managed services
- D. Disposable resources over fixed servers
- E. Multi-AZ over multi-region

<details><summary>Answer</summary>

**B, D** - Loose coupling + disposable resources = cloud best practices.
</details>

---

### Q38. (PE8-Q25) Loose Coupling Benefit
What is a benefit of loose coupling?
- A. Eliminates change management
- B. Allows Cross-Region Replication
- C. Reduces Privileged Access
- D. Individual components can be modified without affecting others

<details><summary>Answer</summary>

**D** - Loose coupling = change one component without breaking others.
</details>

---

### Q39. (PE8-Q27) Cloud Deployment Model
Which eliminates need for physical data centers?
- A. On-premises
- B. IaaS
- C. PaaS
- D. Cloud

<details><summary>Answer</summary>

**D** - Cloud deployment = no physical data centers needed.
</details>

---

### Q40. (PE8-Q37) Availability Zone Definition
What is an Availability Zone?
- A. Data center isolated from others in same region
- B. Collection of data centers in multiple countries
- C. Logically isolated network
- D. Distinct location within a region, insulated from failures in other AZs

<details><summary>Answer</summary>

**D** - AZ = distinct location within a region, insulated from other AZ failures.
</details>

---

### Q41. (PE8-Q41) Well-Architected - Performance Efficiency
Which pillar helps select right compute resources?
- A. Operational Excellence
- B. Security
- C. Performance Efficiency
- D. Reliability

<details><summary>Answer</summary>

**C** - Performance Efficiency = use right compute resources for workload.
</details>

---

### Q42. (PE8-Q47) Global Infrastructure
AWS Cloud's multiple Regions are an example of:
- A. Agility
- B. Global infrastructure
- C. Elasticity
- D. Pay-as-you-go

<details><summary>Answer</summary>

**B** - Multiple Regions = global infrastructure.
</details>

---

### Q43. (PE8-Q49) Design for Failure
Recommended pattern for high availability?
- A. Low-latency components
- B. Run enough EC2 for peak load
- C. Accommodate failure of any single component
- D. Use monolithic application

<details><summary>Answer</summary>

**C** - Design for failure = accommodate any single component failure.
</details>

---

### Q44. (PE8-Q50) Cost Effective for Dynamic Demand
Which AWS characteristics? (Choose TWO)
- A. High availability
- B. Shared security model
- C. Elasticity
- D. Pay-as-you-go pricing
- E. Reliability

<details><summary>Answer</summary>

**C, D** - Elasticity + pay-as-you-go = cost effective for dynamic demand.
</details>

---

### Q45. (PE9-Q15) Key Design Principle
When architecting cloud applications?
- A. Use largest instance possible
- B. Provision capacity for peak load
- C. Use Scrum development
- D. Implement elasticity

<details><summary>Answer</summary>

**D** - Implement elasticity = scale up/down as needed.
</details>

---

### Q46. (PE9-Q25) Economies of Scale Customer Benefit
How do customers benefit from Amazon's economies of scale?
- A. Periodic price reductions from operational efficiencies
- B. New instance types
- C. Ability to scale
- D. Increased reliability

<details><summary>Answer</summary>

**A** - Periodic price reductions = economies of scale benefit.
</details>

---

### Q47. (PE9-Q32) Cloud Architecture Principle
Which is a cloud architectural design principle?
- A. Scale up not out
- B. Loosely couple components
- C. Build monolithic systems
- D. Use commercial database software

<details><summary>Answer</summary>

**B** - Loosely couple components = fundamental cloud principle.
</details>

---

### Q48. (PE10-Q15) Application Design Best Practice
How should an application be designed in AWS?
- A. Use tightly coupled components
- B. Use loosely coupled components
- C. Use infrequently coupled components
- D. Use frequently coupled components

<details><summary>Answer</summary>

**B** - Loosely coupled components = AWS best practice.
</details>

---

### Q49. (PE10-Q49) Design for Failure
Distributing workloads across multiple AZs supports which principle?
- A. Implement automation
- B. Design for agility
- C. Design for failure
- D. Implement elasticity

<details><summary>Answer</summary>

**C** - Multi-AZ distribution = design for failure.
</details>

---

### Q50. (PE12-Q9) Global Reach Feature
Which feature supports low latency for international customers?
- A. Fault tolerance
- B. Global reach
- C. Pay-as-you-go
- D. High availability

<details><summary>Answer</summary>

**B** - Global reach = deploy worldwide for low latency.
</details>

---

## 📋 CHEAT SHEET - Domain 1

| Concept | Remember |
|---------|----------|
| **Horizontal Scaling** | Add MORE instances |
| **Vertical Scaling** | Make instance BIGGER |
| **Elasticity** | Auto scale up/down |
| **Agility** | Provision in minutes |
| **High Availability** | Multi-AZ deployment |
| **Fault Tolerance** | System works even when component fails |
| **Disaster Recovery** | Multi-Region deployment |
| **Loose Coupling** | Use SQS, components independent |
| **IaC** | CloudFormation |
| **Economies of Scale** | AWS lowers prices as it grows |
| **CapEx → OpEx** | Main financial benefit of cloud |
| **Region** | Geographic area with 2+ AZs |
| **AZ** | 1+ data centers, isolated from other AZs |
| **Edge Location** | Cache content (CloudFront) |
| **CAF** | 6 perspectives for cloud adoption |
| **Well-Architected** | 6 pillars: OSRPCS |


**Total: 50 Questions | Weight: 24% of Exam (~12 scored questions)**


























# 🔒 DOMAIN 2: Security and Compliance (30% of Exam)

## 🎯 Task Statements:
- 2.1: Understand the AWS shared responsibility model
- 2.2: Understand AWS Cloud security, governance, and compliance concepts
- 2.3: Identify AWS access management capabilities
- 2.4: Identify components and resources for security

---

## 🔑 KEY NOTES TO MEMORIZE

### Shared Responsibility Model - THE MOST TESTED TOPIC!

| AWS Responsibility ("Security OF the Cloud") | Customer Responsibility ("Security IN the Cloud") |
|----------------------------------------------|--------------------------------------------------|
| Physical security of data centers | Data encryption (at rest & in transit) |
| Hardware/software infrastructure | IAM user management & permissions |
| Network infrastructure | Security group configuration |
| Hypervisor patching | OS patching on EC2 |
| Managed service patching (RDS OS) | Application code & updates |
| Edge location management | Network ACL configuration |
| Firmware updates on hardware | Client-side encryption |
| Disposing of disk drives | Firewall/network config |

### Shared Controls (BOTH AWS and Customer):
- **Patch Management** - AWS patches infra, YOU patch your apps/OS
- **Configuration Management** - AWS configures infra, YOU configure your apps
- **Awareness & Training** - Both sides train their people

### How Responsibility SHIFTS by Service:
| Service | Customer Manages More ← → AWS Manages More |
|---------|---------------------------------------------|
| **EC2** (IaaS) | Customer: OS, patches, apps, firewall |
| **RDS** (Managed) | Customer: Data, access. AWS: OS, patches, backups |
| **Lambda** (Serverless) | Customer: Code & data only. AWS: Everything else |
| **S3** (Managed) | Customer: Data, access, encryption config |

### Security Services - MUST KNOW ALL!

| Service | What It Does | Key Detail |
|---------|-------------|------------|
| **IAM** | Users, Groups, Roles, Policies | Global service, free |
| **MFA** | Multi-Factor Authentication | Virtual/hardware devices, U2F keys |
| **AWS Shield** | DDoS protection | Standard (free) / Advanced (paid) |
| **AWS WAF** | Web Application Firewall | SQL injection, XSS protection |
| **Amazon GuardDuty** | Threat detection | ML-based, monitors CloudTrail/VPC Flow/DNS |
| **Amazon Inspector** | Vulnerability assessment | Scans EC2/ECR for software vulnerabilities |
| **Amazon Macie** | Sensitive data discovery | Finds PII in S3 using ML |
| **AWS KMS** | Key Management Service | Create/manage encryption keys |
| **AWS CloudHSM** | Hardware Security Module | YOU control encryption keys (dedicated hardware) |
| **AWS Certificate Manager** | SSL/TLS certificates | Free public certificates |
| **Amazon Cognito** | User sign-up/sign-in | Social identity federation (Google, Facebook) |
| **AWS Directory Service** | Active Directory in cloud | Microsoft AD compatible |
| **AWS Artifact** | Compliance reports | SOC, PCI, ISO reports + agreements (BAA, NDA) |
| **AWS Config** | Track resource changes | Compliance auditing, configuration history |
| **AWS CloudTrail** | API call logging | WHO did WHAT and WHEN |
| **Security Groups** | Instance-level firewall | **Stateful**, allow rules only |
| **Network ACLs** | Subnet-level firewall | **Stateless**, allow AND deny rules |
| **AWS Firewall Manager** | Manage WAF rules across accounts | Works with Organizations |
| **Amazon Detective** | Investigate security findings | Root cause analysis |
| **AWS Security Hub** | Central security dashboard | Aggregates findings from GuardDuty, Inspector, Macie |
| **AWS Secrets Manager** | Store/rotate secrets | Database credentials, API keys |
| **AWS RAM** | Resource Access Manager | Share resources across accounts |

### Security Groups vs Network ACLs

| Feature | Security Groups | Network ACLs |
|---------|----------------|--------------|
| Level | Instance | Subnet |
| Stateful? | **Yes** (return traffic auto-allowed) | **No** (must explicitly allow return) |
| Rules | **Allow only** | Allow AND Deny |
| Default | Denies all inbound | Allows all inbound/outbound |
| Evaluation | All rules evaluated | Rules evaluated in order |

### IAM Key Concepts
- **Users** = individual people (long-term credentials)
- **Groups** = collection of users (attach policies to groups!)
- **Roles** = temporary credentials (for EC2, Lambda, cross-account)
- **Policies** = JSON documents defining permissions
- **Principle of Least Privilege** = give MINIMUM permissions needed
- **Root Account** = full access, use MFA, DON'T use daily
- **Access Keys** = programmatic access (CLI, SDK) - NOT for console login
- **Password + Username** = console login
- **IAM Credential Report** = list all users and credential status
- **Federation** = sign in with existing corporate credentials (SSO)
- **IAM Identity Center** = AWS Single Sign-On (SSO)

### Encryption
- **At Rest** = data stored (use KMS, S3 encryption, EBS encryption)
- **In Transit** = data moving (use SSL/TLS, HTTPS)
- **Client-side** = encrypt before sending to AWS (customer responsibility)
- **Server-side** = AWS encrypts after receiving (S3 SSE)

### Compliance
- **AWS Artifact** = download compliance reports (SOC 1/2/3, PCI, ISO)
- **AWS Compliance Program** = industry-specific compliance (HIPAA, PCI DSS)
- **Penetration Testing** = allowed on YOUR resources without prior approval for most services

---

## 📝 TOP 50 QUESTIONS - Domain 2

### Q1. (PE1-Q5) Shared Responsibility Model
Which statement is true about the Shared Responsibility Model?
- A. Responsibilities vary depending on services used
- B. Security of IaaS is AWS responsibility
- C. Patching guest OS is always AWS responsibility
- D. Security of managed services is customer responsibility

<details><summary>Answer</summary>

**A** - Responsibilities SHIFT depending on the service (EC2 vs RDS vs Lambda).
</details>

---

### Q2. (PE1-Q22) Principle of Least Privilege
What does "Principle of Least Privilege" refer to?
- A. Grant users only permissions they need, nothing more
- B. All IAM users should have core permissions
- C. Trusted users should have access to any service
- D. Don't grant any permissions

<details><summary>Answer</summary>

**A** - Least Privilege = minimum permissions needed to do the job.
</details>

---

### Q3. (PE1-Q26) DDoS Protection
Which services protect from DDoS attacks? (Choose TWO)
- A. AWS Shield
- B. AWS Config
- C. Amazon Cognito
- D. AWS WAF
- E. AWS KMS

<details><summary>Answer</summary>

**A, D** - Shield = DDoS protection. WAF = web app firewall (blocks malicious requests).
</details>

---

### Q4. (PE1-Q38) Shared Controls
Select TWO shared controls between customer and AWS:
- A. Patch Management
- B. IAM Management
- C. VPC Management
- D. Configuration Management
- E. Data Center operations

<details><summary>Answer</summary>

**A, D** - Patch Management and Configuration Management are SHARED controls.
</details>

---

### Q5. (PE1-Q43) AWS Responsibility
Under shared responsibility model, which is AWS responsible for?
- A. Client-side encryption
- B. Configuring infrastructure devices
- C. Server-side encryption
- D. Filtering traffic with Security Groups

<details><summary>Answer</summary>

**B** - AWS configures infrastructure devices (routers, switches, hardware).
</details>

---

### Q6. (PE1-Q48) Customer Responsibility
Which are customer responsibility? (Choose TWO)
- A. Disk disposal
- B. Controlling physical access
- C. Patching network infrastructure
- D. Setting password complexity rules
- E. Configuring network access rules

<details><summary>Answer</summary>

**D, E** - Password policies and network access rules (security groups, NACLs) = customer.
</details>

---

### Q7. (PE2-Q7) Security Services
Which help ensure proper security settings? (Choose TWO)
- A. AWS Trusted Advisor
- B. Amazon Inspector
- C. Amazon SNS
- D. Amazon CloudWatch
- E. Concierge Support Team

<details><summary>Answer</summary>

**A, B** - Trusted Advisor (checks security settings) + Inspector (vulnerability assessment).
</details>

---

### Q8. (PE2-Q8) MFA
What provides additional security above username/password?
- A. Encrypted keys
- B. Email verification
- C. AWS KMS
- D. AWS MFA

<details><summary>Answer</summary>

**D** - Multi-Factor Authentication = something you know + something you have.
</details>

---

### Q9. (PE2-Q12) Penetration Testing
What is true about penetration testing on EC2?
- A. Not allowed
- B. Performed automatically by AWS
- C. Can be performed by customer without prior authorization
- D. Only on services managed by AWS

<details><summary>Answer</summary>

**C** - Customers CAN perform pen testing on their own instances without prior authorization.
</details>

---

### Q10. (PE2-Q16) Customer Responsibilities
Which are customer responsibility? (Choose TWO)
- A. Managing environmental events
- B. Protecting confidentiality of data in transit in S3
- C. Controlling physical access to Regions
- D. Ensuring underlying EC2 host is configured properly
- E. Patching applications installed on EC2

<details><summary>Answer</summary>

**B, E** - Data in transit protection + patching YOUR applications = customer.
</details>

---

### Q11. (PE2-Q19) Access Keys
What is equivalent to username/password for programmatic access?
- A. Instance Password
- B. Key pairs
- C. Access Keys
- D. MFA

<details><summary>Answer</summary>

**C** - Access Keys (Access Key ID + Secret Access Key) = programmatic authentication.
</details>

---

### Q12. (PE2-Q27) AWS WAF
Which protects web apps from SQL injection?
- A. Amazon Cognito
- B. AWS IAM
- C. Amazon Aurora
- D. AWS WAF

<details><summary>Answer</summary>

**D** - WAF = Web Application Firewall, protects against SQL injection, XSS, and other attacks.
</details>

---

### Q13. (PE2-Q29) AWS Sole Responsibility
What is sole responsibility of AWS? (Choose TWO)
- A. Monitoring network performance
- B. Installing software on EC2
- C. Creating hypervisors
- D. Configuring ACLs
- E. Hardware maintenance

<details><summary>Answer</summary>

**C, E** - Hypervisors + hardware = AWS responsibility.
</details>

---

### Q14. (PE2-Q34) AWS Security Responsibilities
Which are managed by AWS? (Choose TWO)
- A. Encryption of EBS volumes
- B. VPC security
- C. Access permissions
- D. Hardware patching
- E. Securing global physical infrastructure

<details><summary>Answer</summary>

**D, E** - Hardware patching + physical infrastructure = AWS.
</details>

---

### Q15. (PE2-Q44) Security Groups
Which is associated with EC2 and filters incoming traffic?
- A. AWS X-Ray
- B. Network ACL
- C. Security Groups
- D. VPC Flow logs

<details><summary>Answer</summary>

**C** - Security Groups = instance-level, stateful firewall that filters traffic.
</details>

---

### Q16. (PE3-Q10) IAM
Which controls how developers interact with AWS services?
- A. AWS IAM
- B. Amazon RDS
- C. Network ACLs
- D. Amazon EMR

<details><summary>Answer</summary>

**A** - IAM controls user access to AWS services.
</details>

---

### Q17. (PE3-Q16) Amazon Inspector
What performs automated network assessments of EC2 for vulnerabilities?
- A. Amazon Kinesis
- B. Security groups
- C. Amazon Inspector
- D. AWS NACLs

<details><summary>Answer</summary>

**C** - Amazon Inspector = automated vulnerability assessment for EC2 and containers.
</details>

---

### Q18. (PE3-Q17) Inherited Controls
Which controls do customers fully inherit from AWS? (Choose TWO)
- A. Patch management controls
- B. Database controls
- C. Awareness & Training
- D. Environmental controls
- E. Physical controls

<details><summary>Answer</summary>

**D, E** - Environmental controls (cooling, power) + Physical controls = inherited from AWS.
</details>

---

### Q19. (PE3-Q27) Protect EC2 from DDoS
What can protect EC2 from DDoS? (Choose TWO)
- A. AWS CloudHSM
- B. Security Groups
- C. AWS Batch
- D. AWS IAM
- E. Network ACLs

<details><summary>Answer</summary>

**B, E** - Security Groups + NACLs can filter traffic to help mitigate DDoS.
</details>

---

### Q20. (PE3-Q33) AWS Organizations SCPs
What restricts services/actions in individual accounts?
- A. IAM Principals
- B. Service Control Policies (SCPs)
- C. IAM policies
- D. AWS Fargate

<details><summary>Answer</summary>

**B** - SCPs in AWS Organizations restrict what services/actions accounts can use.
</details>

---

### Q21. (PE3-Q38) VPC Traffic Control
What controls network traffic in AWS? (Choose TWO)
- A. NACLs
- B. Key Pairs
- C. Access Keys
- D. IAM Policies
- E. Security Groups

<details><summary>Answer</summary>

**A, E** - NACLs (subnet-level) + Security Groups (instance-level) = network traffic control.
</details>

---

### Q22. (PE4-Q3) Lambda Shared Responsibility
With Lambda, what is AWS responsible for? (Choose TWO)
- A. Application management
- B. Capacity management
- C. Access control
- D. Operating system maintenance
- E. Data management

<details><summary>Answer</summary>

**B, D** - With Lambda (serverless), AWS manages capacity + OS. You manage code + data + access.
</details>

---

### Q23. (PE4-Q8) IAM Service
Which service manages user permissions?
- A. Security Groups
- B. Amazon ECS
- C. AWS IAM
- D. AWS Support

<details><summary>Answer</summary>

**C** - IAM = Identity and Access Management.
</details>

---

### Q24. (PE4-Q13) Access Key Best Practice
What is the AWS recommendation regarding access keys?
- A. Delete all, use passwords instead
- B. Only share with trusted people
- C. Rotate them regularly
- D. Save within application code

<details><summary>Answer</summary>

**C** - Rotate access keys regularly. NEVER store in code.
</details>

---

### Q25. (PE4-Q14) MFA
What provides additional layer on top of username/password?
- A. Key Pair
- B. Access Keys
- C. SDK
- D. MFA

<details><summary>Answer</summary>

**D** - MFA = Multi-Factor Authentication.
</details>

---

### Q26. (PE4-Q20) Managed Service Responsibility
For DynamoDB, AWS is responsible for? (Choose TWO)
- A. Protecting credentials
- B. Logging access activity
- C. Patching database software
- D. Operating system maintenance
- E. Creating access policies

<details><summary>Answer</summary>

**C, D** - For managed services, AWS patches software + maintains OS. Customer manages data + access.
</details>

---

### Q27. (PE4-Q27) Shared Controls Definition
What are AWS shared controls?
- A. Solely customer responsibility
- B. Controls inherited from AWS
- C. Apply to both infra and customer layers
- D. Customer and AWS collaborate to secure infrastructure

<details><summary>Answer</summary>

**D** - Shared controls = both sides collaborate (patch management, config management).
</details>

---

### Q28. (PE4-Q29) EC2 Customer Responsibility
Customer responsibilities when using EC2? (Choose TWO)
- A. Protecting sensitive data
- B. Patching underlying infrastructure
- C. Setup of managed databases
- D. Maintaining hardware components
- E. Installing third-party software

<details><summary>Answer</summary>

**A, E** - Protect data + install/manage software = customer on EC2.
</details>

---

### Q29. (PE4-Q31) Security Analysis Services
Which help with security analysis and compliance auditing? (Choose TWO)
- A. Amazon Inspector
- B. AWS VPN
- C. AWS Batch
- D. Amazon ECS
- E. AWS Config

<details><summary>Answer</summary>

**A, E** - Inspector (vulnerability scanning) + Config (compliance auditing).
</details>

---

### Q30. (PE5-Q3) Data Protection
What helps protect data in the cloud? (Choose TWO)
- A. Access control
- B. Physical MFA devices
- C. Data encryption
- D. Unlimited storage
- E. Load balancing

<details><summary>Answer</summary>

**A, C** - Access control + data encryption = data protection.
</details>

---

### Q31. (PE5-Q7) IAM Identity Types
What are types of IAM identities? (Choose TWO)
- A. AWS Resource Groups
- B. IAM Policies
- C. IAM Roles
- D. IAM Users
- E. AWS Organizations

<details><summary>Answer</summary>

**C, D** - IAM identities = Users, Groups, Roles. Policies are NOT identities (they're permissions).
</details>

---

### Q32. (PE5-Q10) IAM Roles for Temporary Access
Which IAM entity grants temporary access?
- A. IAM Users
- B. Key Pair
- C. IAM Roles
- D. IAM Groups

<details><summary>Answer</summary>

**C** - IAM Roles = temporary security credentials.
</details>

---

### Q33. (PE5-Q13) Account Security
How to better secure an AWS account?
- A. Restrict API calls
- B. Create one IAM per department, share
- C. Require MFA for all IAM users
- D. Set up two login passwords

<details><summary>Answer</summary>

**C** - Require MFA = best security practice.
</details>

---

### Q34. (PE5-Q19) Security IN the Cloud
Customer "security IN the cloud" examples? (Choose TWO)
- A. Building schema for app
- B. Replacing physical hardware
- C. Creating a new hypervisor
- D. Patch management of underlying infra
- E. File system encryption

<details><summary>Answer</summary>

**A, E** - App schema + encryption = customer responsibility (security IN the cloud).
</details>

---

### Q35. (PE5-Q39) EC2 Roles Best Practice
Best practice for EC2 application permissions?
- A. Generate new access keys each time
- B. Store credentials in application code
- C. Use temporary security credentials (IAM roles)
- D. Do nothing

<details><summary>Answer</summary>

**C** - Use IAM Roles for EC2 = temporary credentials, no hardcoded keys.
</details>

---

### Q36. (PE6-Q3) Amazon Cognito
Which service allows users to authenticate with social identities?
- A. Amazon GuardDuty
- B. Amazon Personalize
- C. Amazon Cognito
- D. AWS IAM

<details><summary>Answer</summary>

**C** - Cognito = user sign-up/sign-in with social identities (Amazon, Apple, Facebook, Google).
</details>

---

### Q37. (PE6-Q22) Root Account Protection
Which protects the root account?
- A. Delete root user access keys if not needed
- B. Apply MFA and use root for all work
- C. Access root from personal phone only
- D. Share password with trusted persons

<details><summary>Answer</summary>

**A** - Delete root access keys if not needed. Also: enable MFA, DON'T use root for daily tasks.
</details>

---

### Q38. (PE6-Q24) Least Privilege
Recommendation when granting permissions to IAM accounts?
- A. Separate policy for each account
- B. Apply Principle of Least Privilege
- C. Don't grant any permissions
- D. Create different passwords

<details><summary>Answer</summary>

**B** - Principle of Least Privilege = give minimum required permissions.
</details>

---

### Q39. (PE7-Q1) S3 Data Security
How to secure sensitive data in S3? (Choose TWO)
- A. Delete encryption keys after encrypting
- B. Don't worry about encryption
- C. Enable S3 Encryption
- D. Encrypt data prior to uploading
- E. Delete all IAM users with S3 access

<details><summary>Answer</summary>

**C, D** - Server-side encryption (enable S3 encryption) + client-side encryption (encrypt before upload).
</details>

---

### Q40. (PE7-Q46) Inherited Controls
What controls do customers fully inherit from AWS? (Choose TWO)
- A. Awareness and Training
- B. Communications controls
- C. Data center security controls
- D. Environmental controls
- E. Resource Configuration Management

<details><summary>Answer</summary>

**C, D** - Data center security + environmental controls = fully inherited from AWS.
</details>

---

### Q41. (PE8-Q4) VPC Security Audit
What to check for inbound/outbound traffic on EC2?
- A. NACLs and Traffic Manager
- B. NACLs and Subnets
- C. Security Groups and Internet Gateways
- D. Security Groups and NACLs

<details><summary>Answer</summary>

**D** - Security Groups + NACLs = the two layers of VPC security.
</details>

---

### Q42. (PE8-Q7) EC2 Security
Which statement is true about EC2 security?
- A. AWS manages EC2 OS
- B. Customers patch database software on EC2
- C. Server-side encryption is AWS responsibility
- D. AWS secures your application

<details><summary>Answer</summary>

**B** - On EC2, customer patches EVERYTHING (OS, database, applications).
</details>

---

### Q43. (PE8-Q17) Amazon GuardDuty
What does GuardDuty do?
- A. Notifies about abuse events
- B. Continuously monitors and detects threats like reconnaissance/compromise
- C. Identifies root cause of security issues
- D. Checks security groups for unrestricted access

<details><summary>Answer</summary>

**B** - GuardDuty = intelligent threat detection using ML (monitors CloudTrail, VPC Flow Logs, DNS).
</details>

---

### Q44. (PE8-Q32) EBS Encryption
Which service encrypts EBS volumes?
- A. AWS WAF
- B. AWS KMS
- C. Amazon Macie
- D. Amazon GuardDuty

<details><summary>Answer</summary>

**B** - AWS KMS provides the encryption keys for EBS volume encryption.
</details>

---

### Q45. (PE9-Q8) AWS Responsibility
AWS is responsible for what in shared responsibility model?
- A. Granting access
- B. Encrypting data in transit
- C. Updating EC2 host firmware
- D. Updating operating systems

<details><summary>Answer</summary>

**C** - AWS updates host firmware. Customer updates OS on EC2.
</details>

---

### Q46. (PE9-Q11) AWS Sole Responsibility
What is sole responsibility of AWS?
- A. Application security
- B. Edge location management
- C. Patch management
- D. Client-side data

<details><summary>Answer</summary>

**B** - Edge location management = AWS sole responsibility.
</details>

---

### Q47. (PE10-Q6) Customer Responsibility
What is customer's responsibility?
- A. Patching underlying infrastructure
- B. Physical security
- C. Patching Amazon EC2 instances
- D. Patching network infrastructure

<details><summary>Answer</summary>

**C** - Patching EC2 instances (OS + applications) = customer responsibility.
</details>

---

### Q48. (PE10-Q8) Amazon Macie
Which security service classifies sensitive data?
- A. Amazon GuardDuty
- B. Amazon Macie
- C. Amazon Inspector
- D. AWS Shield

<details><summary>Answer</summary>

**B** - Macie = discovers and classifies sensitive data (PII, credit cards) in S3 using ML.
</details>

---

### Q49. (PE11-Q18) Customer Data Encryption
Under shared responsibility, customer is responsible for?
- A. Wiping disk drives
- B. Updating firmware
- C. Ensuring data is encrypted at rest
- D. Ensuring network cables are cat6

<details><summary>Answer</summary>

**C** - Data encryption at rest = customer responsibility.
</details>

---

### Q50. (PE11-Q5) Physical Security
Which auditing process is AWS solely responsible for?
- A. IAM policies
- B. Physical security
- C. S3 bucket policies
- D. CloudTrail Logs

<details><summary>Answer</summary>

**B** - Physical security of data centers = 100% AWS responsibility.
</details>

---

## 📋 CHEAT SHEET - Domain 2

| Service/Concept | Remember This! |
|----------------|---------------|
| **IAM** | Users, Groups, Roles, Policies. Global. Free. |
| **MFA** | Always enable on root + privileged users |
| **Root Account** | DON'T use daily. Enable MFA. Delete access keys. |
| **Access Keys** | CLI/SDK access. Rotate regularly. Never in code. |
| **IAM Roles** | Temporary credentials. Best for EC2, Lambda. |
| **Security Groups** | STATEFUL, instance-level, ALLOW only |
| **NACLs** | STATELESS, subnet-level, ALLOW + DENY |
| **AWS Shield** | DDoS protection (Standard=free, Advanced=paid) |
| **AWS WAF** | SQL injection, XSS protection |
| **GuardDuty** | Threat detection (ML-based) |
| **Inspector** | Vulnerability scanning on EC2/containers |
| **Macie** | Finds sensitive data (PII) in S3 |
| **KMS** | Managed encryption keys |
| **CloudHSM** | Customer-controlled hardware encryption |
| **Artifact** | Compliance reports (SOC, PCI, ISO) |
| **Config** | Track resource configuration changes |
| **CloudTrail** | API call logging (WHO did WHAT) |
| **Cognito** | Social identity sign-in |
| **SCPs** | Restrict services in Organizations |
| **Penetration Testing** | Allowed without prior approval |

**Total: 50 Questions | Weight: 30% of Exam (~15 scored questions)**














































# ⚙️ DOMAIN 3: Cloud Technology and Services (34% of Exam - LARGEST!)

## 🎯 Task Statements:
- 3.1: Deploying & operating in the AWS Cloud
- 3.2: AWS global infrastructure (Regions, AZs, Edge Locations)
- 3.3: Compute services (EC2, Lambda, ECS, Fargate, Beanstalk, Lightsail)
- 3.4: Database services (RDS, Aurora, DynamoDB, Redshift, ElastiCache)
- 3.5: Network services (VPC, Route 53, CloudFront, Direct Connect, VPN)
- 3.6: Storage services (S3, EBS, EFS, Glacier, Storage Gateway)
- 3.7: AI/ML and Analytics services
- 3.8: Other in-scope services (SQS, SNS, etc.)

---

## 🔑 KEY NOTES TO MEMORIZE - ALL SERVICES

### 🖥️ COMPUTE SERVICES

| Service | What It Does | Key Detail |
|---------|-------------|------------|
| **Amazon EC2** | Virtual servers | IaaS, you manage OS. Instance types: General/Compute/Memory/Storage/Accelerated |
| **AWS Lambda** | Serverless functions | No servers, pay per request + compute time. Max 15 min runtime |
| **AWS Fargate** | Serverless containers | No EC2 management for ECS/EKS |
| **Amazon ECS** | Docker container orchestration | Can run on EC2 or Fargate |
| **Amazon EKS** | Kubernetes on AWS | Managed Kubernetes |
| **AWS Elastic Beanstalk** | PaaS deployment | Upload code, AWS handles the rest. Free (pay for resources) |
| **Amazon Lightsail** | Simple VPS | Easiest way to launch website/app (like WordPress) |
| **AWS Batch** | Batch computing jobs | Run thousands of batch jobs |
| **AWS Outposts** | AWS on-premises | AWS hardware in YOUR data center |
| **AWS Wavelength** | Ultra-low latency at 5G edge | For mobile/5G apps |
| **AWS Local Zones** | Low latency in specific cities | Extension of a Region |

### EC2 Instance Types (memorize names!)
| Type | Optimized For | Use Case |
|------|-------------|----------|
| **General Purpose** (t3, m5) | Balanced | Web servers, code repos |
| **Compute Optimized** (c5) | High CPU | Batch processing, ML, gaming |
| **Memory Optimized** (r5, x1) | High RAM | In-memory databases, real-time processing |
| **Storage Optimized** (i3, d2) | High I/O | Data warehousing, distributed file systems |
| **Accelerated Computing** (p3, g4) | GPU | ML training, video encoding |

### EC2 Pricing Models
| Model | When to Use | Discount |
|-------|-----------|----------|
| **On-Demand** | Short-term, unpredictable, can't be interrupted | 0% |
| **Reserved (1 or 3 yr)** | Steady-state workloads | Up to 72% |
| **Spot** | Flexible, fault-tolerant, can be interrupted | Up to 90% |
| **Dedicated Host** | BYOL, compliance, physical server | Expensive |
| **Dedicated Instance** | Isolated hardware (not full server) | Less than Dedicated Host |
| **Savings Plans** | Commit $/hr for 1 or 3 years | Up to 72% |

### 🗄️ DATABASE SERVICES

| Service | Type | Key Detail |
|---------|------|------------|
| **Amazon RDS** | Relational (managed) | MySQL, PostgreSQL, Oracle, SQL Server, MariaDB. Auto backups, Multi-AZ |
| **Amazon Aurora** | Relational (AWS-built) | 5x MySQL, 3x PostgreSQL performance. Auto-scales |
| **Amazon DynamoDB** | NoSQL (key-value) | Serverless, single-digit ms latency, auto-scales |
| **Amazon Redshift** | Data warehouse | Analytics, SQL queries on petabytes |
| **Amazon ElastiCache** | In-memory cache | Redis or Memcached. Reduce DB load |
| **Amazon Neptune** | Graph database | Social networks, recommendation engines |
| **Amazon DocumentDB** | Document DB | MongoDB compatible |
| **Amazon MemoryDB for Redis** | Durable in-memory | Ultra-fast with data durability |
| **Amazon DMS** | Database Migration | Migrate databases to AWS. Source stays online |
| **AWS SCT** | Schema Conversion | Convert database schemas between engines |

### 🌐 NETWORK SERVICES

| Service | What It Does | Key Detail |
|---------|-------------|------------|
| **Amazon VPC** | Virtual Private Cloud | Your own isolated network. Subnets, route tables, gateways |
| **Subnets** | Network segments | Public (internet access) / Private (no direct internet) |
| **Internet Gateway** | VPC to internet | Allows public subnet internet access |
| **NAT Gateway** | Private subnet internet | Allows private subnet to access internet (outbound only) |
| **Security Groups** | Instance firewall | Stateful, allow only |
| **NACLs** | Subnet firewall | Stateless, allow + deny |
| **Amazon Route 53** | DNS service | Domain registration + routing (latency, geolocation, failover, weighted) |
| **Amazon CloudFront** | CDN | Caches content at edge locations globally |
| **AWS Global Accelerator** | Network accelerator | Routes traffic to optimal endpoint via AWS backbone |
| **AWS Direct Connect** | Dedicated private connection | On-premises ↔ AWS (NOT over internet) |
| **AWS VPN** | Encrypted connection | On-premises ↔ AWS over internet (IPSec) |
| **VPC Peering** | Connect two VPCs | Non-transitive |
| **AWS Transit Gateway** | Hub for VPC connections | Connect multiple VPCs and on-premises |
| **AWS PrivateLink** | Private service access | Access AWS services without going over internet |

### 📦 STORAGE SERVICES

| Service | Type | Key Detail |
|---------|------|------------|
| **Amazon S3** | Object storage | Unlimited storage, 11 9's durability, static websites |
| **S3 Standard** | Frequent access | Default, most expensive storage |
| **S3 Standard-IA** | Infrequent access | Cheaper, retrieval fee |
| **S3 One Zone-IA** | Single AZ infrequent | Even cheaper, less durable |
| **S3 Intelligent-Tiering** | Unknown access patterns | Auto-moves between tiers |
| **S3 Glacier Instant Retrieval** | Archive, millisecond access | Long-term with fast retrieval |
| **S3 Glacier Flexible** | Archive, minutes-hours | Low cost archive |
| **S3 Glacier Deep Archive** | Cheapest archive | 12-48 hour retrieval |
| **Amazon EBS** | Block storage | Attached to EC2, one AZ, snapshots for backup |
| **Instance Store** | Ephemeral storage | Lost when EC2 stops/terminates |
| **Amazon EFS** | File storage (NFS) | Shared across EC2, Linux only, multi-AZ |
| **Amazon FSx** | Managed file system | Windows (FSx for Windows) or Lustre (HPC) |
| **AWS Storage Gateway** | Hybrid storage | On-premises ↔ cloud storage bridge |
| **AWS Snow Family** | Physical data transfer | Snowcone (8TB) / Snowball Edge (80TB) / Snowmobile (100PB) |
| **AWS Backup** | Centralized backup | Backup across AWS services |

### 🤖 AI/ML SERVICES

| Service | What It Does |
|---------|-------------|
| **Amazon SageMaker** | Build, train, deploy ML models |
| **Amazon Rekognition** | Image/video analysis (facial recognition) |
| **Amazon Lex** | Build chatbots (powers Alexa) |
| **Amazon Polly** | Text-to-speech |
| **Amazon Transcribe** | Speech-to-text |
| **Amazon Translate** | Language translation |
| **Amazon Comprehend** | NLP, sentiment analysis |
| **Amazon Textract** | Extract text from documents (OCR) |
| **Amazon Kendra** | Intelligent search |
| **Amazon Personalize** | Real-time personalized recommendations |

### 📊 ANALYTICS SERVICES

| Service | What It Does |
|---------|-------------|
| **Amazon Athena** | Serverless SQL queries on S3 |
| **Amazon Kinesis** | Real-time streaming data |
| **AWS Glue** | ETL (Extract, Transform, Load) - serverless |
| **Amazon QuickSight** | BI dashboards & visualizations |
| **Amazon Redshift** | Data warehouse |
| **Amazon EMR** | Big data (Hadoop, Spark) |
| **Amazon OpenSearch** | Search and analytics |
| **Amazon MSK** | Managed Apache Kafka |

### 📬 APPLICATION INTEGRATION

| Service | What It Does |
|---------|-------------|
| **Amazon SQS** | Message queue (decouple components) |
| **Amazon SNS** | Pub/sub notifications (email, SMS, push) |
| **Amazon EventBridge** | Event bus (serverless) |
| **AWS Step Functions** | Orchestrate workflows |

### 🔧 DEPLOYMENT & MANAGEMENT

| Service | What It Does |
|---------|-------------|
| **AWS CloudFormation** | Infrastructure as Code (IaC) - JSON/YAML templates |
| **AWS Elastic Beanstalk** | PaaS - upload code, AWS handles deployment |
| **AWS CodeDeploy** | Automate code deployment (EC2, Lambda, on-prem) |
| **AWS CodePipeline** | CI/CD pipeline |
| **AWS CodeBuild** | Compile and test code |
| **AWS CodeCommit** | Git source control |
| **AWS CloudWatch** | Monitoring (metrics, logs, alarms) |
| **AWS CloudTrail** | API call logging (audit) |
| **AWS Config** | Resource configuration tracking |
| **AWS Systems Manager** | Operations management (patching, parameter store) |
| **AWS X-Ray** | Trace and debug distributed applications |
| **AWS Control Tower** | Set up multi-account environment |

### 🔌 OTHER IMPORTANT SERVICES

| Service | What It Does |
|---------|-------------|
| **Amazon Connect** | Cloud contact center |
| **Amazon SES** | Email sending service |
| **Amazon WorkSpaces** | Virtual desktops (DaaS) |
| **Amazon AppStream 2.0** | Stream desktop apps to browser |
| **AWS Amplify** | Build web/mobile apps |
| **AWS AppSync** | GraphQL APIs |
| **AWS IoT Core** | IoT device connectivity |
| **AWS IoT Greengrass** | IoT edge computing |

---

## 📝 TOP 50 QUESTIONS - Domain 3

### Q1. (PE1-Q1) AWS Management Console
Web-based interface to manage AWS resources?
- A. AWS CLI
- B. AWS API
- C. AWS SDK
- D. AWS Management Console

<details><summary>Answer</summary>

**D** - Management Console = web-based GUI. CLI = command line. SDK = programming languages. API = programmatic.
</details>

---

### Q2. (PE1-Q8) AWS Snowball
What does AWS Snowball provide? (Choose TWO)
- A. Built-in computing capabilities for local processing
- B. Catalog of third-party software
- C. Hybrid cloud storage
- D. Exabyte-scale transfer
- E. Secure transfer of large amounts of data in/out of AWS

<details><summary>Answer</summary>

**A, E** - Snowball = physical device for secure data transfer + edge computing. Exabyte-scale = Snowmobile, not Snowball.
</details>

---

### Q3. (PE1-Q12) AWS DMS
Which service helps migrate Oracle database to AWS?
- A. AWS OpsWorks
- B. AWS Database Migration Service
- C. AWS Server Migration Service
- D. AWS Application Discovery Service

<details><summary>Answer</summary>

**B** - DMS = Database Migration Service. Source database stays online during migration.
</details>

---

### Q4. (PE1-Q25) Route 53
Which service provides DNS in AWS?
- A. Route 53
- B. AWS Config
- C. Amazon CloudFront
- D. Amazon EMR

<details><summary>Answer</summary>

**A** - Route 53 = DNS service. Name comes from DNS port 53.
</details>

---

### Q5. (PE1-Q27) ElastiCache
Where to store frequently accessed data for optimal response time?
- A. AWS OpsWorks
- B. AWS Storage Gateway
- C. Amazon EBS
- D. Amazon ElastiCache

<details><summary>Answer</summary>

**D** - ElastiCache = in-memory cache (Redis/Memcached) for fast data retrieval.
</details>

---

### Q6. (PE1-Q30) CloudFront
What is a global CDN service?
- A. AWS VPN
- B. AWS Direct Connect
- C. AWS Regions
- D. Amazon CloudFront

<details><summary>Answer</summary>

**D** - CloudFront = Content Delivery Network. Uses Edge Locations.
</details>

---

### Q7. (PE1-Q33) DynamoDB
Which is a NoSQL database?
- A. Amazon Aurora
- B. Amazon DynamoDB
- C. Amazon EBS
- D. Amazon Redshift

<details><summary>Answer</summary>

**B** - DynamoDB = NoSQL, key-value, serverless, single-digit ms latency.
</details>

---

### Q8. (PE1-Q41) Aurora
Which service provides automated backups for MySQL?
- A. MySQL on EC2
- B. Amazon Aurora
- C. Amazon DynamoDB
- D. Amazon Neptune

<details><summary>Answer</summary>

**B** - Aurora = managed MySQL/PostgreSQL compatible with auto backups. MySQL on EC2 = you manage backups.
</details>

---

### Q9. (PE1-Q42) CloudFormation
Which service manages infrastructure as code?
- A. AWS CloudFormation
- B. AWS Config
- C. Amazon SES
- D. Amazon EMR

<details><summary>Answer</summary>

**A** - CloudFormation = IaC using JSON/YAML templates.
</details>

---

### Q10. (PE2-Q1) AWS Organizations
Which service centrally manages billing and security across accounts?
- A. AWS Organizations
- B. AWS Trusted Advisor
- C. IAM User Groups
- D. AWS Config

<details><summary>Answer</summary>

**A** - Organizations = multi-account management, consolidated billing, SCPs.
</details>

---

### Q11. (PE2-Q2) S3
Which provides object-level storage?
- A. Amazon EBS
- B. Amazon Instance Store
- C. Amazon EFS
- D. Amazon S3

<details><summary>Answer</summary>

**D** - S3 = object storage. EBS = block. EFS = file. Instance Store = ephemeral.
</details>

---

### Q12. (PE2-Q3) Auto Scaling
What automatically adds/removes EC2 capacity?
- A. ELB
- B. AWS Budgets
- C. AWS Auto Scaling
- D. AWS Cost Explorer

<details><summary>Answer</summary>

**C** - Auto Scaling automatically adjusts EC2 instances based on demand.
</details>

---

### Q13. (PE2-Q5) DynamoDB Key-Value
Which database stores data in key-value format?
- A. Amazon DynamoDB
- B. Amazon Aurora
- C. Amazon Redshift
- D. Amazon RDS

<details><summary>Answer</summary>

**A** - DynamoDB = NoSQL key-value AND document database.
</details>

---

### Q14. (PE2-Q13) Amazon SQS
Which ensures messages aren't lost between components?
- A. Amazon SQS
- B. Amazon SES
- C. AWS Direct Connect
- D. Amazon Connect

<details><summary>Answer</summary>

**A** - SQS = Simple Queue Service. Decouples components, buffers messages.
</details>

---

### Q15. (PE2-Q15) Amazon VPC
What provides a virtual network dedicated to your account?
- A. AWS VPN
- B. AWS Subnets
- C. AWS Dedicated Hosts
- D. Amazon VPC

<details><summary>Answer</summary>

**D** - VPC = Virtual Private Cloud, your isolated network in AWS.
</details>

---

### Q16. (PE2-Q17) Compute Resources
Which are compute resources? (Choose TWO)
- A. Amazon VPC
- B. Amazon CloudWatch
- C. Amazon S3
- D. Amazon EC2
- E. AWS Lambda

<details><summary>Answer</summary>

**D, E** - EC2 (virtual servers) + Lambda (serverless compute).
</details>

---

### Q17. (PE2-Q25) Direct Connect
Which establishes dedicated private connection to AWS?
- A. AWS Direct Connect
- B. Amazon CloudFront
- C. AWS Snowball
- D. Amazon Route 53

<details><summary>Answer</summary>

**A** - Direct Connect = dedicated private network connection (NOT over internet).
</details>

---

### Q18. (PE2-Q30) EC2 - Highest Control
What gives highest level of control over infrastructure?
- A. Amazon Redshift
- B. Amazon DynamoDB
- C. Amazon EC2
- D. Amazon RDS

<details><summary>Answer</summary>

**C** - EC2 = IaaS = most control (you manage OS, apps, everything).
</details>

---

### Q19. (PE2-Q38) Amazon ECS
Which runs containerized applications on EC2 cluster?
- A. Amazon ECS
- B. AWS Data Pipeline
- C. AWS Cloud9
- D. AWS Personal Health Dashboard

<details><summary>Answer</summary>

**A** - ECS = Elastic Container Service for Docker containers.
</details>

---

### Q20. (PE2-Q43) S3 Transfer Acceleration
What uses CloudFront edge locations to upload to S3 faster?
- A. S3 Transfer Acceleration
- B. AWS WAF
- C. AWS Snowmobile
- D. AWS Snowball

<details><summary>Answer</summary>

**A** - S3 Transfer Acceleration uses CloudFront edge locations for faster uploads.
</details>

---

### Q21. (PE3-Q1) File Storage
Where can you store files in AWS? (Choose TWO)
- A. Amazon EFS
- B. Amazon SNS
- C. Amazon EBS
- D. Amazon ECS
- E. Amazon EMR

<details><summary>Answer</summary>

**A, C** - EFS (file storage, NFS) + EBS (block storage, attached to EC2).
</details>

---

### Q22. (PE3-Q5) RDS Primary Storage
What is the primary storage for RDS?
- A. Amazon Glacier
- B. Amazon EBS
- C. Amazon EFS
- D. Amazon S3

<details><summary>Answer</summary>

**B** - RDS uses EBS volumes as primary storage.
</details>

---

### Q23. (PE3-Q6) AWS X-Ray
Which service troubleshoots performance/latency issues?
- A. AWS CodePipeline
- B. AWS X-Ray
- C. Amazon Inspector
- D. AWS CloudTrail

<details><summary>Answer</summary>

**B** - X-Ray = trace and debug distributed applications, find performance bottlenecks.
</details>

---

### Q24. (PE3-Q8) RDS High Availability
What improves RDS availability? (Choose TWO)
- A. AWS Regions
- B. Multi-AZ Deployment
- C. Automatic patching
- D. Read Replicas
- E. Edge Locations

<details><summary>Answer</summary>

**B, D** - Multi-AZ = high availability (automatic failover). Read Replicas = read performance (can also be cross-region for DR).
</details>

---

### Q25. (PE3-Q15) Elastic Beanstalk
What does Elastic Beanstalk provide?
- A. PaaS to automate application deployment
- B. Compute engine for ECS
- C. Scalable file storage
- D. NoSQL database service

<details><summary>Answer</summary>

**A** - Elastic Beanstalk = PaaS. Upload code → AWS handles deployment, scaling, load balancing.
</details>

---

### Q26. (PE3-Q24) Connectivity Options for Hybrid
What builds hybrid architectures? (Choose TWO)
- A. AWS Artifact
- B. AWS Cloud9
- C. AWS Direct Connect
- D. AWS CloudTrail
- E. AWS VPN

<details><summary>Answer</summary>

**C, E** - Direct Connect (private) + VPN (encrypted over internet) = hybrid connectivity.
</details>

---

### Q27. (PE3-Q25) Application Load Balancer
Which distributes HTTP traffic across EC2 instances?
- A. AWS EC2 Auto Recovery
- B. AWS Auto Scaling
- C. AWS Network Load Balancer
- D. AWS Application Load Balancer

<details><summary>Answer</summary>

**D** - ALB = HTTP/HTTPS traffic (Layer 7). NLB = TCP/UDP (Layer 4, ultra-high performance).
</details>

---

### Q28. (PE3-Q26) Amazon Aurora
Which is MySQL-compatible and auto-scales?
- A. Amazon Neptune
- B. Amazon Aurora
- C. Amazon RDS for SQL Server
- D. Amazon RDS for PostgreSQL

<details><summary>Answer</summary>

**B** - Aurora = 5x MySQL performance, 3x PostgreSQL, auto-scales.
</details>

---

### Q29. (PE3-Q28) Amazon Redshift
What is the AWS data warehouse service?
- A. Amazon Redshift
- B. Amazon Kinesis
- C. Amazon DynamoDB
- D. Amazon RDS

<details><summary>Answer</summary>

**A** - Redshift = columnar data warehouse for analytics (SQL queries on petabytes).
</details>

---

### Q30. (PE3-Q36) VPN Connection
What uses IPSec for encrypted on-premises to AWS connectivity?
- A. Internet Gateway
- B. AWS IQ
- C. AWS Direct Connect
- D. AWS Site-to-Site VPN

<details><summary>Answer</summary>

**D** - Site-to-Site VPN = IPSec encrypted tunnel over internet.
</details>

---

### Q31. (PE3-Q41) AWS SDK
What calls AWS services from programming languages?
- A. AWS SDK
- B. AWS CLI
- C. AWS CodeDeploy
- D. AWS Management Console

<details><summary>Answer</summary>

**A** - SDK = Software Development Kit (Python boto3, Java, .NET, etc.).
</details>

---

### Q32. (PE3-Q42) Route 53 Domain Registration
Which can register domain names?
- A. Amazon Personalize
- B. Amazon Route 53
- C. AWS KMS
- D. AWS Config

<details><summary>Answer</summary>

**B** - Route 53 = DNS + domain registration.
</details>

---

### Q33. (PE4-Q6) Snowmobile
Which transfers 60 Petabytes to AWS?
- A. Snowball
- B. S3 Transfer Acceleration
- C. Snowmobile
- D. Amazon VPC

<details><summary>Answer</summary>

**C** - Snowmobile = exabyte-scale (truck). Snowball = up to 80TB per device.
</details>

---

### Q34. (PE4-Q18) Aurora Performance
Which is 5x MySQL performance?
- A. Amazon Aurora
- B. Amazon Redshift
- C. Amazon DynamoDB
- D. Amazon Neptune

<details><summary>Answer</summary>

**A** - Aurora = 5x MySQL, 3x PostgreSQL performance.
</details>

---

### Q35. (PE4-Q33) AWS Lambda
What executes code only when triggered by events?
- A. AWS Lambda
- B. Amazon CloudWatch
- C. AWS Transit Gateway
- D. Amazon EC2

<details><summary>Answer</summary>

**A** - Lambda = event-driven serverless compute. Pay only when code runs.
</details>

---

### Q36. (PE5-Q5) AWS RDS Read Replicas
What offloads database read activity?
- A. Database Snapshots
- B. Multi-AZ Deployments
- C. Automated Backups
- D. Read Replicas

<details><summary>Answer</summary>

**D** - Read Replicas = offload READ traffic. Multi-AZ = failover (high availability).
</details>

---

### Q37. (PE5-Q11) Application Load Balancer
What distributes traffic across parallel EC2 instances?
- A. AWS Global Accelerator
- B. AWS ALB
- C. Amazon CloudFront
- D. Transit VPC

<details><summary>Answer</summary>

**B** - ALB distributes HTTP/HTTPS traffic across EC2 instances.
</details>

---

### Q38. (PE5-Q21) Elastic Beanstalk Quick Deploy
Which deploys existing .NET application quickly?
- A. Amazon SNS
- B. AWS Elastic Beanstalk
- C. AWS Systems Manager
- D. AWS Trusted Advisor

<details><summary>Answer</summary>

**B** - Elastic Beanstalk = fastest way to deploy web apps. Supports .NET, Java, PHP, Python, etc.
</details>

---

### Q39. (PE5-Q23) Storage Gateway
What extends on-premises storage to AWS?
- A. AWS Data Pipeline
- B. AWS Storage Gateway
- C. Amazon Aurora
- D. Amazon EFS

<details><summary>Answer</summary>

**B** - Storage Gateway = hybrid storage bridge between on-premises and AWS cloud.
</details>

---

### Q40. (PE5-Q47) Amazon EFS
Which is NFS file system mountable from multiple EC2?
- A. Amazon EFS
- B. Amazon S3
- C. Amazon EBS
- D. AWS Storage Gateway

<details><summary>Answer</summary>

**A** - EFS = Elastic File System, NFS, shared across multiple EC2 instances, Linux only.
</details>

---

### Q41. (PE6-Q8) Amazon Rekognition
Which provides facial recognition?
- A. Amazon Comprehend
- B. AWS IAM
- C. Amazon Polly
- D. Amazon Rekognition

<details><summary>Answer</summary>

**D** - Rekognition = image/video analysis, facial recognition, object detection.
</details>

---

### Q42. (PE6-Q43) Direct Connect for Daily Transfers
What provides consistent connection for daily large data transfers?
- A. AWS Direct Connect
- B. Amazon Comprehend
- C. AWS Snowmobile
- D. AWS VPN

<details><summary>Answer</summary>

**A** - Direct Connect = dedicated, consistent, high-bandwidth private connection.
</details>

---

### Q43. (PE6-Q46) Global Accelerator
What routes traffic to best-performing endpoint globally?
- A. AWS Global Accelerator
- B. AWS Data Pipeline
- C. AWS DAX Accelerator
- D. AWS Transfer Acceleration

<details><summary>Answer</summary>

**A** - Global Accelerator = uses AWS backbone network to route to optimal endpoint.
</details>

---

### Q44. (PE7-Q2) CodeBuild
What helps developers compile and test code?
- A. AWS CodeDeploy
- B. AWS CodeCommit
- C. CloudEndure
- D. AWS CodeBuild

<details><summary>Answer</summary>

**D** - CodeBuild = compile, test, produce deployment packages. CodeCommit = source control. CodeDeploy = deploy. CodePipeline = CI/CD orchestration.
</details>

---

### Q45. (PE7-Q20) Lightsail for WordPress
Easiest way to launch WordPress on AWS?
- A. Run on Lightsail
- B. Install on EC2
- C. Use S3 web hosting
- D. Use AWS CDK

<details><summary>Answer</summary>

**A** - Lightsail = simplest, pre-configured WordPress with fixed pricing.
</details>

---

### Q46. (PE8-Q2) ECS Launch Types
Which ECS launch type gives full visibility over server cluster?
- A. EC2 launch type
- B. Fargate launch type
- C. Lightsail launch type
- D. Lambda launch type

<details><summary>Answer</summary>

**A** - EC2 launch type = you manage EC2 instances. Fargate = serverless (AWS manages infrastructure).
</details>

---

### Q47. (PE9-Q2) Amazon RDS Benefit
What is one advantage of RDS?
- A. Simplifies relational database administration tasks
- B. 99.99999999999% durability
- C. Auto-scales databases for loads
- D. Dynamically adjusts CPU and RAM

<details><summary>Answer</summary>

**A** - RDS simplifies admin: automated backups, patching, Multi-AZ failover.
</details>

---

### Q48. (PE10-Q26) Amazon Athena
What queries data directly from S3 using SQL?
- A. AWS Glue
- B. AWS Data Pipeline
- C. Amazon CloudSearch
- D. Amazon Athena

<details><summary>Answer</summary>

**D** - Athena = serverless SQL queries directly on S3 data.
</details>

---

### Q49. (PE6-Q34) CodeDeploy
Which deploys to both AWS and on-premises servers?
- A. Amazon Kinesis
- B. Amazon QuickSight
- C. AWS CodeDeploy
- D. Amazon Athena

<details><summary>Answer</summary>

**C** - CodeDeploy = automate deployment to EC2, Lambda, AND on-premises servers.
</details>

---

### Q50. (PE3-Q45) Transit Gateway
What simplifies connection management among hundreds of VPCs?
- A. VPC Peering
- B. AWS Transit Gateway
- C. Amazon Connect
- D. Security Groups

<details><summary>Answer</summary>

**B** - Transit Gateway = hub-and-spoke model to connect multiple VPCs + on-premises.
</details>

---

## 📋 CHEAT SHEET - Domain 3

### Quick Service Matching (most tested!)
| Need This → | Use This Service |
|-------------|-----------------|
| Virtual servers | **EC2** |
| Serverless compute | **Lambda** |
| Serverless containers | **Fargate** |
| Deploy web app quickly | **Elastic Beanstalk** |
| Simple website (WordPress) | **Lightsail** |
| Object storage | **S3** |
| Block storage for EC2 | **EBS** |
| Shared file storage (Linux) | **EFS** |
| Archive storage | **S3 Glacier** |
| Hybrid storage | **Storage Gateway** |
| Physical data transfer | **Snow Family** |
| Relational DB (managed) | **RDS** |
| High-performance relational | **Aurora** |
| NoSQL key-value | **DynamoDB** |
| Data warehouse | **Redshift** |
| In-memory cache | **ElastiCache** |
| DNS | **Route 53** |
| CDN | **CloudFront** |
| Private connection to AWS | **Direct Connect** |
| Encrypted tunnel to AWS | **VPN** |
| Message queue (decouple) | **SQS** |
| Pub/sub notifications | **SNS** |
| Infrastructure as Code | **CloudFormation** |
| Monitoring & alarms | **CloudWatch** |
| API call auditing | **CloudTrail** |
| Resource config tracking | **Config** |
| DB migration | **DMS** |
| Facial recognition | **Rekognition** |
| Chatbot | **Lex** |
| Text-to-speech | **Polly** |
| SQL on S3 | **Athena** |

**Total: 50 Questions | Weight: 34% of Exam (~17 scored questions)**












































# 💰 DOMAIN 4: Billing, Pricing, and Support (12% of Exam)

## 🎯 Task Statements:
- 4.1: Compare AWS pricing models
- 4.2: Understand resources for billing, budget, and cost management
- 4.3: Identify AWS technical resources and AWS Support options

---

## 🔑 KEY NOTES TO MEMORIZE

### EC2 Pricing Models (MOST TESTED in this domain!)

| Model | Best For | Key Detail |
|-------|---------|------------|
| **On-Demand** | Short-term, unpredictable, no commitment | Pay per second (Linux) or per hour (Windows). No upfront. |
| **Reserved (1yr/3yr)** | Steady-state, predictable workloads | Up to 72% savings. Standard or Convertible. All/Partial/No Upfront. |
| **Spot** | Flexible, fault-tolerant, can be interrupted | Up to 90% savings. AWS can reclaim with 2-min notice. |
| **Savings Plans** | Commit $/hr for 1 or 3 years | Flexible across instance types. Up to 72% savings. |
| **Dedicated Hosts** | BYOL, compliance, physical server control | Most expensive. Physical server dedicated to you. |
| **Dedicated Instances** | Hardware isolation without full server | Less expensive than Dedicated Hosts. |
| **Capacity Reservations** | Guarantee capacity in an AZ | Pay On-Demand rate whether you use it or not. |

### Reserved Instance Types
- **Standard RI** = biggest discount, can't change instance family
- **Convertible RI** = smaller discount, CAN change instance family
- **Payment**: All Upfront (biggest discount) > Partial Upfront > No Upfront (smallest discount)
- **3-year > 1-year** discount
- **RIs can be shared** across accounts in AWS Organizations (consolidated billing)

### Billing Important: Linux EC2 = per-second billing (min 1 minute). Other OS = per-hour.

### Data Transfer Pricing
- **Data IN to AWS** = FREE (almost always)
- **Data OUT from AWS** = CHARGED
- **Data between AZs** = CHARGED (small fee)
- **Data within same AZ** = FREE (using private IP)

### S3 Storage Class Pricing (cheapest → most expensive)
1. S3 Glacier Deep Archive (cheapest)
2. S3 Glacier Flexible Retrieval
3. S3 Glacier Instant Retrieval
4. S3 One Zone-IA
5. S3 Standard-IA
6. S3 Intelligent-Tiering
7. S3 Standard (most expensive)

### Cost Management Tools

| Tool | What It Does | Key Detail |
|------|-------------|------------|
| **AWS Cost Explorer** | Visualize & forecast costs | Charts, graphs, 12-month forecast |
| **AWS Budgets** | Set budget alerts | Alert via email/SNS when threshold exceeded |
| **AWS Cost & Usage Report** | Most granular billing data | CSV report, most detailed |
| **AWS Pricing Calculator** | Estimate costs BEFORE using | Plan new workloads |
| **AWS Billing Dashboard** | Overview of current charges | Monthly bill summary |
| **AWS Billing Conductor** | Customize billing for showback/chargeback | Group accounts, set pricing rules |
| **Cost Allocation Tags** | Categorize spending by project/dept | User-defined or AWS-generated tags |
| **AWS Organizations** | Consolidated billing | One bill, volume discounts, share RIs |
| **AWS TCO Calculator** | Compare on-prem vs cloud costs | (Legacy tool, replaced by Pricing Calculator) |
| **AWS Compute Optimizer** | Right-size recommendations | Analyzes CloudWatch metrics for EC2, EBS, Lambda |

### AWS Support Plans

| Feature | Basic | Developer | Business | Enterprise |
|---------|-------|-----------|----------|------------|
| **Price** | Free | $29/mo+ | $100/mo+ | $15,000/mo+ |
| **Trusted Advisor** | 7 Core | 7 Core | **ALL checks** | **ALL checks** |
| **Support** | Forums only | Email (business hrs) | 24/7 Phone/Email/Chat | 24/7 Phone/Email/Chat |
| **Response (General)** | N/A | 24 hrs | 24 hrs | 24 hrs |
| **Response (System Impaired)** | N/A | 12 hrs | 12 hrs | 12 hrs |
| **Response (Production Down)** | N/A | N/A | **< 1 hour** | **< 1 hour** |
| **Response (Business Critical)** | N/A | N/A | N/A | **< 15 min** |
| **TAM** | ❌ | ❌ | ❌ | ✅ |
| **Concierge** | ❌ | ❌ | ❌ | ✅ |
| **IEM** | ❌ | ❌ | Extra fee | ✅ (included) |
| **Support API** | ❌ | ❌ | ✅ | ✅ |
| **Architecture** | ❌ | General | Contextual | Consultative review |
| **Cases/Contacts** | ❌ | 1 contact | Unlimited | Unlimited |

### Trusted Advisor - 5 Categories
1. **C**ost Optimization
2. **P**erformance
3. **S**ecurity
4. **F**ault Tolerance
5. **S**ervice Limits

**Basic/Developer** = 7 core checks only
**Business/Enterprise** = ALL checks

### AWS Support Resources
| Resource | What It Is |
|----------|-----------|
| **AWS re:Post** | Community Q&A forum (replaced old forums) |
| **AWS Knowledge Center** | FAQ articles |
| **AWS Whitepapers** | Best practices documents |
| **AWS Documentation** | Technical docs for all services |
| **AWS Prescriptive Guidance** | Migration patterns and guides |
| **AWS Professional Services** | Paid consulting for cloud adoption |
| **AWS Solutions Architects** | Free guidance on architecture |
| **APN Consulting Partners** | Third-party firms for design/build |
| **APN Technology Partners** | Third-party software on AWS |
| **AWS Marketplace** | Buy/sell third-party software |
| **AWS IQ** | Connect with AWS-certified experts |
| **AWS Managed Services (AMS)** | AWS operates infrastructure for you |
| **AWS Activate** | Credits/support for startups |

### Key Enterprise Support Features
- **TAM** = Technical Account Manager (primary point of contact)
- **Concierge** = Billing & account inquiries
- **IEM** = Infrastructure Event Management (guidance for planned events)

---

## 📝 TOP 50 QUESTIONS - Domain 4

### Q1. (PE1-Q6) Reserved Instance Benefits
You have consolidated billing. One account purchased 3-year RIs. What is true?
- A. RI discounts only shared with master account
- B. All accounts can receive hourly cost benefit of RIs
- C. Purchased instances have better performance
- D. No cost benefits from consolidated billing

<details><summary>Answer</summary>

**B** - RI benefits are shared across ALL accounts in an Organization.
</details>

---

### Q2. (PE1-Q16) Cost & Usage Report
Which helps view EC2 billing activity for past month?
- A. AWS Budgets
- B. AWS Pricing Calculator
- C. AWS Systems Manager
- D. AWS Cost & Usage Reports

<details><summary>Answer</summary>

**D** - Cost & Usage Report = most granular billing data.
</details>

---

### Q3. (PE1-Q17) Consolidated Billing Benefits
What do you gain from consolidated billing for 5 accounts?
- A. Costs reduced to half
- B. Just for organizational purposes
- C. Each account gets volume discounts
- D. Each account gets 5x free-tier

<details><summary>Answer</summary>

**C** - Consolidated billing = combined usage = volume discounts for all accounts.
</details>

---

### Q4. (PE1-Q20) Budget Alerts
How to get notified when bill exceeds $2000? (Choose TWO)
- A. CloudWatch billing alarm with SNS notification
- B. Configure SES for daily billing alerts
- C. Configure AWS Budgets Service
- D. Configure CloudTrail to delete resources
- E. Configure Amazon Connect

<details><summary>Answer</summary>

**A, C** - CloudWatch Billing Alarm + AWS Budgets = two ways to get cost alerts.
</details>

---

### Q5. (PE1-Q28) On-Demand Instances
Run a questionnaire for one day without interruption. Which option?
- A. Reserved
- B. Spot
- C. Dedicated
- D. On-Demand

<details><summary>Answer</summary>

**D** - On-Demand = short-term, no interruption, no commitment.
</details>

---

### Q6. (PE1-Q29) Spot Instances
Creating thumbnails of millions of images, uptime not critical?
- A. Reserved
- B. On-Demand
- C. Dedicated
- D. Spot

<details><summary>Answer</summary>

**D** - Spot = fault-tolerant workloads, can be interrupted, up to 90% savings.
</details>

---

### Q7. (PE1-Q35) AWS Cost Explorer
How to view distribution of AWS spending?
- A. Amazon VPC console
- B. Contact AWS Support
- C. AWS Cost Explorer
- D. Contact AWS Finance

<details><summary>Answer</summary>

**C** - Cost Explorer = visualize, understand, forecast AWS costs.
</details>

---

### Q8. (PE2-Q6) On-Demand NOT Correct
What is NOT correct about On-Demand?
- A. Start-up fee when launching
- B. Follow pay-as-you-go model
- C. No upfront payments needed
- D. Per-second billing for Linux

<details><summary>Answer</summary>

**A** - There is NO start-up fee for On-Demand instances.
</details>

---

### Q9. (PE2-Q22) Dedicated Hosts for BYOL
Which EC2 option supports BYOL?
- A. Dedicated Instances
- B. Dedicated Hosts
- C. On-Demand
- D. Reserved

<details><summary>Answer</summary>

**B** - Dedicated Hosts = physical server = bring your own license (BYOL).
</details>

---

### Q10. (PE3-Q3) Pricing Models
EC2 over 1 or 3 year term to reduce costs?
- A. Pay less as AWS grows
- B. Pay as you go
- C. Pay less by using more
- D. Save when you reserve

<details><summary>Answer</summary>

**D** - "Save when you reserve" = Reserved Instances pricing model.
</details>

---

### Q11. (PE3-Q4) Rightsizing
How to minimize RDS costs during migration?
- A. Right-size before and after migration
- B. Multi-Region Active-Passive
- C. Combine On-demand with Savings Plans
- D. Multi-Region Active-Active

<details><summary>Answer</summary>

**A** - Rightsizing = choosing correct instance size to avoid over-provisioning.
</details>

---

### Q12. (PE3-Q18) Reserved Instance Partial Upfront
Need RDS for 3 years, most cost-effective?
- A. Reserved - No Upfront
- B. Reserved - Partial Upfront
- C. On-Demand
- D. Spot

<details><summary>Answer</summary>

**B** - 3-year Partial Upfront = good balance of discount and flexibility.
</details>

---

### Q13. (PE3-Q20) Savings Plans
Savings Plans available for which services? (Choose TWO)
- A. AWS Batch
- B. AWS Outposts
- C. Amazon Lightsail
- D. Amazon EC2
- E. AWS Lambda

<details><summary>Answer</summary>

**D, E** - Savings Plans apply to EC2, Lambda, and Fargate.
</details>

---

### Q14. (PE3-Q29) TCO Analysis
What should you consider in TCO comparison?
- A. Application development
- B. Market research
- C. Business analysis
- D. Physical hardware

<details><summary>Answer</summary>

**D** - Physical hardware costs = key factor in TCO (on-premises you buy hardware, in AWS you don't).
</details>

---

### Q15. (PE3-Q30) Linux EC2 Billing
How are Linux-based EC2 billed?
- A. Per-second, minimum one minute
- B. Per-hour, minimum one day
- C. Per-minute, minimum one hour
- D. Per-day, minimum one month

<details><summary>Answer</summary>

**A** - Linux EC2 = per-second billing with minimum one minute.
</details>

---

### Q16. (PE3-Q31) EC2 Price Factors
What impacts EC2 price? (Choose TWO)
- A. Instance type
- B. Availability Zone
- C. Load balancing
- D. Number of buckets
- E. Number of private IPs

<details><summary>Answer</summary>

**A, B** - Instance type + AZ (region/AZ affects pricing).
</details>

---

### Q17. (PE3-Q46) Reserved Instance Benefits/Drawbacks
One benefit and one drawback of Reserved Instances? (Choose TWO)
- A. Can be shut down by AWS anytime
- B. Require at least one-year commitment
- C. No additional charge for dedicated
- D. Significant discount vs on-demand
- E. Best for periodic workloads

<details><summary>Answer</summary>

**B, D** - Benefit: significant discount. Drawback: 1-year minimum commitment.
</details>

---

### Q18. (PE3-Q48) 2-Month Workload
Most cost-effective for 2 months continuous?
- A. On-Demand
- B. Spot
- C. Reserved All Upfront
- D. Reserved No Upfront

<details><summary>Answer</summary>

**A** - 2 months = too short for Reserved (1-year minimum). On-Demand is best.
</details>

---

### Q19. (PE4-Q17) AWS Budgets for RI Tracking
How to track underutilized Reserved Instances?
- A. Add accounts to Org, turn off RI sharing
- B. Use Neptune to analyze usage
- C. Use AWS Budgets to track RI utilization and set alerts
- D. Use CloudTrail for unused reservations

<details><summary>Answer</summary>

**C** - AWS Budgets can track RI utilization and alert when underutilized.
</details>

---

### Q20. (PE4-Q22) Cost & Usage Report Granularity
What provides most granular AWS cost data?
- A. Amazon Machine Image
- B. AWS Cost Explorer
- C. AWS Cost & Usage Report
- D. Amazon CloudWatch

<details><summary>Answer</summary>

**C** - Cost & Usage Report = most granular (line-item detail).
</details>

---

### Q21. (PE4-Q26) Cost Allocation Tags
Benefits of tagging strategy? (Choose TWO)
- A. Quickly identify resources by project
- B. Identify software solutions
- C. Track API calls
- D. Identify deleted resources
- E. Track AWS spending across resources

<details><summary>Answer</summary>

**A, E** - Tags = identify resources by project + track spending.
</details>

---

### Q22. (PE4-Q36) TCO Calculator
Tool for cost-benefit analysis of migrating to AWS?
- A. AWS Cost Explorer
- B. AWS TCO Calculator
- C. AWS Budgets
- D. AWS Pricing Calculator

<details><summary>Answer</summary>

**B** - TCO Calculator compares on-premises vs AWS costs.
</details>

---

### Q23. (PE4-Q42) Avoid Unexpected Charges
Which is NOT a practice to avoid charges?
- A. Delete unused EBS volumes
- B. Delete unused Auto Scaling launch config
- C. Delete unused ELBs
- D. Release unused Elastic IPs

<details><summary>Answer</summary>

**B** - Auto Scaling launch configs don't cost money. EBS, ELBs, and Elastic IPs DO.
</details>

---

### Q24. (PE4-Q43) Cost Explorer Visualization
What visualizes AWS spending?
- A. AWS Cost Explorer
- B. AWS Pricing Calculator
- C. AWS Budgets
- D. AWS Consolidated Billing

<details><summary>Answer</summary>

**A** - Cost Explorer = charts and graphs of historical and forecasted spending.
</details>

---

### Q25. (PE4-Q47) Per-Second Billing
What reduces EC2 cost?
- A. Low monthly maintenance
- B. Low-cost tagging
- C. Per-second billing
- D. Low start-up fees

<details><summary>Answer</summary>

**C** - Per-second billing = pay only for what you use (no wasted partial hours).
</details>

---

### Q26. (PE5-Q2) All Upfront RI
Which RI option provides largest discount?
- A. All up-front
- B. All options same
- C. Partial up-front
- D. No up-front

<details><summary>Answer</summary>

**A** - All Upfront = largest discount (you pay everything at start).
</details>

---

### Q27. (PE5-Q4) EC2 Billing Calculation
Linux instance for 2h 5m 9s, CentOS for 4h 23m 7s. Billed for?
- A. 3h Linux, 5h CentOS
- B. Exact time for both
- C. Exact time Linux, 5h CentOS
- D. 3h Linux, exact CentOS

<details><summary>Answer</summary>

**C** - Linux = per-second (exact time). Other OS = per-hour (rounded up to 5h).
</details>

---

### Q28. (PE5-Q14) S3 Volume Discounts
Which service offers volume discounts based on usage?
- A. Amazon VPC
- B. Amazon S3
- C. Amazon Lightsail
- D. AWS Cost Explorer

<details><summary>Answer</summary>

**B** - S3 = pay less per GB as you store more (tiered pricing).
</details>

---

### Q29. (PE5-Q18) TCO Gap
Why has TCO gap widened between AWS and traditional?
- A. AWS helps invest in CapEx
- B. AWS automates all operations
- C. AWS continues to lower cloud computing cost
- D. AWS secures at no additional charge

<details><summary>Answer</summary>

**C** - AWS continuously lowers prices (economies of scale).
</details>

---

### Q30. (PE5-Q22) EC2 Cost Factors
What is NOT a factor in EC2 costs? (Choose TWO)
- A. Time instances run
- B. Number of security groups
- C. Allocated Elastic IPs
- D. Number of Hosted Zones
- E. Number of instances

<details><summary>Answer</summary>

**B, D** - Security groups and Hosted Zones don't directly affect EC2 pricing.
</details>

---

### Q31. (PE5-Q30) TCO Analysis Factors
What to consider for TCO? (Choose TWO)
- A. Labor and IT costs
- B. Cooling and power consumption
- C. Amazon EBS computing power
- D. Software architecture
- E. Software compatibility

<details><summary>Answer</summary>

**A, B** - Labor + cooling/power = on-premises costs to include in TCO.
</details>

---

### Q32. (PE5-Q37) Reserved for Continuous Use
Application continuously utilized all year. Most cost-effective?
- A. On-Demand
- B. Dedicated Hosts
- C. Spot
- D. Reserved Instances

<details><summary>Answer</summary>

**D** - Continuous use all year = Reserved Instances (predictable workload).
</details>

---

### Q33. (PE5-Q40) BYOL Migration Savings
How to save when migrating workloads?
- A. Use servers instead of managed services
- B. Use existing third-party software licenses on AWS
- C. Migrate to edge locations
- D. Use Outposts

<details><summary>Answer</summary>

**B** - Bring Your Own License (BYOL) = save on licensing costs.
</details>

---

### Q34. (PE5-Q44) Pricing Calculator
What estimates costs before using AWS?
- A. Cost Explorer
- B. AWS Pricing Calculator
- C. AWS Budgets
- D. Cost & Usage Report

<details><summary>Answer</summary>

**B** - Pricing Calculator = estimate costs for NEW workloads before deploying.
</details>

---

### Q35. (PE6-Q19) Cost Explorer Forecast
What does Cost Explorer provide?
- A. Cost comparisons cloud vs on-prem
- B. Estimates based on expected usage
- C. Consolidated billing
- D. Cost forecasts up to 12 months

<details><summary>Answer</summary>

**D** - Cost Explorer provides forecasts up to 12 months ahead.
</details>

---

### Q36. (PE6-Q21) Stop On-Demand to Save
Best way to reduce charges when dev EC2 instances not in use?
- A. Delete EBS volumes
- B. Can't minimize on-demand charges
- C. Terminate instances
- D. Stop instances

<details><summary>Answer</summary>

**D** - Stop instances = no compute charges (EBS still charged). Terminate = delete everything.
</details>

---

### Q37. (PE6-Q23) EBS Pricing Factors
What affects EBS pricing? (Choose TWO)
- A. Size of volumes provisioned
- B. Compute capacity consumed
- C. Data stored in snapshots
- D. Compute time
- E. Number of Snowball devices

<details><summary>Answer</summary>

**A, C** - EBS pricing = volume size + snapshot storage.
</details>

---

### Q38. (PE6-Q25) Data Transfer Costs
What has greatest impact on cost? (Choose TWO)
- A. Compute charges
- B. Number of services used
- C. Data Transfer In
- D. Data Transfer Out
- E. Number of IAM roles

<details><summary>Answer</summary>

**A, D** - Compute + Data Transfer OUT = biggest cost drivers. Data IN is usually free.
</details>

---

### Q39. (PE6-Q26) Biggest RI Discount
Who gets largest discount?
- A. On-demand, Convertible, Partial upfront
- B. Reserved, Convertible, All upfront
- C. Reserved, Standard, No upfront
- D. Reserved, Standard, All upfront

<details><summary>Answer</summary>

**D** - Reserved + Standard + All Upfront = MAXIMUM discount.
</details>

---

### Q40. (PE6-Q42) Tags for Cost Analysis
What strategy helps analyze costs?
- A. Using tags to group resources
- B. Using CloudFormation
- C. Deploying same type in different regions
- D. Using Inspector

<details><summary>Answer</summary>

**A** - Tags = categorize and track costs by project, department, environment.
</details>

---

### Q41. (PE7-Q6) Cost & Usage Report
How to view AWS costs applied to your account?
- A. AWS Cost & Usage Report
- B. AWS TCO dashboard
- C. AWS CloudWatch logs
- D. Amazon VPC dashboard

<details><summary>Answer</summary>

**A** - Cost & Usage Report = detailed view of all AWS charges.
</details>

---

### Q42. (PE7-Q7) RI Types
What are valid EC2 Reserved Instance types? (Choose TWO)
- A. Convertible
- B. Expedited
- C. Bulk
- D. Spot
- E. Standard

<details><summary>Answer</summary>

**A, E** - Standard RI (biggest discount, can't change family) + Convertible RI (smaller discount, can change).
</details>

---

### Q43. (PE8-Q3) Consolidated Billing for Savings
How to decrease monthly charges with multiple accounts?
- A. Remove unnecessary accounts
- B. Add to AWS Organization with Consolidated Billing
- C. Track charges
- D. Enable tiered pricing

<details><summary>Answer</summary>

**B** - Consolidated Billing = combined usage = volume discounts.
</details>

---

### Q44. (PE8-Q9) AWS Pricing Principles
Which are true about AWS pricing? (Choose TWO)
- A. No upfront fee with pay-as-you-go
- B. No responsibility for third-party licenses
- C. Pay for individual services, no long-term contracts
- D. Startup fee required
- E. No reservations, only pay for use

<details><summary>Answer</summary>

**A, C** - No upfront fee + pay for individual services with no long-term contracts.
</details>

---

### Q45. (PE9-Q24) AWS Billing Service
Which service pays bills and monitors usage/budget?
- A. AWS Billing and Cost Management
- B. Consolidated billing
- C. Amazon CloudWatch
- D. Amazon QuickSight

<details><summary>Answer</summary>

**A** - AWS Billing and Cost Management = central billing dashboard.
</details>

---

### Q46. (PE9-Q26) Consolidated Billing Feature
Which feature allows usage tiers across member accounts?
- A. SCPs
- B. Consolidated billing
- C. All Upfront RIs
- D. AWS Cost Explorer

<details><summary>Answer</summary>

**B** - Consolidated billing = combined usage across accounts for volume discounts.
</details>

---

### Q47. (PE10-Q2) Highest RI Savings
Which RI pricing provides highest savings?
- A. 1-year, No Upfront, Standard
- B. 1-year, All Upfront, Convertible
- C. 3-year, All Upfront, Standard
- D. 3-year, No Upfront, Convertible

<details><summary>Answer</summary>

**C** - 3-year + All Upfront + Standard = MAXIMUM savings.
</details>

---

### Q48. (PE10-Q11) Volume Discounts with Multiple Accounts
How to get volume discounts across accounts?
- A. Create one global account
- B. 3-year RIs upfront
- C. Use consolidated billing from Organizations
- D. Enterprise support plan

<details><summary>Answer</summary>

**C** - Consolidated billing = automatically combines usage for volume discounts.
</details>

---

### Q49. (PE10-Q32) Cost Allocation Tags
What tracks and categorizes spending in detail?
- A. Cost allocation tags
- B. Consolidated billing
- C. AWS Budgets
- D. AWS Marketplace

<details><summary>Answer</summary>

**A** - Cost allocation tags = detailed tracking and categorization of spending.
</details>

---

### Q50. (PE11-Q6) Consolidated Billing Advantages
Advantages of consolidated billing? (Choose TWO)
- A. One bill for multiple accounts
- B. Service limits increase in all accounts
- C. Fixed discount on monthly bill
- D. Volume discounts from combined usage
- E. Master account support plan extends to all

<details><summary>Answer</summary>

**A, D** - One bill + volume discounts = key advantages of consolidated billing.
</details>

---

## 📋 CHEAT SHEET - Domain 4

### Pricing Quick Decision Tree
```
Need it for < 1 year, can't be interrupted? → ON-DEMAND
Need it for 1-3 years, steady workload? → RESERVED INSTANCES
Flexible, can handle interruption? → SPOT INSTANCES
Need physical server / BYOL? → DEDICATED HOSTS
Want flexible commitment? → SAVINGS PLANS
```

### Cost Tools Quick Match
| I want to... | Use this tool |
|--------------|--------------|
| See past spending with charts | **Cost Explorer** |
| Get alerts when spending exceeds threshold | **AWS Budgets** |
| See most detailed billing line items | **Cost & Usage Report** |
| Estimate costs for new workload | **Pricing Calculator** |
| Compare on-premises vs cloud costs | **TCO Calculator** |
| Categorize costs by department | **Cost Allocation Tags** |
| Get one bill for multiple accounts | **Consolidated Billing** |
| Get right-sizing recommendations | **Compute Optimizer** |

### Support Plan Quick Match
| I need... | Minimum Plan |
|-----------|-------------|
| Forums only | **Basic** (free) |
| Email support (business hours) | **Developer** |
| 24/7 phone support | **Business** |
| < 1 hour response (production down) | **Business** |
| < 15 min response (business critical) | **Enterprise** |
| TAM | **Enterprise** |
| Concierge | **Enterprise** |
| IEM included | **Enterprise** |
| Full Trusted Advisor | **Business** |
| Support API | **Business** |

**Total: 50 Questions | Weight: 12% of Exam (~6 scored questions)**









