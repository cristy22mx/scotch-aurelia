import Auth0 from 'auth0-js';

export class AuthService {
  constructor() {
    this.auth0 = new Auth0({
      domain:       'cristy22mx.github.io',
      clientID:     '	7d604c82d5e34eacbfbdc849170dfaed',
      callbackURL:  'https://cristy22mx.github.io/scotch-aurelia/login/callback',
      callbackOnLocationHash: true
    });
  }

  sigin() {
    const _this = this;
    this.auth0.login({
      connection: 'instagram',
      popup: true
    },
    function(err, profile) {
      if (err) {
        alert("something went wrong: " + err.message);
        return;
      }
      _this.auth0.getProfile(profile.idToken, function (err, profile) {
        if(err) {
          alert(err);
          return;
        }
        localStorage.setItem('token', profile.identities[0].access_token);
      });
    });
  }

  signout() {
    localStorage.removeItem('token');
  }

}
