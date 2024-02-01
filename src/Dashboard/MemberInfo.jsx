import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MemberInfo = () => {
    const { name } = useLoaderData();
    console.log(name);

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default MemberInfo;