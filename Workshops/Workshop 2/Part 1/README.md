# Workshop 2 (Part 1) — Design Artifacts and System Modeling

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
| `Workshop No. 2 (Part 1) — Design Artifacts and System Modeling.pdf` | Full deliverable document, organized in the sections described below |

Part 1 covers the design artifacts of the workshop guide up to the mockups. It builds directly on the requirements, user stories and user story map delivered in Workshop 1.

## Document sections

### 1. System Domain

- **1.1 System Context:** problem statement, scope (200 active construction sites in Bogotá during 2026), system boundaries (what the system does and does not do) and the external systems it interacts with: open data sources (IDU, Secretaría de Movilidad, SECOP II), the email service and the map provider.
- **1.2 Actor Characterization:** description, goals, permissions, expected frequency of use, technical profile and related user stories for the three actors: visitor, registered citizen and administrator.
- **1.3 Business Rules:** 14 business rules (BR-01 to BR-14), each traced to the functional and non-functional requirements it constrains (access permissions, data consent, one rating per citizen and site, comment rate limit, active construction site definition, performance index, data source attribution, progress history, petition template scope and subscriber notifications).

### 2. CRC Cards

Class-Responsibility-Collaborator cards for the 19 classes of the system, grouped into:

- **Users:** `User` (abstract), `Citizen`, `Administrator`
- **Core domain:** `ConstructionSite`, `ConstructionSiteCatalog`, `Locality`, `Contractor`, `PublicEntity`
- **Construction site details:** `ProgressRecord`, `Milestone`, `RoadClosure`, `SiteImage`
- **Citizen participation:** `Rating`, `Comment`, `CommentReport`, `Subscription`, `PetitionTemplate`
- **Services:** `NotificationService`, `PdfGenerator`

Each responsibility references the requirement or business rule it fulfills. Classes that do not store data are marked as non-persistent.

### 3. Class Diagram

UML class diagram split into four figures so it remains legible on an A4 page:

- **Figure 1 — Overview:** the three packages (users and participation, construction site, services) and the dependencies between them.
- **Figure 2 — Users and participation:** user hierarchy and citizen participation classes.
- **Figure 3 — Construction site:** the construction site, its parts and its catalogs.
- **Figure 4 — Services:** catalog, petition template, PDF generation and notifications.

The diagram shows attributes and operations with visibility and types, generalization (`Citizen` and `Administrator` extend `User`), composition (deleting a construction site also deletes its comments, ratings, subscriptions, progress records, milestones, road closures and images), associations with multiplicities, dependencies, enumerations and the `«non-persistent»` stereotype.

### 4. Relational Database Model

Relational schema for MySQL, presented as an ER diagram in crow's foot notation and split into two figures:

- **Figure 5 — Construction site:** `construction_site`, its catalogs (`locality`, `contractor`, `public_entity`) and its parts (`progress_record`, `milestone`, `road_closure`, `site_image`).
- **Figure 6 — Users and participation:** `user`, `rating`, `comment`, `comment_report` and `subscription`.

The figures show the 13 tables with their columns, data types, primary keys, foreign keys, unique and composite unique keys, nullable columns and `ON DELETE` actions. A **CHECK restrictions** table lists the allowed values of each enumerated column and the range and date constraints.

Main design decisions:

- Only persistent classes become tables; calculated values (performance index, average rating, active status) are computed by queries.
- User inheritance is stored in a single `user` table with a `role` column.
- Geometry is stored as GeoJSON in `JSON` columns.
- Enumerations are stored as `VARCHAR` columns restricted by `CHECK` constraints.
- Foreign keys use `ON DELETE CASCADE`, except the catalog references (`RESTRICT`) and the administrator references `registered_by_id` and `resolved_by_id` (`SET NULL`).
- The current progress of a construction site is kept in `construction_site` as a controlled denormalization to support filtering and sorting by progress.

### 5. Mockups

Screens of the web application, each with a short description of its purpose:

1. **Main page:** map navigation, search, login and accessibility settings.
2. **Search:** search of active construction sites by name or address, with filters.
3. **Map:** popup with the basic information of the selected construction site.
4. **Expanded information window:** full information, ratings, comments, progress graph and images of a construction site.
5. **Login window:** login popup for registered users.
6. **Profile page:** profile information, favorite construction sites, petitions and credentials.

## Traceability

The design artifacts are traced to Workshop 1: business rules reference functional and non-functional requirements, CRC responsibilities reference requirements and business rules, the class diagram formalizes the CRC cards, the relational model is derived from the persistent classes of the class diagram, and the mockups implement the user stories.
