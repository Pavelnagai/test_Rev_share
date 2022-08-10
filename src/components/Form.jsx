import React, {useEffect, useState} from 'react';
import {WrapperUserAdmin} from "./UserAdmin";


const Form = () => {
    const [user_name, set_user_name] = useState('');
    const [amount, set_amount] = useState(0);
    const user_id = window.location.pathname.slice(1);
    const user_data = JSON.parse(localStorage.getItem(user_id));


    useEffect(() => {
        set_user_name(user_data.user_name);
        set_amount(user_data.amount);
    }, []);

    function save_user_handler(e) {
        e.preventDefault();
        console.log(localStorage.getItem('profit'))
        localStorage.setItem(user_id, JSON.stringify({user_name, amount}));
        localStorage.setItem("profit", JSON.stringify(+localStorage.getItem('profit') + amount * 0.1));
    }

    return (
        <WrapperUserAdmin>
            <form>
                <div className="field">
                    <label htmlFor="user_name">Name</label>
                    <input type="text" value={user_name} name="user_name" id="user_name"
                           onChange={(e) => set_user_name(e.currentTarget.value)}
                           readOnly={!!user_data.user_name}
                    />
                </div>
                <div className="field">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} name="amount" id="amount"
                           onChange={(e) => set_amount(+e.currentTarget.value)}/>
                </div>
                <button type="submit" onClick={save_user_handler}>Save</button>
            </form>
        </WrapperUserAdmin>
    );
};

export default Form;