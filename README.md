# React Component Library for NFT-Marketplace Micro-Frontend POC

All the common components used in the project can be imported as follows:

## Importable Components:
* CircularLoader
* Sidenav
* Cards
* Table

### Import line in the code:
```import {<Component Name>} from 'mf_react_component'```

## 1. CircularLoader
### Props:
1. **height**- Specify height of the loader
2. **width** - Specify width of the loader
3. **color**- Specify color of the loader
4. **ariaLabel**- Label of the loader

## 2. Sidenav
### Props:
1. **items**- array of objects containing below props:
    * *name*- name of the item
    * *link*- relative path of the page to be rendered
2. **styles**- inline css styles

## 3. Cards
### Props:
1. **image**- url of the image to b rendered <string>
2. **desc**- card description <string>
3. **title**- card title <string>
4. **style**- inline css-style
5. **enableButton**- boolean

## 4. Table
### Props:
1. **colNames**- array of object containing name and label for column headers
2. **data**- array of object containing the data to be shown as rows
3. **ROW_SIZE**- size of each row