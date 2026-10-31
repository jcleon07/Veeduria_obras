# Workshop 2 (Part 2) — Design Artifacts and System Modeling

**Software Engineering II — 2026-2S**
**Universidad Nacional de Colombia — Facultad de Ingeniería, Sede Bogotá**
**Professor:** Liliana Marcela Olarte

**Team:**
- Alejandro Ramirez Nuñez
- Juan Felipe Quiroga Medina
- Juan Camilo Lopez Leon
- Juan David Yopasa Maldonado

## Project

**Construction Works Oversight Website (Bogotá)** — a web platform that centralizes information about active public construction sites in Bogotá (physical progress, performance index, budget, contractor and road closures) and lets citizens rate, comment on, compare and follow construction sites, and prepare a right of petition.

## Deliverable

| File | Description |
|---|---|
| `Workshop No. 2 (Part 2) — Design Artifacts and System Modeling.pdf` | Complete Workshop 2 document, including every section of the workshop guide |

Part 2 completes Workshop 2 with the **business processes** (section 6) and the **architecture diagram** (section 7). The document also contains the design artifacts from Part 1 (sections 1 to 5), organized according to the system's microservices architecture: the **Identity**, **Construction Sites** and **Participation** services.

## Document sections

### 1. System Domain

System context and boundaries, external systems (open data sources, email service, map provider), characterization of the three actors (visitor, registered citizen and administrator) and 14 business rules (BR-01 to BR-14) traced to the requirements of Workshop 1.

### 2. CRC Cards

Class-Responsibility-Collaborator cards grouped by service:

- **Identity service:** `User`, `Citizen`, `Administrator`, `ParticipationClient`
- **Construction Sites service:** `ConstructionSite`, `ConstructionSiteCatalog`, `Locality`, `Contractor`, `PublicEntity`, `ProgressRecord`, `Milestone`, `RoadClosure`, `SiteImage`, `ParticipationClient`
- **Participation service:** `Rating`, `Comment`, `CommentReport`, `Subscription`, `PetitionTemplate`, `NotificationService`, `PdfGenerator`, `ParticipationEventHandler`, `SitesClient`, `IdentityClient`

### 3. Class Diagram

UML class diagram organized by microservice:

- **Figure 1:** overview of the three services and the classes each one owns.
- **Figures 2, 3 and 4:** detailed classes of the Identity, Construction Sites and Participation services, with attributes, operations, generalization, composition, associations, dependencies and enumerations.

Composition is used only between classes of the same service. References to objects owned by another service are stored as ids, and the client classes encapsulate the REST calls between services.

### 4. Relational Database Model

ER diagrams in crow's foot notation, one database per service:

- **Figure 5:** `sites_db` (Construction Sites service).
- **Figure 6:** `identity_db` (Identity service) and `participation_db` (Participation service).

The section explains:
- the cross-service references (`REF` columns without foreign key constraints);
- how deletions are propagated between services (eventual consistency);
- the controlled denormalization of the current progress of a construction site.

It also includes the table of **CHECK restrictions**.

### 5. Mockups

Main page, search, map, expanded construction site information, login window and profile page, each with a short description of its purpose.

### 6. Business Model Processes

Three core business processes:

- **6.1 Project progress update and subscriber notification:** the administrator registers new progress for a construction site; the system validates it, saves a new progress record without overwriting the previous ones, updates the data source and date, and sends an email to every active subscriber when the progress or the estimated end date changes (BR-11, BR-12, BR-14).
- **6.2 Create a petition:** a registered citizen searches for a construction site and generates a right of petition template pre-filled with the site information, then completes and finishes it (FR_14, FR_15, BR-13).
- **6.3 Comment management:** publishing, deleting, reporting and moderating comments, across the registered citizen, the Participation service and the administrator. It applies the one-comment-per-minute rule (BR-06), comment ownership (BR-07) and report validation (BR-08).

### 7. Architecture Diagram

Microservices architecture of the system:

- **Client and frontend:** web browser and a single-page application (React, TypeScript, Tailwind and Leaflet) served by Nginx.
- **API Gateway (Nginx):** single entry point that routes `/api/identity/*`, `/api/sites/*` and `/api/participation/*` and handles TLS and rate limiting.
- **Three backend services** (Django + Django REST Framework), each organized in API, service and data layers: Identity, Construction Sites and Participation.
- **Data:** one MySQL server hosting three independent databases (`identity_db`, `sites_db`, `participation_db`); each service accesses only its own database.
- **Internal communication:** REST calls between services, for site data, for progress-changed and site-deleted notices, for user-deleted notices, and for user data and emails.
- **External systems:** OpenStreetMap (map tiles), open data sources (IDU, Secretaría de Movilidad, SECOP II) and the email service (SMTP).
- **Communication flows:** HTTPS, REST/JSON with JWT authentication, SQL and SMTP.

### References

Sources for UML notation, BPMN, architectural diagrams, the API Gateway pattern, Django, Django REST Framework, MySQL CHECK constraints, GeoJSON and Colombian personal data protection law (Ley 1581 de 2012).
