import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {
  // Home,
  SignIn,
  // SignUp,
  // Course,
  // Profile,
  // ForgetPassword,
  // StudyArea,
  // PasswordReset,
  // Courses,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/cadastro" exact component={SignUp} /> */}
      {/* <Route path="/home" exact component={Home} />
      <Route path="/esqueceu-sua-senha" exact component={ForgetPassword} />
      <Route path="/criar-nova-senha/:token" exact component={PasswordReset} />
      <Route path="/perfil" exact component={Profile} />
      <Route path="/cursos/:id" exact component={Course} />
      <Route path="/cursos" exact component={Courses} />
      <Route path="/estudo/:courseId/topic/:topicId" exact component={StudyArea} /> */}
    </Switch>
  );
}

export default Routes;
