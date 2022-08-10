import React, {useEffect, useState} from 'react'
import {useRoutes} from "react-router-dom";
import UserAdmin from "./components/UserAdmin";
import Form from "./components/Form";
import styled from "styled-components";


const Content = styled.div`
  min-height: 100vh;
  padding: 20px;
  background-color: #FFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function App() {
    const [ref_links, set_ref_links] = useState([]);
    const routes = useRoutes([
        {
            path: '/',
            element: <UserAdmin ref_links={ref_links} set_ref_links={set_ref_links}/>,
        },
        ...ref_links.map(el => {
            return {
                path: el,
                element: <Form/>,
            }
        })
    ])

    window.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            window.location.reload()
        }
    })

    useEffect(() => {
        const user_ids = Object.keys(localStorage).filter(el => el.includes('user_'));

        if (!user_ids.length) {
            localStorage.setItem("profit", '0');
        }

        set_ref_links(user_ids);
    }, []);

    return (
        <Content>
            {routes}
        </Content>
    );
}

