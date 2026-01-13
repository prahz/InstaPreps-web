import Router from 'next/router';
import { useAuthState } from 'components/auth/hook';
import { useEffect, useState } from 'react';
import { STEPS_TO_NAVIGATE, APPLICATION_PATHS_TO_NAVIGATE } from 'src/constants';

// TODO: could be moved into a provider
const useUser = ({ redirectTo = '/login', redirectIfFound = false }) => {
  const { user, completed_screens: completedSteps, loading } = useAuthState();
  const [done, setDone] = useState(false);

  useEffect(() => {
    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
    if (!redirectTo || !user) {
      setDone(true);
      return;
    }

    // If redirectTo is set, redirect if the user was not found.
    if (redirectTo && !user?.contact_number) {
      if (window.location.pathname === '/signup') return;
      Router.push(redirectTo);
      return;
    }

    // If redirectIfFound is also set, redirect if the user was found
    if (redirectIfFound && user?.contact_number) {
      const [nextStep] = Object.keys(STEPS_TO_NAVIGATE).slice(completedSteps.length);
      const {
        location: { pathname }
      } = window;
      if (!nextStep && Object.values(STEPS_TO_NAVIGATE).includes(pathname)) {
        setDone(true);
        Router.push('/congratulations');
        return;
      }
      if (!nextStep && !Object.values(STEPS_TO_NAVIGATE).includes(pathname)) {
        setDone(true);
        Router.push('/congratulations');
        return;
      }
      if (pathname === nextStep) {
        setDone(true);
        return;
      }
      if (
        Object.keys(APPLICATION_PATHS_TO_NAVIGATE).includes(pathname) &&
        completedSteps.includes(APPLICATION_PATHS_TO_NAVIGATE[pathname])
      ) {
        setDone(true);
        return;
      }
      setDone(true);
      Router.push(STEPS_TO_NAVIGATE[nextStep]);
      // Router.push('/application/applicant');
    } else {
      setDone(true);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, loading, done };
};

export default useUser;
