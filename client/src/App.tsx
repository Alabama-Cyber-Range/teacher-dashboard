import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { ThemeProvider } from "@aws-amplify/ui-react";
import theme from "./theme";

import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Tables from "./pages/tables";
import UsersTable from "./pages/tables/UsersTablePage";
import Forms from "./pages/forms";
import EditForm from "./pages/forms/EditForm";

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: import.meta.env.VITE_APP_USER_POOL_CLIENT_ID,
      userPoolId: import.meta.env.VITE_APP_USER_POOL_ID,
      identityPoolId: import.meta.env.VITE_APP_IDENTITY_POOL_ID,
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_APP_COGNITO_DOMAIN,
          scopes: [
            'phone',
            'email',
            'profile',
            'openid',
            'aws.cognito.signin.user.admin',
          ],
          redirectSignIn: [`${window.location.origin}/dashboard`],
          redirectSignOut: [window.location.origin],
          responseType: 'code' as const,
        },
      },
    },
  },
  API: {
    GraphQL: {
      endpoint: import.meta.env.VITE_APP_GRAPHQL_API_URL,
      region: import.meta.env.VITE_APP_REGION,
      defaultAuthMode: 'userPool',
    }
  }

});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="forms" element={<Forms />} />
            <Route path="edit-form" element={<EditForm />} />
            <Route path="tables" element={<Tables />} />
            <Route path="users-table" element={<UsersTable />} />
            <Route path="profile" element={<Profile />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
