import React, {useRef} from 'react';
import {v1} from "uuid";
import {Link} from "react-router-dom";
import styled from "styled-components";


export const WrapperUserAdmin = styled.div`
  .field {
    display: flex;
    flex-direction: column;

    label {
      font-size: 40px;
      font-weight: 700;
    }

    input {
      margin-bottom: 10px;
      max-width: 640px;
      width: 100%;
      height: 60px;
      background-color: #F5F5F5;
      border: none;
      border-radius: 8px;
      font-size: 20px;
      padding-left: 20px;
      padding-right: 20px;
      font-weight: 700;

      &:focus {
        outline: none;
      }
    }
  }

  button {
    box-shadow: 0px 6px 12px rgba(181, 183, 192, 0.15);
    margin-bottom: 30px;
    height: 60px;
    max-width: 640px;
    width: 100%;
    border-radius: 8px;
    border: none;
    color: #FFFF;
    font-size: 20px;
    background-color: #4A67FF;
    font-weight: 700;
    transition: all ease-in-out 0.2s;
  }

  button:hover {
    background-color: #FFFF;
    color: #4A67FF;
    cursor: pointer;
  }

  .link {
    padding: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    max-width: 640px;
    width: 100%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: #F5F5F5;
    font-weight: 700;
    transition: all ease-in-out 0.2s;

    a {
      font-size: 20px;
      font-weight: 700;
      text-decoration: none;
      color: #4A67FF;
    }
  }


`

const UserAdmin = ({ref_links, set_ref_links}) => {
    const admit_profit = localStorage.getItem('profit');
    const generate_link = () => {
        const curr_ref_link = `user_${v1()}`

        localStorage.setItem(curr_ref_link, JSON.stringify({user_name: '', amount: ''}));
        set_ref_links([curr_ref_link, ...ref_links])
    }

    return (
        <WrapperUserAdmin>
            <div className='field'>
                <label htmlFor="profit">Profile</label>
                <input type="text" readOnly value={admit_profit} id="profit"/>
            </div>
            <button type="button" onClick={generate_link}>Сгенерировать ссылку</button>
            {ref_links.map((el, i) => {
                return (
                    <div className='link'>
                        <Link key={i} to={el} style={{display: "block"}} target="_blank">{el}</Link>
                    </div>
                )
            })}
        </WrapperUserAdmin>
    );
};

export default UserAdmin;