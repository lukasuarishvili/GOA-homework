``` Mermaid 
    
    flowchart TD
    subgraph Frontend
        index[index.html]
        level[level03.html]
        styleCSS[style.css]
        image[images.jpg]
    end

    subgraph Documentation
        planMD[plan.md]
    end

    subgraph Modules
        assets[assets/]
        pages[pages/]
        scripts[scripts/]
        styles[styles/]
    end
    subgraph Database
        base01
        base02
    end

    index --> styleCSS
    index --> image
    level --> styleCSS
    level --> image
    styleCSS --> styles
    image --> assets

    scripts -.-> index
    scripts -.-> level

    pages -.-> index
    pages -.-> level
    base01-.->planMD
    base02-->styles
```