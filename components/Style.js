import styled, { css } from "styled-components";

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
 
  &:hover {
    box-shadow: 3px 3px #888888;
    
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("black", "black")} 
  color: #ffff;
`;

const btnPrimary = btn("black", "black");

export default styled.div`
  font-family: sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5 {
    
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }
  p a {
    display: inline;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
  

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
        display: flex;
        text-align: left;
        justify-content: center;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        display: flex;
        text-align:center;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type="checkbox"] {
        padding: 4px;
        margin-top: 7px;
      }
      & > div {
        & > label {
          display: block;
          & > input,
          & > handling {
            display: flex;
            text-align:center;
            justify-content: center;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 150px;
    }
    button {
      margin: 0 10px;
      &[type="submit"] {
        ${btnPrimary};
      }
      &[type="button"] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;
