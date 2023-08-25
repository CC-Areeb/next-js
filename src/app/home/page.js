'use client'

import CommonLayout from "@/layouts/CommonLayout";
import HomePage from "@/modules/users/HomePage";
import { withAuth } from "@/utils/withAuth";
const Home = () => {
  return (
    <>
      <CommonLayout>
        <HomePage />
      </CommonLayout>
    </>
  );
}

export default withAuth(Home);