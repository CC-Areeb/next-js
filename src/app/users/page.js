'use client'

import { withAuth } from "@/utils/withAuth";

const Users = () => {
    return (
        <>
            <CommonLayout>
                <AllUsers />
            </CommonLayout>
        </>
    )
}

export default withAuth(Users) ;