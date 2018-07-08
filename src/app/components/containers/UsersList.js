import React from 'react';
import { connect } from 'react-redux';
import { connectApi } from 'redux-apimap';

const UsersList = (props) => {
    console.log(props);
    const { api } = props; //
    const addUser = () => {
        api.users.fetch();
    };

    return (
        <ul>
            {
                // isLoading &&
                // data.map(user => <li>{user.name}</li>)
            }
            <li>
                <button onClick={addUser}>+ Add new</button>
            </li>
        </ul>
    );
};

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps)(connectApi(UsersList));
