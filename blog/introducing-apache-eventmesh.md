---
title: Born at China’s WeBank, now incubating in the ASF - Introducing Apache EventMesh
author: Priya Pradeep
author_title: Priya Pradeep is a freelance reporter for The Stack.
author_url: https://thestack.technology/author/priya-pradeep/
author_image_url: https://thestack.technology/wp-content/uploads/2021/05/priya1-300x300.jpg
date: 2021-06-29T11:14:52+00:00
description: Guangsheng Chen, the founder of Apache EventMesh, has been buzzing since the project was welcomed into the Apache Software Foundation (ASF)’s incubator in February 2021.
image: https://thestack.technology/wp-content/uploads/2021/06/ricardo-gomez-angel-3pBHB-bmGno-unsplash-780x470.jpg
hide_table_of_contents: false
---


Guangsheng Chen, the founder of Apache EventMesh, has been buzzing since the project was welcomed into the Apache Software Foundation (ASF)’s incubator in February 2021. There’s a growing community supporting work on the open source software — used to decouple the application and backend middleware layer — and induction into the ASF incubator is further welcome lift, writes Priya Pradeep.

<!--truncate-->

![Image](https://thestack.technology/wp-content/uploads/2021/06/ricardo-gomez-angel-3pBHB-bmGno-unsplash-780x470.jpg)

The founding members of Apache EventMesh include software professionals from China’s WeBank, Oppo and OpenMessaging communities. The project — born at China’s WeBank and first open-sourced on [GitHub](https://cwiki.apache.org/confluence/display/INCUBATOR/EventMeshProposal) in September 2019, gaining 250 stars and then forked more than 70 times in a matter of few months — is the first Chinese fintech-founded project to make it into the Apache Incubator.

As a result Chen is keen to get more people involved in the community through the ASF and diversify its contributor base as interest grows: with 227 million+ lines of code under stewardship, 40,000+ contributors and 350+ live projects, the ASF remains a key forum for open source projects.

## What is Apache EventMesh?

In Gartner’s 2019 [Top 3 Trends in Application Architecture](https://www.gartner.com/en/documents/3970797/top-3-trends-in-application-architecture-that-enable-dig) That Enable Digital Business report, the number one trend “Mesh Application and Service Architecture” had “Event Mesh” technology as its core.

Essentially an [event mesh](https://solace.com/what-is-an-event-mesh/) is “an architecture layer that allows events from one application to be dynamically routed and received by any other application no matter where these applications are deployed, even without a cloud. It is a configurable infrastructure layer for distributing events among decoupled applications, cloud services and devices. It bridges applications and services in an event-driven architecture (EDA)”.

Think of it as a [way to distribute events](https://solace.com/what-is-an-event-mesh/) among decoupled applications, cloud services and devices; an architecture layer that allows “events from one application to be dynamically routed and received by any other application no matter where these applications are deployed (no cloud, private cloud, public cloud).”

A simple everyday example could be: A pricey London gym offers a customer flat 50% discount on luxury “athleisure” from France, if joining the gym for a £1,200 yearly membership. As the salesperson swipes your credit card, transaction events happen between these retail points’ electronic billing systems in disparate environments. The cohesion of these events without cloud architecture is carried out via an event mesh, a relatively new kid on the block in the world of event communications.

Apache EventMesh itself has four primary components:

eventmesh-runtime : an middleware to transmit events between event producers and consumers, support cloud native apps and microservices.
eventmesh-sdk-java : currently supports HTTP and TCP protocols.
eventmesh-connector-api : an api layer based on OpenMessaging api and SPI pluggin, which can be implemented by popular EventStores such as IMDG, Messaging Engine and OSS etc.
eventmesh-connector-rocketmq : an implementation of eventmesh-connector-api, pub event to or sub event from RocketMQ as EventStore.

EventMesh-enabled software is used routinely now in major industries like the banking sector, telecom, automobile and aviation across the world. In 2018, [Gartner](https://www.datanami.com/2019/11/18/why-event-meshes-should-be-on-your-iot-radar/) proclaimed that 80% of new enterprise ecosystems will require support for event processing in the coming years and it would be a required characteristic by 2022.

## Moving on from ESB

An event mesh’s earlier incarnation was the Enterprise Service Bus (ESB). Chen’s take on the advanced Apache EventMesh is, “While an ESB would offer you a good feature set, the main challenge with ESBs was the monolithic architecture and tight technological coupling between business logic and platform, which lead to a technical and organisational centralisation. Whereas Apache EventMesh is designed to improve on these limitations of a traditional ESB.”

(An ESB architecture, crudely, lets you integrate different applications by putting a communication bus between them so each application can talk to the bus. While providing a well defined, pluggable” system, ESB can become the bottleneck to implementing changes, with all required changes — which might vary wildly across a business — added to a typically slow-moving ESB change queue. Implementing multiple ESB instances to support multiple business domains can rapidly get very expensive and not always prove hugely cloud-friendly.)

## Why Apache EventMesh?

As Chen describes it: “Apache EventMesh provides standard protocol such as cloud events; interface such as http, tcp etc.; and pluggable storage engine with the [Apache RocketMQ](https://rocketmq.apache.org/) as the default back-end storage. Compared to other mesh-based applications in the market, our platform supports fancy features like extreme low latency and stability, and cloud-native architecture.” However, Chen knows there is stiff competition primarily from AWS and Azure who have made similar products such as EventGrid and EventBridge; and other competitors from Asia, Canada, and the U.S.

## Advantages of using Apache EventMesh

Developers have the underlying architecture already built for them; hence they can concentrate on coding event-driven applications faster.
Agility increases as developers can operate applications with high volume of events across global networks in real time amongst hybrid clouds.
It compliments serverless technology and is scalable to modern applications that are characterised by loosely coupled elements performing amongst distributed cloud architecture.
Capable of asynchronous system communications.
Greater security during transmission of event messages.
Possesses technical advantages such as millisecond delay and 100 million message processing capabilities.
Is embedded with tool assistance to achieve fast and automatic isolation of faulty applications.

## The Future

Apache EventMesh is a work in progress. Chen acknowledges, “We are continuously improving, and dealing with the need to address complexity brought in by heavy clients based on the pull model; event-based streaming; and, the openness of event metadata and mixed media storage.”
