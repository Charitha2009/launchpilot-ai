# Architecture

```mermaid
flowchart TD
    A[User] --> B[Frontend (Next.js)]
    B --> C[FastAPI Backend]
    C --> D[Landing Page Scanner]
    D --> E[Playwright]
    E --> F[Lighthouse]
    F --> G[Tracking Detector]
    G --> H[AI Analyzer]
    H --> I[Database]
    I --> J[Report Generator]
```
