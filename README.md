# Carbon Reduction
_A Case Study on ZPOT Kaeokla for You Project_

## Background
__Kaeokla for You__ is a carbon emision reduction and CO2 reduction project run by Zoological Park Organization of Thailand (ZPOT), a governmental agency under the Ministry of Natural Resources and Environmnet. The project has been initiated by Yada Kaeosod. She asked me to evaluate the potential positive carbon impact of the project. Hence, I reviewed some relevant carbon works and developed a web application, deployed at https://esc.mnre.go.th/app/co2. The goal is to make it easier and faster to assess the potential project outcome: Carbon emission reduction and sequestration from plastic cups resue for plantation.

Activities in Kaeokla for You Project can be displayed as follow:

```mermaid
flowchart LR
    A[Used plastic cups] -->C[Wasted]
    C -->D{Collected by Kaoekla for You?}
    D-->|yes| E[Reuse for Seeding]
    D-->|yes| J[No burning]
    J-->K[carbon emission reduction]
    E -->F[Plantation]
    F-->G[Carbon sequestration]
    D-->|no| H[burning]
    H-->I[carbon emission]
```
