import React from "react";

const SidebarSocial = ({ mobileScreen }: any) => {
  return (
    <>
      {mobileScreen ? (
        <div className=" gap-5 flex">
          <h2>facebook</h2>
          <h2>facebook</h2>
        </div>
      ) : (
        <div className=" gap-5 hidden lg:flex">
          <h2>facebook</h2>
          <h2>facebook</h2>
        </div>
      )}
    </>
  );
};

export default SidebarSocial;
