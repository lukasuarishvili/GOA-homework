
``` mermaid
graph LR
    A[bank-project/] --> B[public/]
    A --> C[src/]
    A --> D[server.js]
    A --> E[.env]
    A --> F[package.json]
    
    B --> B1[index.html]
    B --> B2[script.js]
    
    C --> C1[models/]
    C --> C2[routes/]
    
    C1 --> C1a[Card.js]
    C2 --> C2a[cardRoutes.js]
    
    classDef frontend fill:#e5f5fe,stroke:#01579b,stroke-width:2px
    classDef backend fill:#f3e5f5,stroke:#4a148c,stroke-width:2px
    classDef config fill:#fff3e0,stroke:#e65100,stroke-width:2px
    classDef root fill:#f1f8e9,stroke:#33691e,stroke-width:2px
    
    class B,B1,B2 frontend
    class C,C1,C2,C1a,C2a,D backend
    class E,F config
    class A root
```