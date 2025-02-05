/// <reference types="vite/client" />
import React, { useState } from 'react';
import { Router,Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';
import theme from './theme';


import Layout from './components/Layout';
import Dashboard from './pages/dashboard';
import Profile from './pages/profile';
import Forms from './pages/forms';
import EditForm from './pages/forms/EditForm';

import AddSchoolForm from './pages/forms/AddSchool';
import AddLearningPathForm from './pages/forms/AddLearningPath';
import UpdateUserSchoolForm from './pages/forms/UpdateUserSchool';
import UpdateLabSchoolForm from './pages/forms/UpdateLabSchool';
import UpdateLabLearningPathForm from './pages/forms/UpdateLabLearningPath';

import Modules from './pages/modules';
import Users from './pages/users';
import LearningPaths from './pages/learningPaths';
import Schools from './pages/schools';

import LearningPath from './pages/learningPath';
import School from './pages/school';
import User from './pages/user';
import Module from './pages/module';

import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';
import { AuthProvider } from './context/authContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Instructions from './pages/Instructions/instructions';
import LinuxSkills from './pages/Instructions/LinuxSkills';
import KaliTop10 from './pages/Instructions/KaliTop10';
import CatsOutOfTheBag from './pages/Instructions/instructions/catsoutofthebag';
import ArpCacheMeOutside from './pages/Instructions/instructions/arpcachemeoutside';
import BruteAndLootInstructions from './pages/Instructions/BruteAndLootInstructions';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: import.meta.env.VITE_APP_USER_POOL_CLIENT_ID,
      userPoolId: import.meta.env.VITE_APP_USER_POOL_ID,
      identityPoolId: import.meta.env.VITE_APP_IDENTITY_POOL_ID,
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_APP_COGNITO_DOMAIN,
          scopes: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
          redirectSignIn: [`${window.location.origin}/`],
          redirectSignOut: [window.location.origin],
          responseType: 'code',
        },
      },
    },
  },
  API: {
    GraphQL: {
      endpoint: import.meta.env.VITE_APP_GRAPHQL_API_URL,
      region: import.meta.env.VITE_APP_REGION,
      defaultAuthMode: 'userPool',
    },
  },
});

const queryClient = new QueryClient();

async function protectedLoader() {
  try {
    await getCurrentUser();
    return null;
  } catch (error) {
    return Navigate({ to: '/' });
  }
}

async function authLoader() {
  try {
    await getCurrentUser();
    return Navigate({ to: '/' });
  } catch (error) {
    return null;
  }
}

const formFields = {
  signIn: {
    username: {
      label: 'Email',
      placeholder: 'Enter your Email',
    },
  },
};

export default function App() {
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  const toggleHelp = () => {
    setIsHelpVisible(!isHelpVisible);
  };

  const openDirections = () => {
    window.open('/directions.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Authenticator hideSignUp={true} formFields={formFields}>
          <AuthProvider>
            <div>
              <button onClick={toggleHelp}>{isHelpVisible ? 'Hide Help' : 'Show Help'}</button>
              {isHelpVisible && <div><h2>Teaching Guide Instructions</h2><p>Here are the instructions for the teaching guide...</p></div>}
              <button onClick={openDirections} style={{ padding: '10px 20px', margin: '10px 0', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                View Directions
              </button>

<Routes>
  <Route path="/brute-and-loot" element={<BruteAndLootInstructions />} />
  <Route path="/cats-out-of-the-bag" element={<CatsOutOfTheBag />} />
  <Route path="/cache-me-outside" element={<ArpCacheMeOutside />} />
</Routes>


              <Routes>
        <Route path="/" element={<Layout />} loader={authLoader}>
        <Route index element={<Dashboard />} loader={protectedLoader} />
        <Route path="forms" element={<Forms />} loader={protectedLoader} />
        <Route path="instructions" element={<Instructions />} loader={protectedLoader} />
        <Route path="linux-skills" element={<LinuxSkills />} loader={protectedLoader} />
        
        {/* Allow nested routing inside KaliTop10 */}
        <Route path="instructions/kali-top-10/*" element={<KaliTop10 />} loader={protectedLoader} />
        <Route path="instructions/linux-skills/*" element={<KaliTop10 />} loader={protectedLoader} />
        <Route path="Instructions/instructions/cache-me-outside" element={<ArpCacheMeOutside/>} loader={protectedLoader} />
        <Route path="*" element={<NoMatch />} loader={protectedLoader} />
    </Route>

</Routes>
              <div className="App">
                <Outlet />
              </div>
            </div>
          </AuthProvider>
        </Authenticator>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p><Link to="/">Go to the home page</Link></p>
    </div>
  );
}
