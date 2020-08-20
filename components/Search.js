import React from 'react'
import Geosuggest from 'react-geosuggest';
 import styled from 'styled-components'


const StylesGeosuggest = styled(Geosuggest)`
.geosuggest {
  font-size: 18px;
  font-size: 1rem;
  position: relative;
  width: 50%;
  margin: 1em auto;
  text-align: left;
}
.geosuggest__input {
  height: 50px;
  width: 275px;
  border: 2px solid cornflowerblue;
  box-shadow: 0 0 1px #3d464d;
  padding: 0.5em 1em;
  -webkit-transition: border 0.2s, box-shadow 0.2s;
  transition: border 0.2s, box-shadow 0.2s;
}
.geosuggest__input:focus {
  border-color: #267dc0;
  box-shadow: 0 0 0 transparent;
}
.geosuggest__suggests {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: 25em;
  padding: 0;
  margin-top: -1px;

 
  border: 2px solid #267dc0;
  border-top-width: 0;
  overflow-x: hidden;
  overflow-y: auto;
  list-style: none;
  z-index: 5;
  -webkit-transition: max-height 0.2s, border 0.2s;
  transition: max-height 0.2s, border 0.2s;
}
.geosuggest__suggests--hidden {
  max-height: 0;
  overflow: hidden;
  border-width: 0;
}


.geosuggest__item {
  font-size: 18px;
  font-size: 1rem;
  padding: 0.5em 0.65em;
  cursor: pointer;
}
.geosuggest__item:hover,
.geosuggest__item:focus {
  background: #f5f5f5;
}
.geosuggest__item--active {
  background: #267dc0;
  color: #fff;
}
.geosuggest__item--active:hover,
.geosuggest__item--active:focus {
  background: #ccc;
}
.geosuggest__item__matched-text {
  font-weight: bold;
}
`;


function Search() {
  return (
    <div>
      <StylesGeosuggest
      placeholder="👉 Use your business address"
       />
  </div>
  )
}

export default Search
