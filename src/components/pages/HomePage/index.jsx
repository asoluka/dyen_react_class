import React from "react";
import { Icon } from "../../atoms/Icon";

export const HomePage = () => {
  return (
    // <Icon type="hamburger" />
    <div className="flex flex-center flex-between">
      <div>
        <Icon type="hamburger" width="24px" />
      </div>
      <div>middle</div>
      <div>right</div>
    </div>
  );
};
