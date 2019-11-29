import styled from "styled-components";

export const Manual = styled.div`
  color: #ccc;
  display: flex;
  font-family: Helvetica, Arial;
  flex-direction: column;
  margin-left: 20px;

  ul {
    list-style-type: none;
    padding-left: 40px;
  }

  li {
    line-height: 2rem;
  }

  .btn {
    align-content: center;
    background-color: #ddd;
    border: 1px solid #666;
    border-radius: 3px;
    color: #333;
    display: inline-flex;
    height: 20px;
    padding: 5px;
    text-shadow: 1px 1px 1px #eee;
    width: 20px;
  }
`;
