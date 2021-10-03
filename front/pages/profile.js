import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";

const Profile = () => {
    return (
        <>
        <Head>
          <title>나의 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
                나의 프로필
        </AppLayout>
        </>
    );
};

export default Profile;
