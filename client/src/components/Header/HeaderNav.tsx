import { Menu, MenuItem, MenuButton, Link } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";

import { Authenticator } from '@aws-amplify/ui-react';

import profilePhoto from "../../assets/images/blank_profile.webp";

const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <>
      {baseConfig.projectLink ? (
        <div className="github-link">
          <Link
            href={baseConfig.projectLink}
            isExternal={true}
            ariaLabel="github"
          >
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}

      <Menu
        menuAlign="end"
        trigger={
          <MenuButton variation="menu">
            <div className="header-avatar">
              <img alt="avatar" src={profilePhoto}></img>
            </div>
          </MenuButton>
        }
      >
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <Authenticator>
          {({ signOut }) => (
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          )}
    </Authenticator>
      </Menu>
    </>
  );
};

export default HeaderNav;
